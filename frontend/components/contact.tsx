"use client";

import { cn } from "@/lib/utils";
import { X, Youtube } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-md mx-auto lg:mx-0">
      {/* Mobile View */}
      <div className="block sm:hidden">
        <h3
          className={cn(
            "text-base font-semibold tracking-wide py-2 px-3"
          )}
        >
          Contact
        </h3>
        <div className="text-sm space-y-3 px-3 py-4">
          <p className="text-white">hello@citehub.net</p>
          <p className="text-white">Fax: +90 212 000 0000</p>
          <div className="text-white">
            <p>citehub.net inc.</p>
            <p>Marmara District N17 F5</p>
            <p>34520 Istanbul / Turkey</p>
          </div>
          <Link
            href="#"
            className="text-sm font-medium hover:scale-105 hover:underline transition-transform duration-200 inline-block"
            aria-label="Open contact form"
          >
            Contact Form
          </Link>
          <div className="flex items-center gap-4 pt-2">
            <Link
              href="#"
              className="text-white hover:scale-110 transition-transform duration-200"
              aria-label="Visit our YouTube page"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white">
                <Youtube className="h-5 w-5" />
              </div>
            </Link>
            <Link
              href="#"
              className="text-white hover:scale-110 transition-transform duration-200"
              aria-label="Visit our X page"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white">
                <X className="h-5 w-5" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:block">
        <h3 className="text-lg  text-[#A5A5A5] font-semibold tracking-wide text-center lg:text-right py-2 ">
          Contact
        </h3>
        <div className="text-sm space-y-3 text-center lg:text-right py-4">
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
  );
}