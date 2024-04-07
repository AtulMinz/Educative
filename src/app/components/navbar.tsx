"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const session = useSession();
  const router = useRouter();
  return (
    <NavigationMenu.Root className="flex justify-around p-3 text-slate-200 gap-3">
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="/docs"
            className="lg:p-4 hover:text-blue-400"
          >
            Get Started
          </NavigationMenu.Link>
          <NavigationMenu.Link
            href="/courses"
            className="lg:p-4 hover:text-blue-400"
          >
            Courses
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      {!session ? (
        JSON.stringify(session.data?.user)
      ) : (
        <Button
          className="gap-1 bg-blue-800 hover:bg-blue-900"
          onClick={() => router.push("/signin")}
        >
          Signin &rarr;
        </Button>
      )}
    </NavigationMenu.Root>
  );
}
