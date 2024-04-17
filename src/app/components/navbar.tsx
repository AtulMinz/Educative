/* eslint-disable @next/next/no-img-element */
"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect } from "react";

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
      {session ? (
        <>
          <Popover>
            <PopoverTrigger>
              <Button variant="ghost">
                <Avatar>
                  <AvatarImage src={session.data?.user?.image || ""} />
                  <AvatarFallback className="text-black">
                    {session.data?.user?.name}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-transparent border-none w-fit shadow-none p-0">
              <span>
                <Button onClick={() => signOut()}>Logout</Button>
              </span>
            </PopoverContent>
          </Popover>
        </>
      ) : (
        <Button
          className="gap-1 bg-blue-800 hover:bg-blue-900"
          onClick={() => signIn()}
        >
          Signin &rarr;
        </Button>
      )}
    </NavigationMenu.Root>
  );
}
