"use client";

import Link from "next/link";
import {
  Globe,
  ArrowUp,
  Instagram,
  Twitter,
  Moon,
  Sun,
  X,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Footer() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <footer className="bg-[#001E00] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Language Button */}
        <div className="mb-6">
          <Button
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-green-900 flex items-center space-x-2 w-full sm:w-auto"
          >
            <Globe className="h-4 w-4" />
            <span>Turkish</span>
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 items-center justify-start">
          {/* About Courses */}
          <div className="flex flex-col gap-4 items-start">
            <h3 className="font-medium text-[#A5A5A5] text-lg">
              About Courses
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Request Online Course
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Verify citehub.net Certificate
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Help
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Training Events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4 items-start">
            <h3 className="font-medium text-[#A5A5A5] text-lg">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  References
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Our Crew
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Affiliate Programme
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4 items-start ">
            <h3 className="font-medium text-[#A5A5A5] text-lg">Contact</h3>
            <div>
              <p className="text-sm">hello@citehub.net</p>
              <p className="text-sm">Fax: +90 212 000 0000</p>
              <div className="text-sm">
                <p>citehub.net inc.</p>
                <p>Marmara District N17 F5</p>
                <p>34520 Istanbul / Turkey</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
         <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isDarkTheme}
              onChange={toggleTheme}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-gray-300 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all">
             
            </div>
          </label>

          <div className="flex flex-col items-center md:items-end gap-2">
            <Link href="#" className="text-sm hover:underline">
              Contact Form
            </Link>
            <div className="flex flex-col items-center gap-2">
              <ArrowUp
                className="h-8 w-8 p-1 bg-[#68BB63] hover:bg-green-800 border-green-800 text-white rounded-md cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
              <span
                className="text-sm cursor-pointer hover:underline"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Go To Top
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Link href="#" className="text-white hover:text-gray-200">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-200">
                <X className="h-5 w-5" />
              </Link>
              <span className="text-sm">Follow Us</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
          <div className="text-sm text-center md:text-left">
            <p>
              Copyright © 2025 citehub.net all rights reserved |{" "}
              <Link href="#" className="hover:underline">
                Sitemap
              </Link>
            </p>
          </div>

          <img
            src="https://licensebuttons.net/l/by-nc-nd/4.0/88x31.png"
            alt="Creative Commons License"
            className="h-8"
          />

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-2 text-sm mt-4">
            <Link href="#" className="hover:underline">
              Cookie Settings
            </Link>
            <span className="mx-1">|</span>
            <Link href="#" className="hover:underline">
              Agreements
            </Link>
            <span className="mx-1">|</span>
            <Link href="#" className="hover:underline">
              Terms & Conditions
            </Link>
            <span className="mx-1">|</span>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
