import { sql } from "drizzle-orm";
import { boolean, timestamp } from "drizzle-orm/gel-core";
import { time } from "drizzle-orm/mysql-core";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const UsersTable = sqliteTable("users", {
  id: integer("id").primaryKey(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  owner: integer("owner"), //Skal somehow gøres til True/False
});

export const itemsTable = sqliteTable("items", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  stock: integer("stock"),
  price: integer("price"),
  shop_id: integer("shop_id")
    .notNull()
    .references(() => shopsTable.id),
});

export const shopsTable = sqliteTable("shops", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  location: text("location").notNull(),
  user_id: integer("user_id")
    .notNull()
    .references(() => UsersTable.id), //Skal måske være i usersTable? Eller begge dele? En butik kan godt have flere ejere men en person kan også have flere butikker?
});

/*export const eventsTable = sqliteTable("events", {
  id: integer("id").primaryKey(),
  //Location or shop?
  //time: timestamp("time")
  //duration: number("duration")
});*/

/*export const postsTable = sqliteTable("posts", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => UsersTable.id, { onDelete: "cascade" }),
  createdAt: text("created_at")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updateAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date()
  ),
});*/

export type InsertUser = typeof UsersTable.$inferInsert;
export type SelectUser = typeof UsersTable.$inferSelect;

/*export type InsertPost = typeof postsTable.$inferInsert;
export type SelectPost = typeof postsTable.$inferSelect;*/
