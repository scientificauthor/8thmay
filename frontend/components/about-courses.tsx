"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function AboutCourses() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4 w-full">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className=" block sm:hidden w-full"
      >
        <CollapsibleTrigger
          className={cn(
            "flex w-full items-center justify-between py-1.5 px-2 rounded-md cursor-pointer  transition-colors font-medium"
          )}
        >
          <h3 className="text-sm tracking-wide">About Courses</h3>
          <span className="ml-2">
            {isOpen ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </span>
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-1">
          <ul className="space-y-1">
            {[
              "Request Online Course",
              "Verify citehub.net Certificate",
              "Help",
              "Training Events",
              "Pricing",
            ].map((item, index) => (
              <li
                key={index}
                className="py-1.5 px-2 rounded-md cursor-pointer transition-colors"
                style={{ marginLeft: "12px" }}
              >
                <Link
                  href="#"
                  className="text-sm text-white hover:text-green-200 transition-colors duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    <div className="hidden sm:block">

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
    </div>
  );
}
