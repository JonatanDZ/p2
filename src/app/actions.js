"use server";

import { db } from "../db";
import { shopsTable, UsersTable } from "../db/schema";

export async function save_user(Formdata) {
  await db.insert(UsersTable).values({
    email: Formdata.get("email"),
    password: Formdata.get("password"), //Hash password
    owner: "no",
  });
}

export async function login_check(Formdata) {
  let result = await db.select().from(UsersTable);
  for (let i = 0; i < result.length; i++) {
    if (result[i]["email"] == Formdata.get("email")) {
      if (result[i]["password"] == Formdata.get("password"))
        console.log("Database:" + result[i]["email"], Formdata.get("email"));
      //INSERT STUFF THAT LEADS TO NEXT PAGE HERE!
    }
  }
}

export async function save_shop(Formdata) {
  await db.insert(shopsTable).values({
    name: Formdata.get("shopname"),
    location: Formdata.get("location"),
    user_id: Formdata.get("user_id"),
  });
}
