"use client";

import Link from "next/link";

export function FooterBottomDesktop() {
  return (
    <div className="hidden sm:flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-sm font-medium text-center md:text-left">
        <p>
          Copyright © 2025 citehub.net all rights reserved |{" "}
          <Link
            href="#sitemap"
            className="hover:underline hover:text-green-400 transition-all duration-200 ease-in-out"
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

      <div className="flex flex-wrap justify-center md:justify-end gap-3 text-sm font-medium">
        <Link
          href="#cookie-settings"
          className="hover:underline hover:text-green-400 transition-all duration-200 ease-in-out"
        >
          Cookie Settings
        </Link>
        <span className="mx-1 text-[#666666]">|</span>
        <Link
          href="#agreements"
          className="hover:underline hover:text-green-400 transition-all duration-200 ease-in-out"
        >
          Agreements
        </Link>
        <span className="mx-1 text-[#666666]">|</span>
        <Link
          href="#terms"
          className="hover:underline hover:text-green-400 transition-all duration-200 ease-in-out"
        >
          Terms & Conditions
        </Link>
        <span className="mx-1 text-[#666666]">|</span>
        <Link
          href="#privacy"
          className="hover:underline hover:text-green-400 transition-all duration-200 ease-in-out"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
