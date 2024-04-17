"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function Signin() {
  return (
    <main>
      <div>
        <div>
          <Button onClick={() => signIn("google")}>Signin</Button>
        </div>
      </div>
    </main>
  );
}
