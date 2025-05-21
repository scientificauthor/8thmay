"use client";

import { Globe, ArrowUp, Youtube, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FooterLinks } from "@/components/footer/footer-links";
import { FooterContact } from "@/components/footer/footer-contact";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <footer className="border-t bg-[#001E00] text-white w-full sm:px-4">
      <div className="mt-8 flex items-center justify-between pl-3  sm:flex">
        <Button
          variant="outline"
          className="rounded-md border-white bg-transparent text-white hover:bg-white hover:text-green-950"
        >
          <Globe className="mr-2 h-4 w-4" />
          Turkish
        </Button>
      </div>
      <div className="px-4 py-8">
        {/* Footer Main Section */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Small screens: Accordions for About Courses and Company */}
          <div className="block md:hidden">
            <Accordion type="multiple">
              <AccordionItem value="about-courses">
                <AccordionTrigger className="font-light">
                  About Courses
                </AccordionTrigger>
                <AccordionContent>
                  <FooterLinks
                    title=""
                    links={[
                      { label: "Request Online Course", href: "#" },
                      { label: "Verify citehub.net Certificate", href: "#" },
                      { label: "Help", href: "#" },
                      { label: "Training Events", href: "#" },
                      { label: "Pricing", href: "#" },
                    ]}
                  />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="company">
                <AccordionTrigger className="font-light">
                  Company
                </AccordionTrigger>
                <AccordionContent>
                  <FooterLinks
                    title=""
                    links={[
                      { label: "About Us", href: "#" },
                      { label: "References", href: "#" },
                      { label: "News", href: "#" },
                      { label: "Our Crew", href: "#" },
                      { label: "Affiliate Programme", href: "#" },
                    ]}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Medium+ screens: Show About Courses and Company side by side */}
          <div className="hidden md:flex md:flex-col md:gap-4">
            <FooterLinks
              title="About Courses"
              links={[
                { label: "Request Online Course", href: "#" },
                { label: "Verify citehub.net Certificate", href: "#" },
                { label: "Help", href: "#" },
                { label: "Training Events", href: "#" },
                { label: "Pricing", href: "#" },
              ]}
            />
            <div className="mt-4 flex items-center">
              <Switch
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
                className="data-[state=checked]:bg-green-500"
                isDarkMode={isDarkMode}
              />
            </div>
          </div>

          <div className="hidden md:block">
            <FooterLinks
              title="Company"
              links={[
                { label: "About Us", href: "#" },
                { label: "References", href: "#" },
                { label: "News", href: "#" },
                { label: "Our Crew", href: "#" },
                { label: "Affiliate Programme", href: "#" },
              ]}
            />
          </div>
          {/* FooterContact is always last in the visual order */}
          <div>
            <FooterContact />
            <div className="flex flex-col gap-2 mt-2 ml-4">
              {/* Go To Top button: visible on large screens */}
              <Button
                className="text-white bg-transparent hover:bg-transparent flex-col items-end w-full my-3 ml-2 hidden sm:flex"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <ArrowUp className="rounded-4xl size-5 bg-green-500" />
                <span className="text-xs font-light">Go To Top</span>
              </Button>
              {/* Social icons */}
              <div className="flex items-center gap-2 sm:justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-white hover:bg-white hover:text-green-950 border"
                >
                  <Youtube className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-white hover:bg-white hover:text-black border group"
                >
                  {/* Twitter SVG Icon */}
                  <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                    <path d="M4.78882 3.75L17.0387 17.25H21.4936L9.24378 3.75H4.78882Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.78882 17.25L11.8549 11.5395M14.4233 9.46388L21.4936 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Button>
                <div className="text-xs hidden sm:block text-[#A5A5A5]">
                  Follow Us
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Language + Scroll To Top */}

        <Separator className="my-6 bg-green-900 sm:hidden" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:-mb-8 mt-4">
          <div className="text-xs text-[#A5A5A5] sm:text-white">
            <span className="hidden sm:inline">Copyright</span> © 2025{" "}
            <span className="">(citehub).</span>
            <sup className="text-11">1</sup>
            .inc{" "}
            <span className="hidden sm:inline">
              all rights reserved |{" "}
              <a href="#" className="hover:underline">
                Sitemap
              </a>
            </span>
          </div>

          {/* <CCLicense /> */}
        </div>

        {/* Policies Section */}
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs sm:justify-end flex-col sm:flex-row items-start pl-3 relative">
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:underline">
            Agreements
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:underline">
            Cookie Settings
          </a>
          <Button
            size="sm"
            className="ml-2 text-white bg-transparent hover:bg-transparent flex-col items-end w-full my-3 px-4 py-2 sm:ml-4 mt-0 md:hidden absolute bottom-0 right-0"
            style={{ minWidth: "48px", minHeight: "48px" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="inline-flex items-center justify-center p-1 rounded-4xl bg-green-500">
              <ArrowUp className="h-9 w-9 text-white" />
            </span>
            <span className="text-[13px] font-light">Go To Top</span>
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-between sm:hidden">
          <Button
            variant="outline"
            className="rounded-md border-white bg-transparent text-white hover:bg-white hover:text-green-950"
          >
            <Globe className="mr-2 h-4 w-4" />
            Turkish
          </Button>

          <div className="mt-2 flex items-center">
            <Switch
              checked={isDarkMode}
              onCheckedChange={setIsDarkMode}
              className="data-[state=checked]:bg-green-500"
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}