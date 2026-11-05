"use client";

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
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 text-lg font-semibold">
            <img src="/favicon.svg" alt="SEC-Hub" className="h-8 w-8" />
            <span className="hidden sm:inline">Systems Engineering Concept</span>
          </a>

          {/* Navigation Menu */}
          <nav className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="#product"
                      className="inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
                    >
                      The Product
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="#software"
                      className="inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
                    >
                      The Software
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>About</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        <li>
                          <NavigationMenuLink
                            href="#about/company"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Our Company</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Learn about our mission and team
                            </p>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            href="#about/team"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Team</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Meet the people behind the product
                            </p>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            href="#about/careers"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Careers</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Join our growing team
                            </p>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            href="#about/blog"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Blog</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Read our latest articles and insights
                            </p>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            href="#about/contact"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Contact</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Get in touch with us
                            </p>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            href="#about/press"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Press</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Media kit and press releases
                            </p>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
        </div>
      </div>
    </header>
  );
}
