"use server";

import { db } from "@/db";
import { shopsTable, UsersTable } from "@/db/schema";

const bcrypt = require('bcrypt');

export async function save_user(Formdata) {
  const plainPassword = Formdata.get("password");

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

  await db.insert(UsersTable).values({
    email: Formdata.get("email"),
    password: hashedPassword,
    owner: "no",
  });
}

export async function save_shop(Formdata) {
  await db.insert(shopsTable).values({
    name: Formdata.get("shopname"),
    location: Formdata.get("location"),
    user_id: Formdata.get("user_id"),
  });
}
