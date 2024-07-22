import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";

// Define the User table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email").unique(),
  points: integer("points").default(2000),
});

// Define the Product table
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  cost: integer("cost"),
  category: text("category"),
  image: text("image"), // Add image field
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Define the PointsHistory table
export const pointsHistory = pgTable("points_history", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  pointsAdded: integer("points_added"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Define the RedeemHistory table
export const redeemHistory = pgTable("redeem_history", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  productId: integer("product_id").references(() => products.id),
  createdAt: timestamp("created_at").defaultNow(),
});

// Define the types for TypeScript
export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;

export type Product = InferSelectModel<typeof products>;
export type NewProduct = InferInsertModel<typeof products>;

export type PointsHistory = InferSelectModel<typeof pointsHistory>;
export type NewPointsHistory = InferInsertModel<typeof pointsHistory>;

export type RedeemHistory = InferSelectModel<typeof redeemHistory>;
export type NewRedeemHistory = InferInsertModel<typeof redeemHistory>;

// Connect to Vercel Postgres
export const db = drizzle(sql);
