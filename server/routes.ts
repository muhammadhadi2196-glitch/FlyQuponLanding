import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistEmailSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist email signup
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistEmailSchema.parse(req.body);
      
      // Check if email already exists
      const existingEmail = await storage.getWaitlistEmail(validatedData.email);
      if (existingEmail) {
        return res.status(400).json({ 
          message: "Email already registered for waitlist" 
        });
      }

      const waitlistEmail = await storage.addWaitlistEmail(validatedData);
      
      res.status(201).json({ 
        message: "Successfully added to waitlist",
        email: waitlistEmail.email 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: error.errors[0]?.message || "Invalid email format" 
        });
      }
      
      console.error("Waitlist signup error:", error);
      res.status(500).json({ 
        message: "Failed to add email to waitlist" 
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

  const httpServer = createServer(app);
  return httpServer;
}
