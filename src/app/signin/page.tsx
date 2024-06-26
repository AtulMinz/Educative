/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Signin() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signIn("credentials", { email, password, callbackUrl: "/" });
  };

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
            onSubmit={(e) => handleSubmit(e)}
          >
            <Input
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Input
              placeholder="Your Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button
              type="submit"
              className="flex space-x-2 bg-[#ced4da] text-black w-1/2"
            >
              Signin
            </Button>
          </form>
          <span className="text-sm font-semibold text-neutral-500">Or</span>
          <div className="w-1/2 flex justify-center">
            <Button
              onClick={() =>
                signIn("google", {
                  callbackUrl: "/",
                })
              }
              className="flex space-x-2 bg-[#ced4da] text-black w-1/2"
            >
              <span>
                <Image
                  src="https://e7.pngegg.com/pngimages/704/688/png-clipart-google-google-thumbnail.png"
                  alt="signin"
                  width={15}
                  height={5}
                  className="mix-blend-multiply"
                />
              </span>
              <span>Signin</span>
            </Button>
          </div>
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link href={"/register"} className="text-blue-600">
              Register
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
