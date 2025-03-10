"use server";

import { db } from "@/db";
import { shopsTable, UsersTable } from "@/db/schema";

export async function save_user(Formdata) {
  await db.insert(UsersTable).values({
    email: Formdata.get("email"),
    password: Formdata.get("password"),
    owner: Formdata.get("owner"),
  });
}

export async function save_shop(Formdata) {
  await db.insert(shopsTable).values({
    name: Formdata.get("shopname"),
    location: Formdata.get("location"),
    user_id: Formdata.get("user_id"),
  });
}
