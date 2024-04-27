"use server";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import db from "@/lib/client";
import { redirect } from "next/navigation";

export async function createUser(data: FormData) {
  const name = data.get("name") as string;
  const email = data.get("email") as string;
  const password = data.get("password") as string;

  const newUser = await db.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
  console.log(newUser);
  redirect("/signin");
}
