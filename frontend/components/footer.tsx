"use client";

import Link from "next/link";
import { ArrowUp, X, Youtube } from "lucide-react";
import { useState } from "react";
import AboutCourses from "@/components/about-courses";
import Company from "@/components/company";
import LanguageButton from "./language-button";
import Contact from "@/components/contact";
import TermsAndConditions from "./terms-and-conditions";
import { FooterBottomDesktop } from "./footer-bottom-desktop";
import { FooterBottomMobile } from "./footer-bottom-mobile";

export function Footer() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <footer className="bg-[#001E00] text-white py-10">
      <div className="container w-full sm:mx-auto px-4 sm:px-6 lg:px-8">
        {/* Language Button */}
        <LanguageButton customStyle="hidden sm:block" />
        {/* Main Content */}
        <div className="flex flex-col sm:flex-row gap-8 mb-10 items-center justify-center">
          {/* About Courses */}
          <AboutCourses />
          <div className="block sm:hidden w-full h-0.5 bg-[#666666]" />

          {/* Company */}
          <Company />
          <div className="block sm:hidden w-full h-0.5 bg-[#666666]" />

          {/* Contact */}
          <Contact />
          <div className="block sm:hidden w-full h-0.5 bg-[#666666]" />
        </div>

        {/* Middle Section */}
        <div className="hidden sm:block flex  flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isDarkTheme}
              onChange={toggleTheme}
              className="sr-only peer"
            />
            <div className="w-12 h-6 bg-gray-600 rounded-full peer peer-checked:bg-gray-400 peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all duration-300"></div>
          </label>

          <div className="flex flex-col items-center md:items-end gap-4">
            <Link
              href="#"
              className="text-sm hover:underline hover:text-green-400 transition-colors duration-200"
            >
              Contact Form
            </Link>
            <div className="flex flex-col items-center gap-2">
              <ArrowUp
                className="h-9 w-9 p-2 bg-[#68BB63] hover:bg-green-800 rounded-lg cursor-pointer transition-colors duration-200"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
              <span
                className="text-sm cursor-pointer hover:underline hover:text-green-400 transition-colors duration-200"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Go To Top
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="text-white hover:text-green-400 transition-colors duration-200"
              >
                <Youtube className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-green-400 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </Link>
              <span className="text-sm">Follow Us</span>
            </div>
          </div>
        </div>
        {/* Bottom Section Mobile */}
        <FooterBottomMobile />
        {/* Bottom Section Desktop */}
        <FooterBottomDesktop />
      </div>
    </footer>
  );
}
