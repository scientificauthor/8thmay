"use client";

import { Globe, ArrowUp, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FooterLinks } from "@/components/footer/footer-links";
import { FooterContact } from "@/components/footer/footer-contact";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Footer() {
  return (
    <footer className="border-t bg-[#001E00] text-white w-full sm:px-4">
      <div className="mt-8 flex items-center justify-between pl-3 hidden sm:flex">
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
          <div className="hidden md:block">
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
            <div className="flex items-center gap-2 sm:justify-end mt-2 ml-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white hover:bg-white hover:text-green-950 border"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white hover:bg-white hover:text-green-950 border"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <div className="text-xs hidden sm:block text-[#A5A5A5]">
                Follow Us
              </div>
            </div>
            <Button className=" text-white bg-transparent hover:bg-transparent flex-col items-end  w-full my-3 ml-2 hidden sm:flex">
              <ArrowUp className="rounder size-5 bg-green-500" />
              <span className="text-xs font-light"> Go To Top</span>
            </Button>
          </div>
        </div>

        {/* Language + Scroll To Top */}

        <Separator className="my-6 bg-green-900 sm:hidden" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:-mb-8 mt-4">
          <div className="text-xs text-[#A5A5A5] sm:text-white">
            <span className="hidden sm:inline">Copyright</span> © 2025{" "}
            <span className="">(citehub).</span>
            <span className="text-11">1</span>
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
        <div className="mt-4 flex flex-wrap  justify-center gap-2 text-xs sm:justify-end flex-col sm:flex-row items-start pl-3">
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
        </div>

        <div className="mt-8 flex items-center justify-between sm:hidden">
          <Button
            variant="outline"
            className="rounded-md border-white bg-transparent text-white hover:bg-white hover:text-green-950"
          >
            <Globe className="mr-2 h-4 w-4" />
            Turkish
          </Button>

          <Button
            size="sm"
            className=" text-white  bg-transparent flex flex-col items-end"
          >
            <ArrowUp className="h-5 w-5 bg-green-500 hover:bg-transparent" />
            <span className="text-sm font-light"> Go To Top</span>
          </Button>
        </div>
      </div>
    </footer>
  );
}