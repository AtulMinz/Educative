"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
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
      <Button
        className="gap-1 bg-blue-800 hover:bg-blue-900"
        onClick={() => {}}
      >
        Signin &rarr;
      </Button>
    </NavigationMenu.Root>
  );
}
