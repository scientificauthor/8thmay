"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Globe,
  LogOut,
  Menu,
  Moon,
  Search,
  Settings,
  ShoppingCart,
  Sun,
  User,
  X,
  Bell,
  Laptop,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/constants/header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "w-full border-b transition-all duration-300 z-50 sticky top-0",
          scrolled
            ? "bg-green-950 text-white shadow-lg dark:bg-gray-900"
            : "bg-transparent text-black dark:text-white"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            {isMobile && (
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu
                  className={cn(
                    "h-6 w-6",
                    scrolled ? "text-white" : "text-gray-600 dark:text-gray-300"
                  )}
                />
              </button>
            )}

            <Link href="/" className="flex flex-col items-center mr-2">
              <span
                className={cn(
                  "font-bold text-[24px]",
                  scrolled ? "text-white" : "text-black dark:text-white"
                )}
              >
                (<span className="text-[#009900]">cite</span>hub).
                <sup className="text-[#009900] text-[12px]">1</sup>
              </span>
              <span
                className={cn(
                  "text-xs md:block hidden",
                  scrolled ? "text-gray-300" : "text-gray-500 dark:text-gray-400"
                )}
              >
                Reference Managers & Citation Styles
              </span>
            </Link>

            <nav
              className={cn(
                "items-center gap-6 transition-all duration-300",
                isMobile ? "hidden" : "flex"
              )}
            >
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-green-400",
                      item.isActive
                        ? "text-green-400"
                        : scrolled
                          ? "text-white"
                          : "text-gray-600 dark:text-gray-300"
                    )}
                  >
                    <div className="flex items-center gap-1">
                      {item.title}
                      {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                    </div>
                  </Link>

                  {/* Dropdown */}
                  {item.hasDropdown && item.children && (
                    <div className="absolute top-full mt-2 left-0 hidden group-hover:flex flex-col bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow-md z-50 min-w-[180px]">
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.href}
                          className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-green-500"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {isMobile ? (
              <>
                <Search
                  className={cn(
                    "h-5 w-5",
                    scrolled ? "text-white" : "text-gray-600 dark:text-gray-300"
                  )}
                />
              </>
            ) : (
              <>
                <Search
                  className={cn(
                    "h-5 w-5",
                    scrolled ? "text-white" : "text-gray-600 dark:text-gray-300"
                  )}
                />
                <ShoppingCart
                  className={cn(
                    "h-5 w-5",
                    scrolled ? "text-white" : "text-gray-600 dark:text-gray-300"
                  )}
                />
                <div className="flex items-center justify-center rounded-full bg-[#38571A] dark:bg-gray-700 h-8 w-8">
                  <User className="h-5 w-5 text-white" />
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {mobileMenuOpen && isMobile && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto overflow-x-hidden transition-all duration-300">
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-700 w-full">
            <div className="flex gap-4">
              <button
                onClick={() => {
                  if (accountMenuOpen) {
                    setAccountMenuOpen(false);
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                aria-label={
                  accountMenuOpen ? "Back to main menu" : "Close menu"
                }
                className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-1 transition-colors"
              >
                {accountMenuOpen ? (
                  <ChevronLeft className="h-6 w-6" />
                ) : (
                  <X className="h-6 w-6" />
                )}
              </button>
              <Link href="/" className="flex flex-col items-center mr-2">
                <span className="font-bold text-[24px] text-black dark:text-white">
                  (<span className="text-[#009900]">cite</span>hub).
                  <sup className="text-[#009900] text-[12px]">1</sup>
                </span>
                <span className="text-xs md:block hidden text-gray-500 dark:text-gray-400">
                  Reference Managers & Citation Styles
                </span>
              </Link>
            </div>

            <Search className="h-6 w-6 cursor-pointer hover:text-gray-800 dark:hover:text-gray-200 transition-colors" />
          </div>

          {!accountMenuOpen ? (
            <>
              <div
                className="flex items-center gap-4 p-4 border-b dark:border-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setAccountMenuOpen(true)}
              >
                <div className="flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 h-10 w-10">
                  <User className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="font-medium text-black dark:text-white">Hi,</p>
                      <p className="font-medium text-black dark:text-white">Name Surname</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Welcome</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
              <div className="border-b border-t p-4 dark:border-gray-700">
                <span className="flex ml-[64px] text-black dark:text-white">
                  Super administrator dashboard
                </span>
              </div>

              <nav className="flex flex-col w-full ml-[64px] overflow-x-hidden">
                {navItems
                  .filter((item) => item.title !== "About Reference Managers")
                  .map((item, index) => (
                    <div key={index}>
                      <Link
                        href={item.href}
                        className="p-4 w-full flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors text-black dark:text-gray-200"
                        onClick={(e) => {
                          if (item.hasDropdown) {
                            e.preventDefault();
                            // Handle dropdown if needed
                          } else {
                            setMobileMenuOpen(false);
                          }
                        }}
                      >
                        <span>{item.title}</span>
                        {item.hasDropdown && (
                          <ChevronRight className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                        )}
                      </Link>
                    </div>
                  ))}
              </nav>

              <div className="mt-2 w-full overflow-x-hidden">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value="reference-managers"
                    className="ml-[64px] text-[16px] border-none"
                  >
                    <AccordionTrigger className="px-4 font-normal hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors text-black dark:text-gray-200 data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-gray-800/50">
                      Reference Managers
                    </AccordionTrigger>
                    <AccordionContent className="bg-gray-50 dark:bg-gray-900/50">
                      <nav className="flex flex-col">
                        {navItems
                          .find(
                            (item) => item.title === "About Reference Managers"
                          )
                          ?.children?.map((child, index) => (
                            <Link
                              key={index}
                              href={child.href}
                              className="p-4 w-full flex items-center hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors ml-8 text-black dark:text-gray-200"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.title}
                            </Link>
                          ))}
                      </nav>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </>
          ) : (
            <div className="p-4 bg-white dark:bg-gray-900 min-h-screen">
              {/* Header */}
              <div className="mb-6 flex items-center gap-2">
                <button
                  onClick={() => setAccountMenuOpen(false)}
                  aria-label="Go back to main menu"
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-1 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                </button>
                <h2 className="text-lg font-semibold ml-[16px] text-black dark:text-white">Main Menu</h2>
              </div>

              <div className="space-y-4 ml-[64px]">
                {/* Account Settings */}
                <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Settings className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-gray-800 dark:text-gray-200">Account Settings</span>
                </div>

                {/* Notifications */}
                <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Bell className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-gray-800 dark:text-gray-200">Notifications</span>
                </div>

                {/* Language */}
                <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Globe className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-gray-800 dark:text-gray-200">Language</span>
                </div>

                {/* Theme Section */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-800 dark:text-gray-200">Theme: {theme === 'system' ? 'System' : theme === 'dark' ? 'Dark' : 'Light'}</span>
                  </div>
                  <div className="ml-10 space-y-2">
                    <button
                      onClick={() => setTheme("system")}
                      className="flex items-center gap-3 w-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors p-2 rounded"
                    >
                      <Laptop className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                      <span className="text-gray-800 dark:text-gray-200">Auto</span>
                    </button>
                    <p className="text-sm text-gray-500 dark:text-gray-400 ml-8">
                      Use the same theme as your device
                    </p>
                    <button
                      onClick={() => setTheme("light")}
                      className="flex items-center gap-3 w-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors p-2 rounded"
                    >
                      <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                      <span className="text-gray-800 dark:text-gray-200">Light</span>
                    </button>
                    <p className="text-sm text-gray-500 dark:text-gray-400 ml-8">
                      Light background with dark text.
                    </p>
                    <button
                      onClick={() => setTheme("dark")}
                      className="flex items-center gap-3 w-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors p-2 rounded"
                    >
                      <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                      <span className="text-gray-800 dark:text-gray-200">Dark</span>
                    </button>
                    <p className="text-sm text-gray-500 dark:text-gray-400 ml-8">
                      Dark background with light text.
                    </p>
                  </div>
                </div>

                {/* Logout Button */}
              </div>
              <button className="w-full flex items-center gap-2 text-gray-800 dark:text-gray-200 border-b border-t dark:border-gray-700 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <LogOut className="h-5 w-5 text-gray-600 dark:text-gray-400 ml-[64px]" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
