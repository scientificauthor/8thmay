"use client";

import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex flex-col gap-4">
        <div className="text-center">
          <span className="text-sm text-[#A5A5A5]">© 2025 citehub.¹ Inc.</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
          <ul className="flex flex-col sm:items-start gap-2 text-sm">
            <li>
              <Link
                href="/terms"
                className="text-white hover:scale-105 hover:underline transition-transform duration-200"
                aria-label="View Terms and Conditions"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-white hover:scale-105 hover:underline transition-transform duration-200"
                aria-label="View Privacy Policy"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/agreements"
                className="text-white hover:scale-105 hover:underline transition-transform duration-200"
                aria-label="View Agreements"
              >
                Agreements
              </Link>
            </li>
            <li>
              <Link
                href="/cookie-settings"
                className="text-white hover:scale-105 hover:underline transition-transform duration-200"
                aria-label="Manage Cookie Settings"
              >
                Cookie Settings
              </Link>
            </li>
            <li>
              <Link
                href="/sitemap"
                className="text-white hover:scale-105 hover:underline transition-transform duration-200"
                aria-label="View Sitemap"
              >
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>
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
    </div>
  );
}
