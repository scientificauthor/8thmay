"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="border-b border-border border-b-gray-400 sticky top-0 z-40 bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4 md:space-x-8">
          
          <Link href="/" className="flex flex-col">
            <span className="font-bold">
              (<span className="text-green-600 font-bold">cite</span>
              hub).<sup className=" text-xs ml-0.5">1</sup>
            </span>
            <span className="text-[10px] font-bold ml-1 hidden sm:block">
              Reference Manager & Citation Styles
            </span>
          </Link>
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Overview
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Mendeley
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Zotero
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    EndNote
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About Reference Managers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          <div className="text-sm font-medium leading-none">
                            Comparisons
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Compare different software features and capabilities
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          <div className="text-sm font-medium leading-none">
                            Developments
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Latest updates and development roadmap
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#"
                        >
                          <div className="text-sm font-medium leading-none">
                            Literature
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Academic papers and documentation
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <Button variant={"outline-none"} size="icon">
            <Search className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-[#38571A] text-white">
                    S
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] sm:w-[350px] p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link
                    href="/"
                    className="flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-green-600 font-semibold">
                      (<span className="text-green-600 font-bold">cite</span>
                      hub)<sup className="text-green-600 text-xs ml-0.5">1</sup>
                    </span>
                  </Link>
                </div>
                <div className="p-4 border-b">
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-8" />
                  </div>
                </div>
                <div className="p-4 overflow-y-auto flex-1">
                  <nav className="flex flex-col space-y-1">
                    <Link
                      href="#"
                      className="px-2 py-1.5 text-sm rounded-md hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Overview
                    </Link>
                    <Link
                      href="#"
                      className="px-2 py-1.5 text-sm rounded-md hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Software1
                    </Link>
                    <Link
                      href="#"
                      className="px-2 py-1.5 text-sm rounded-md hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Software2
                    </Link>
                    <Link
                      href="#"
                      className="px-2 py-1.5 text-sm rounded-md hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      Software3
                    </Link>
                    <div className="px-2 py-1.5 text-sm rounded-md hover:bg-accent hover:text-accent-foreground flex items-center justify-between">
                      About Softwares
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <div className="pl-4 border-l border-border ml-2 space-y-1">
                      <Link
                        href="#"
                        className="px-2 py-1.5 text-sm rounded-md hover:bg-accent hover:text-accent-foreground block"
                        onClick={() => setIsOpen(false)}
                      >
                        Comparisons
                      </Link>
                      <Link
                        href="#"
                        className="px-2 py-1.5 text-sm rounded-md hover:bg-accent hover:text-accent-foreground block"
                        onClick={() => setIsOpen(false)}
                      >
                        Developments
                      </Link>
                      <Link
                        href="#"
                        className="px-2 py-1.5 text-sm rounded-md hover:bg-accent hover:text-accent-foreground block"
                        onClick={() => setIsOpen(false)}
                      >
                        Literature
                      </Link>
                    </div>
                  </nav>
                </div>
                <div className="p-4 border-t">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-[#38571A] text-white">
                        S
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Super Admin</p>
                      <p className="text-xs text-muted-foreground">
                        admin@citehub.net
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
