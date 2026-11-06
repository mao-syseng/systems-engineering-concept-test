"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function NavbarClient() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center space-x-2 text-lg font-semibold">
            <img src="/favicon.svg" alt="SEC-Hub" className="h-8 w-8" />
            <span className="hidden sm:inline">RDS 81346</span>
          </a>

          <nav className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#iso-iec-81346" className="h-9 px-2.5 py-1.5">
                    ISO/IEC 81346
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Software</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[220px] gap-1 p-2">
                      <li><NavigationMenuLink href="#sec-hub">SEC-Hub</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#rds-81346-app">RDS 81346 App</NavigationMenuLink></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#free-material" className="h-9 px-2.5 py-1.5">
                    Free Material
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Knowledge Center</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[220px] gap-1 p-2">
                      <li><NavigationMenuLink href="#ontology">RDS 81346 Ontology</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#videos">Videos</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#why-rds-81346">Why RDS 81346</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#articles">Articles</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#faq">FAQ</NavigationMenuLink></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#about" className="h-9 px-2.5 py-1.5">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isOpen && (
          <nav className="border-t border-border/40 lg:hidden">
            <NavigationMenu orientation="vertical" className="w-full max-w-none flex-col items-stretch">
              <NavigationMenuList className="w-full flex-col items-stretch gap-0">
                <NavigationMenuItem className="w-full">
                  <NavigationMenuLink href="#iso-iec-81346" className="w-full rounded-none px-4 py-3">
                    ISO/IEC 81346
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <NavigationMenuTrigger className="w-full justify-start rounded-none px-4 py-3">
                    Software
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-full rounded-none border-t border-border/40">
                    <ul className="flex flex-col gap-0 p-0">
                      <li><NavigationMenuLink href="#sec-hub" className="w-full rounded-none px-6 py-3">SEC-Hub</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#rds-81346-app" className="w-full rounded-none px-6 py-3">RDS 81346 App</NavigationMenuLink></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <NavigationMenuLink href="#free-material" className="w-full rounded-none px-4 py-3">
                    Free Material
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <NavigationMenuTrigger className="w-full justify-start rounded-none px-4 py-3">
                    Knowledge Center
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-full rounded-none border-t border-border/40">
                    <ul className="flex flex-col gap-0 p-0">
                      <li><NavigationMenuLink href="#ontology" className="w-full rounded-none px-6 py-3">RDS 81346 Ontology</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#videos" className="w-full rounded-none px-6 py-3">Videos</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#why-rds-81346" className="w-full rounded-none px-6 py-3">Why RDS 81346</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#articles" className="w-full rounded-none px-6 py-3">Articles</NavigationMenuLink></li>
                      <li><NavigationMenuLink href="#faq" className="w-full rounded-none px-6 py-3">FAQ</NavigationMenuLink></li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <NavigationMenuLink href="#about" className="w-full rounded-none px-4 py-3">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        )}
      </div>
    </header>
  );
}
