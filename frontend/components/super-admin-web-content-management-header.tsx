"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  Menu,
  ChevronDown,
  ChevronRight,
  Settings,
  Bell,
  Globe,
  Sun,
  LampDesk,
  Moon,
  LogOut,
} from "lucide-react";
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
import { DialogTitle } from "@radix-ui/react-dialog";
import { UserSettingsMenu } from "./user-settings-main-menu";
import { SuperAdminNavigationMenu } from "./super-admin-menu";

export function SuperAdminWebContentManagementHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMainMenuExpanded, setIsMainMenuExpanded] = useState<boolean>(false);
  const [isSuperAdminMainMenuExpanded, setIsSuperAdminMainMenuExpanded] =
    useState<boolean>(false);

  return (
    <header className="border-b border-border border-b-gray-400 sticky top-0 z-50 bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu */}
        <div className="flex sm:hidden items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-accent"
                  aria-label="Toggle mobile menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[80%] sm:w-[350px] p-0">
                <DialogTitle></DialogTitle>
                <div className="flex flex-col h-full overflow-y-auto">
                  <div className="flex items-center justify-between p-4 border-b">
                    <Link
                      href="/"
                      className="flex items-center"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="font-bold">
                        (<span className="text-green-600 font-bold">cite</span>
                        hub).<sup className="text-xs ml-0.5">1</sup>
                      </span>
                    </Link>
                  </div>
                  <div className="p-4 border-t">
                    <div className="flex items-center justify-between space-x-3">
                      <div className="flex gap-2 items-center">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback className="bg-[#38571A] text-white">
                            S
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Hi,</p>
                          <p className="text-sm font-medium">Name Surname</p>
                          <p className="text-xs text-muted-foreground">
                            Welcome
                          </p>
                        </div>
                      </div>
                      <div>
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <SuperAdminNavigationMenu
                      isSuperAdminMainMenuExpanded={
                        isSuperAdminMainMenuExpanded
                      }
                      setIsSuperAdminMainMenuExpanded={
                        setIsSuperAdminMainMenuExpanded
                      }
                      setIsMainMenuExpanded={setIsMainMenuExpanded}
                    />
                    {/* Main Menu  */}
                    <UserSettingsMenu
                      isMainMenuExpanded={isMainMenuExpanded}
                      setIsMainMenuExpanded={setIsMainMenuExpanded}
                      setIsSuperAdminMainMenuExpanded={
                        setIsSuperAdminMainMenuExpanded
                      }
                    />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex flex-col">
              <span className="font-bold">
                (<span className="text-green-600 font-bold">cite</span>
                hub).<sup className="text-xs ml-0.5">1</sup>
              </span>
            </Link>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-accent"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>

        {/* Desktop Menu */}

        <div className="hidden sm:flex items-center justify-between w-full space-x-6">
          <Link href="/" className="flex flex-col">
            <span className="font-bold">
              (<span className="text-green-600 font-bold">cite</span>
              hub).<sup className="text-xs ml-0.5">1</sup>
            </span>
            <span className="text-[10px] font-semibold ml-1">
              Reference Manager & Citation Styles
            </span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-2">
              <NavigationMenuItem>
                <Link href="#overview" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    aria-label="Overview"
                  >
                    Overview
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#mendeley" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    aria-label="Mendeley"
                  >
                    Mendeley
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#zotero" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    aria-label="Zotero"
                  >
                    Zotero
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#endnote" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    aria-label="EndNote"
                  >
                    EndNote
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger aria-label="About Reference Managers">
                  About Reference Managers
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#comparisons"
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
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#developments"
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
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="#literature"
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
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-accent"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-accent"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-accent"
                  aria-label="User menu"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-[#38571A] text-white">
                      S
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="text-sm font-medium">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-sm font-medium">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="text-sm font-medium">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
