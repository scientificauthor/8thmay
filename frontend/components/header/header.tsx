"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
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
  Computer,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { navItems } from "@/constants/header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function HeaderNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  const [themeMenuOpen, setThemeMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }, [isMobile, mobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          "w-full border-b transition-all duration-300 z-50 sticky top-0",
          scrolled ? "bg-green-950 text-white shadow-lg" : "bg-transparent text-black"
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
                <Menu className={cn("h-6 w-6", scrolled ? "text-white" : "text-gray-600")} />
              </button>
            )}

            <Link href="/" className="flex flex-col items-center mr-2">
              <span className={cn("font-bold text-[24px]", scrolled ? "text-white" : "text-black")}>
                (<span className="text-[#009900]">cite</span>hub).<sup className="text-[#009900] text-[12px]">1</sup>
              </span>  
              <span className={cn("text-xs md:block hidden", scrolled ? "text-gray-300" : "text-gray-500")}>
                Reference Managers & Citation Styles
              </span>
            </Link>

            <nav className={cn("items-center gap-6 transition-all duration-300", isMobile ? "hidden" : "flex")}>
              {navItems.filter(item => item.title !== "About Reference Managers").map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-green-400",
                    item.isActive
                      ? "text-green-400"
                      : scrolled
                      ? "text-white"
                      : "text-gray-600"
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
            {isMobile ? (
              <Search className={cn("h-5 w-5", scrolled ? "text-white" : "text-gray-600")} />
            ) : (
              <>
                <Search className={cn("h-5 w-5", scrolled ? "text-white" : "text-gray-600")} />
                <ShoppingCart className={cn("h-5 w-5", scrolled ? "text-white" : "text-gray-600")} />
                <div className="flex items-center justify-center rounded-full bg-green-700 h-8 w-8">
                  <User className="h-5 w-5 text-white" />
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {mobileMenuOpen && isMobile && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto transition-all duration-300">
          <div className="flex items-center justify-between p-4 border-b">
            <button 
              onClick={() => {
                if (subMenuOpen) {
                  setSubMenuOpen(false)
                } else {
                  setMobileMenuOpen(false)
                }
              }}
              aria-label={subMenuOpen ? "Back to main menu" : "Close menu"}
            >
              {subMenuOpen ? <ChevronLeft className="h-6 w-6" /> : <X className="h-6 w-6" />}
            </button>

            <div className="flex items-center">
              <span className="text-green-600 font-bold text-xl">(citehub).</span>
              <span className="text-xs text-green-600 align-top">1</span>
            </div>

            <Search className="h-6 w-6" />
          </div>

          {!subMenuOpen ? (
            <>
              <div 
                className="flex items-center gap-4 p-4 border-b cursor-pointer"
                onClick={() => setSubMenuOpen(true)}
              >
                <div className="flex items-center justify-center rounded-full bg-gray-200 h-10 w-10">
                  <User className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Hi,</p>
                      <p className="font-medium">Name Surname</p>
                      <p className="text-sm text-gray-500">Welcome</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <nav className="flex flex-col w-full">
                {navItems.filter(item => item.title !== "About Reference Managers").map((item, index) => (
                  <div key={index}>
                    <Link 
                      href={item.href} 
                      className="p-4 border-b w-full flex items-center justify-between"
                      onClick={(e) => {
                        if (item.hasDropdown) {
                          e.preventDefault()
                          setSubMenuOpen(true)
                        } else {
                          setMobileMenuOpen(false)
                        }
                      }}
                    >
                      <span>{item.title}</span>
                      {item.hasDropdown && <ChevronRight className="h-5 w-5" />}
                    </Link>
                  </div>
                ))}
              </nav>

              <div className="mt-2">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="reference-managers">
                    <AccordionTrigger className="px-4">
                      Reference Managers
                    </AccordionTrigger>
                    <AccordionContent>
                      <nav className="flex flex-col">
                        {navItems.find(item => item.title === "About Reference Managers")?.children?.map((child, index) => (
                          <Link 
                            key={index}
                            href={child.href}
                            className="p-4 w-full flex items-center hover:bg-gray-50 ml-8"
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
          ) : null}
        </div>
      )}
    </>
  )
}
