"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronDown, Search, ShoppingCart, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { navItems } from "@/constants/header"

export function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("w-full border-b transition-colors duration-300 z-50 sticky top-0", scrolled ? "bg-green-950 text-white shadow-lg" : "bg-transparent")}>
      <div className=" flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex flex-col items-center mr-2">
            <span className="text-green-600 font-bold text-xl">(citehub).</span>
            <span className="text-xs text-gray-500">Reference Managers & Citation Styles</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-green-600",
                  item.isActive ? "text-green-600" : "text-gray-600",
                )}
              >
                <div className="flex items-center gap-1">
                  {item.title}
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </div>
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Search className="h-5 w-5 text-gray-600" />
          <ShoppingCart className="h-5 w-5 text-gray-600" />
          <div className="flex items-center justify-center rounded-full bg-green-700 h-8 w-8">
            <User className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
    </header>
  )
}
