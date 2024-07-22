// types.ts

import { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";
import { Key } from "react";

// Define the User table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email").unique(),
  points: integer("points").default(2000),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// export const Product = pgTable("product", {
//   id: serial("id").primaryKey(),
//   name: text("name"),
//   description: text("description"),
//   cost: integer("cost"),
//   category: text("category"),
//   imgUrl: text("img_url"),
//   imgHdUrl: text("img_hd_url"),
//   createdAt: timestamp("created_at").defaultNow(),
//   updatedAt: timestamp("updated_at").defaultNow(),
// });

export interface Product {
  id: Key | null | undefined;
  _id: string;
  name: string;
  description?: string;
  cost: number;
  category: string;
  img: {
    url: string;
    hdUrl: string;
  };
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
  // productId: integer("product_id").references(() => product.id),
  createdAt: timestamp("created_at").defaultNow(),
});

// Define the types for TypeScript
export type User = InferSelectModel<typeof users>;
// export type NewUser = InferInsertModel<typeof users, insert>;

// export type Products = InferSelectModel<typeof Product>;
// export type NewProduct = InferInsertModel<typeof Product, "insert">;

export type PointsHistory = InferSelectModel<typeof pointsHistory>;
// export type NewPointsHistory = InferInsertModel<typeof pointsHistory, "insert">;

export type RedeemHistory = InferSelectModel<typeof redeemHistory>;
// export type NewRedeemHistory = InferInsertModel<typeof redeemHistory, "insert">;
