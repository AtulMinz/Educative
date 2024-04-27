/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createUser } from "../actions/createUser";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  return (
    <main className="bg-[#e9ecef] min-h-screen flex justify-center items-center">
      <div className="bg-[#ffffff] w-4/5 h-[80vh] flex flex-row rounded-lg">
        <div className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="background"
            className="h-full rounded-l-lg"
          />
        </div>
        <div className="w-1/2 flex justify-center items-center flex-col gap-4">
          <form
            className="space-y-5 w-[50%] flex items-center flex-col"
            action={createUser}
          >
            <Input
              placeholder="Your Name"
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <Input
              placeholder="Your Email"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Input
              placeholder="Your Password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button
              type="submit"
              className="flex space-x-2 bg-[#ced4da] text-black w-1/2"
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
