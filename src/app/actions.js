"use server";

/*import { db } from "../db";
//import { shopsTable, UsersTable } from "../db/schema";
//import { eq } from 'drizzle-orm';
>>>>>>> d094525bcc9b7b0d37e6d958d1c0c1fbcc43508e

const bcrypt = require("bcrypt");

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

export async function login_check(Formdata) {
  try {
    let result = await db
      .select()
      .from(UsersTable)
      .where(eq(UsersTable.email, Formdata.get("email")));
    if (result.length > 0) {
      const user = result[0];

      const isPasswordCorrect = await bcrypt.compare(
        Formdata.get("password"),
        user.password
      );

      if (isPasswordCorrect) {
        console.log("Success");
      } else {
        console.log("Adgangskode forkert");
      }
    } else {
      console.log("Ingen bruger fundet");
    }
  } catch {
    console.log("error");
  }
}

export async function save_shop(Formdata) {
  await db.insert(shopsTable).values({
    name: Formdata.get("shopname"),
    location: Formdata.get("location"),
    user_id: Formdata.get("user_id"),
  });
}
*/
