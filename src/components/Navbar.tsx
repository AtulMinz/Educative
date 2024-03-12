"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";

interface component {
  title: string;
  href: string;
}

const components: component[] = [
  {
    title: "Python",
    href: "/docs",
  },
  {
    title: "Blockchain",
    href: "/docs",
  },
  {
    title: "Javasript",
    href: "/docs",
  },
  {
    title: "Java",
    href: "/docs",
  },
  {
    title: "Go",
    href: "/docs",
  },
];

export default function Navbar() {
  return (
    <div className="flex justify-center">
      <NavigationMenu className="p-3 mx-10 flex items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/output.png"
              alt="educative-logo"
              width={80}
              height={60}
              className="ml-10 focus:cursor-pointer mr-4"
            />
          </Link>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white">
                Explore
              </NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-grow-0 lg:w-[300px]">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <li
                      key={component.title}
                      title={component.title}
                      className="hover:text-white hover:bg-slate-400 hover:rounded-md w-[7rem] h-10 pt-2 pl-4"
                    >
                      <Link href={component.href}>{component.title}</Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
              <Link href="/plans">
                <NavigationMenuLink className="text-white text-sm font-semibold pl-2">
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
        <div className="lg:ml-[60vw]">
          {" "}
          {/* Use ml-auto to push the button to the right */}
          <Button className="bg-blue-600 hover:bg-blue-900 duration-150 text-white">
            Sign In
          </Button>
        </div>
      </NavigationMenu>
    </div>
  );
}
