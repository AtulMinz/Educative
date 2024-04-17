/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Signin() {
  return (
    <main className="bg-[#e9ecef] min-h-screen flex justify-center items-center">
      <div className="bg-[#ffffff] w-4/5 h-[80vh] flex flex-row rounded-md">
        <div className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="background"
            className="h-full"
          />
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="">
            <Button
              onClick={() => signIn("google")}
              className="flex space-x-2 bg-[#ced4da] text-black"
            >
              <span>
                <Image src="google.svg" alt="signin" width={15} height={5} />
              </span>
              <span>Signin</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
