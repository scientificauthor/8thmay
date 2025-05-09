"use client";

import Link from "next/link";
import { Globe, ArrowUp, X, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Footer() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <footer className="bg-[#001E00] text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Language Button */}
        <div className="mb-8">
          <Button
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-green-900 hover:border-green-900 transition-colors duration-200 flex items-center space-x-2 w-full sm:w-auto rounded-lg px-4 py-2"
          >
            <Globe className="h-5 w-5" />
            <span className="text-base">Turkish</span>
          </Button>
        </div>
       {/* Main Content */}
<div className="flex flex-col sm:flex-row gap-8 mb-10 items-center justify-center">
  {/* About Courses */}
  <div className="flex flex-col gap-4 w-full sm:w-1/2 lg:w-1/3 max-w-md">
    <h3 className="font-semibold text-[#A5A5A5] text-lg tracking-wide text-center sm:text-left">
      About Courses
    </h3>
    <ul className="space-y-3 text-sm text-center sm:text-left">
      <li>
        <Link
          href="#"
          className="hover:underline hover:text-green-400 transition-colors duration-200"
        >
          Request Online Course
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="hover:underline hover:text-green-400 transition-colors duration-200"
        >
          Verify citehub.net Certificate
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="hover:underline hover:text-green-400 transition-colors duration-200"
        >
          Help
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="hover:underline hover:text-green-400 transition-colors duration-200"
        >
          Training Events
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="hover:underline hover:text-green-400 transition-colors duration-200"
        >
          Pricing
        </Link>
      </li>
    </ul>
  </div>

  {/* Company */}
  <div className="flex flex-col gap-4 w-full sm:w-1/2 lg:w-1/3 max-w-md">
    <h3 className="font-semibold text-[#A5A5A5] text-lg tracking-wide text-center sm:text-left">
      Company
    </h3>
    <ul className="space-y-3 text-sm text-center sm:text-left">
      <li>
        <Link
          href="#"
          className="hover:underline hover:text-green-400 transition-colors duration-200"
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="hover:underline hover:text-green-400 transition-colors duration-200"
        >
          References
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="hover:underline hover:text-green-400 transition-colors duration-200"
        >
          News
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="hover:underline hover:text-green-400 transition-colors duration-200"
        >
          Our Crew
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="hover:underline hover:text-green-400 transition-colors duration-200"
        >
          Affiliate Programme
        </Link>
      </li>
    </ul>
  </div>

  {/* Contact */}
  <div className="flex flex-col gap-4 w-full lg:w-1/3 max-w-md lg:items-end">
    <h3 className="font-semibold text-[#A5A5A5] text-lg tracking-wide text-center lg:text-right">
      Contact
    </h3>
    <div className="text-sm space-y-2 text-center lg:text-right">
      <p>hello@citehub.net</p>
      <p>Fax: +90 212 000 0000</p>
      <div>
        <p>citehub.net inc.</p>
        <p>Marmara District N17 F5</p>
        <p>34520 Istanbul / Turkey</p>
      </div>
    </div>
  </div>
</div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
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

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-center md:text-left">
            <p>
              Copyright © 2025 citehub.net all rights reserved |{" "}
              <Link
                href="#"
                className="hover:underline hover:text-green-400 transition-colors duration-200"
              >
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
          <div className="flex flex-wrap justify-center md:justify-end gap-2 text-sm">
            <Link
              href="#"
              className="hover:underline hover:text-green-400 transition-colors duration-200"
            >
              Cookie Settings
            </Link>
            <span className="mx-1">|</span>
            <Link
              href="#"
              className="hover:underline hover:text-green-400 transition-colors duration-200"
            >
              Agreements
            </Link>
            <span className="mx-1">|</span>
            <Link
              href="#"
              className="hover:underline hover:text-green-400 transition-colors duration-200"
            >
              Terms & Conditions
            </Link>
            <span className="mx-1">|</span>
            <Link
              href="#"
              className="hover:underline hover:text-green-400 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
