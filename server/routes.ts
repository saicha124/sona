import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";

import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString("hex")}.${salt}`;
}

async function seedUser() {
  const existingUser = await storage.getUserByUsername("admin");
  if (!existingUser) {
    console.log("Seeding admin user...");
    const hashedPassword = await hashPassword("admin");
    await storage.createUser({
      username: "admin",
      password: hashedPassword,
      fullName: "Administrateur",
      role: "admin"
    });
    console.log("Admin user seeded: admin / admin");
  }
}

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {
  setupAuth(app);
  
  // Seed admin user
  seedUser().catch(console.error);

  // Put application routes here if any additional logic is needed
  // For now, auth routes are handled by setupAuth

  return httpServer;
}
