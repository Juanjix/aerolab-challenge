// types.ts

// import { InferModel } from "drizzle-orm";
import { InferModel } from "drizzle-orm";
import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";

// Define the User table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email").unique(),
  points: integer("points").default(2000),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  cost: integer("cost"),
  category: text("category"),
  imgUrl: text("img_url"),
  imgHdUrl: text("img_hd_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export interface Product {
  id: number;
  name: string;
  description: string;
  cost: number;
  category: string;
  imgUrl: string;
  imgHdUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

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
export type User = InferModel<typeof users>;
export type NewUser = InferModel<typeof users, "insert">;

// export type Product = InferModel<typeof products>;
// export type NewProduct = InferModel<typeof products, "insert">;

export type PointsHistory = InferModel<typeof pointsHistory>;
export type NewPointsHistory = InferModel<typeof pointsHistory, "insert">;

export type RedeemHistory = InferModel<typeof redeemHistory>;
export type NewRedeemHistory = InferModel<typeof redeemHistory, "insert">;
