import { users, waitlistEmails, type User, type InsertUser, type WaitlistEmail, type InsertWaitlistEmail } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  addWaitlistEmail(data: InsertWaitlistEmail): Promise<WaitlistEmail>;
  getWaitlistEmail(email: string): Promise<WaitlistEmail | undefined>;
  getAllWaitlistEmails(): Promise<WaitlistEmail[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async addWaitlistEmail(data: InsertWaitlistEmail): Promise<WaitlistEmail> {
    const [waitlistEmail] = await db
      .insert(waitlistEmails)
      .values(data)
      .returning();
    return waitlistEmail;
  }

  async getWaitlistEmail(email: string): Promise<WaitlistEmail | undefined> {
    const [waitlistEmail] = await db.select().from(waitlistEmails).where(eq(waitlistEmails.email, email));
    return waitlistEmail || undefined;
  }

  async getAllWaitlistEmails(): Promise<WaitlistEmail[]> {
    return await db.select().from(waitlistEmails);
  }
}

export const storage = new DatabaseStorage();
