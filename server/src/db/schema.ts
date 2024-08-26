import { pgTable, varchar, boolean, serial, text } from "drizzle-orm/pg-core";

export const testItems = pgTable("test_items_two", {
  id: varchar("id", { length: 255 }).primaryKey(),
  content: varchar("content", { length: 255 }),
  important: boolean("important"),
});

export const users = pgTable("test_users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }),
});
