import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistEmailSchema } from "@shared/schema";
import { googleSheetsService } from "./google-sheets";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist email signup
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistEmailSchema.parse(req.body);
      
      // Check if email already exists in database
      const existingEmail = await storage.getWaitlistEmail(validatedData.email);
      if (existingEmail) {
        return res.status(400).json({ 
          message: "Email already registered for waitlist" 
        });
      }

      // Add to database
      const waitlistEmail = await storage.addWaitlistEmail(validatedData);
      
      // Sync with Google Sheets
      try {
        await googleSheetsService.addEmail(validatedData.email);
        console.log(`Email ${validatedData.email} saved to database and synced to Google Sheets`);
      } catch (sheetsError) {
        console.error("Failed to sync with Google Sheets:", sheetsError);
        console.log(`Email ${validatedData.email} saved to database (Google Sheets sync failed)`);
      }
      
      res.status(201).json({ 
        message: "Successfully added to waitlist! 🚀",
        email: waitlistEmail.email 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: error.errors[0]?.message || "Please enter a valid email address" 
        });
      }
      
      console.error("Waitlist signup error:", error);
      res.status(500).json({ 
        message: "Failed to add email to waitlist. Please try again." 
      });
    }
  });

  // Get waitlist stats (optional - for admin purposes)
  app.get("/api/waitlist/stats", async (req, res) => {
    try {
      const emails = await storage.getAllWaitlistEmails();
      res.json({ count: emails.length });
    } catch (error) {
      console.error("Failed to get waitlist stats:", error);
      res.status(500).json({ message: "Failed to get waitlist stats" });
    }
  });

  // Sync existing database emails to Google Sheets (Admin only)
  app.post("/api/waitlist/sync-sheets", async (req, res) => {
    try {
      // Check for admin authorization
      const authHeader = req.headers.authorization;
      const expectedToken = process.env.ADMIN_TOKEN || "flyqupon-admin-2024";
      
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Unauthorized: Bearer token required" });
      }
      
      const token = authHeader.substring(7);
      if (token !== expectedToken) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
      }
      
      const emails = await storage.getAllWaitlistEmails();
      let syncedCount = 0;
      let failedCount = 0;
      
      for (const emailData of emails) {
        try {
          await googleSheetsService.addEmail(emailData.email);
          syncedCount++;
        } catch (error) {
          console.error(`Failed to sync email ${emailData.email}:`, error);
          failedCount++;
        }
      }
      
      res.json({ 
        message: `Sync completed: ${syncedCount} emails synced, ${failedCount} failed`,
        synced: syncedCount,
        failed: failedCount,
        total: emails.length
      });
    } catch (error) {
      console.error("Failed to sync emails to Google Sheets:", error);
      res.status(500).json({ message: "Failed to sync emails to Google Sheets" });
    }
  });

  // Export waitlist emails as CSV (Admin only)
  app.get("/api/waitlist/export", async (req, res) => {
    try {
      // Check for admin authorization
      const authHeader = req.headers.authorization;
      const expectedToken = process.env.ADMIN_TOKEN || "flyqupon-admin-2024";
      
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Unauthorized: Bearer token required" });
      }
      
      const token = authHeader.substring(7);
      if (token !== expectedToken) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
      }
      
      const emails = await storage.getAllWaitlistEmails();
      
      // Create CSV content
      const csvHeader = "Email,Date Added\n";
      const csvRows = emails.map(email => 
        `${email.email},${email.createdAt.toISOString()}`
      ).join('\n');
      
      const csvContent = csvHeader + csvRows;
      
      // Set headers for CSV download
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename="flyqupon-waitlist.csv"');
      res.send(csvContent);
    } catch (error) {
      console.error("Failed to export waitlist:", error);
      res.status(500).json({ message: "Failed to export waitlist" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
