"use server";

import db from "@/lib/client";
import { redirect } from "next/navigation";
import { hash } from "bcrypt";

export async function createUser(data: FormData) {
  const name = data.get("name") as string;
  const email = data.get("email") as string;
  const password = data.get("password") as string;
  const hashedPassword = await hash(password, 10);

  const newUser = await db.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });
  console.log(newUser);
  redirect("/signin");
}
