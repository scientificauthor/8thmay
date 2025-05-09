"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ScrollArea } from "@/components/ui/scroll-area"

type MenuItem = {
  title: string
  url?: string
  items?: MenuItem[]
  isActive?: boolean
}

export function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    Courses: true,
    Software1: true,
    "My learning": true,
    "Course Material": true,
    "How to": true,
    "Online live courses": true,
  })

  // Toggle expanded state for an item
  const toggleExpand = (title: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  // Check if an item is expanded
  const isExpanded = (title: string) => {
    return !!expandedItems[title]
  }

  // Render a menu item with proper indentation and expand/collapse functionality
  const renderMenuItem = (item: MenuItem, level = 0, path = "") => {
    const hasChildren = item.items && item.items.length > 0
    const itemPath = path ? `${path}.${item.title}` : item.title
    const expanded = isExpanded(item.title)

    if (!hasChildren) {
      return (
        <div
          key={itemPath}
          className={cn(
            "flex items-center py-1.5 px-2 rounded-md cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors",
            level === 0 ? "text-green-600 font-medium" : "",
            item.isActive ? "bg-accent/50 font-medium" : "",
          )}
          style={{ marginLeft: level > 0 ? `${level * 12}px` : undefined }}
        >
          <span className="text-sm">{item.title}</span>
        </div>
      )
    }

    return (
      <Collapsible
        key={itemPath}
        open={expanded}
        onOpenChange={() => toggleExpand(item.title)}
        className={cn("w-full", level > 0 && "ml-3")}
      >
        <CollapsibleTrigger
          className={cn(
            "flex w-full items-center py-1.5 px-2 rounded-md cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors",
            level === 0 ? "text-green-600 font-medium" : "",
            item.isActive ? "bg-accent/50 font-medium" : "",
          )}
        >
          <span className="mr-1">
            {expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </span>
          <span className="text-sm">{item.title}</span>
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-1">
          {item.items!.map((subItem) => renderMenuItem(subItem, level + 1, itemPath))}
        </CollapsibleContent>
      </Collapsible>
    )
  }

  // The main navigation structure based on the Figma designs
  const mainNavigation = [
    {
      title: "Courses",
      items: [
        {
          title: "Software1",
          items: [
            {
              title: "My learning",
              items: [
                {
                  title: "Course Material",
                  items: [{ title: "Quizzes" }, { title: "Syllabus" }],
                },
              ],
            },
            { title: "Info" },
            {
              title: "How to",
              items: [
                { title: "How to video multiple heading" },
                { title: "How to screenshot multiple heading" },
                { title: "Pop-up tms buying offer" },
                { title: "How to video one heading" },
                { title: "How to screenshot one heading" },
                { title: "Pop-up tms buying offer" },
              ],
            },
            { title: "Menus" },
            { title: "Specifications" },
            { title: "FAQ" },
          ],
        },
        {
          title: "Software2",
          items: [
            {
              title: "My learning",
              items: [
                {
                  title: "Course Material",
                  items: [{ title: "Quizzes" }, { title: "Syllabus" }],
                },
              ],
            },
            { title: "Info" },
            {
              title: "How to",
              items: [
                { title: "How to video multiple heading" },
                { title: "How to screenshot multiple heading" },
                { title: "Pop-up tms sign-up offer" },
                { title: "How to video one heading" },
                { title: "How to screenshot one heading" },
                { title: "Pop-up tms sign-up offer" },
              ],
            },
            { title: "Menus" },
            { title: "Specifications" },
            { title: "FAQ" },
          ],
        },
        {
          title: "Software3",
          items: [
            {
              title: "My learning",
              items: [
                {
                  title: "Course Material",
                  items: [{ title: "Quizzes" }, { title: "Syllabus" }],
                },
              ],
            },
            { title: "Info" },
            {
              title: "How to",
              items: [
                { title: "How to video multiple heading" },
                { title: "How to screenshot multiple heading" },
                { title: "Pop-up tms sign-up offer" },
                { title: "How to video one heading" },
                { title: "How to screenshot one heading" },
                { title: "Pop-up tms sign-up offer" },
              ],
            },
            { title: "Menus" },
            { title: "Specifications" },
            { title: "FAQ" },
          ],
        },
      ],
    },
    {
      title: "Online live courses",
      items: [
        {
          title: "Software1",
          items: [
            {
              title: "March 2025",
              items: Array.from({ length: 7 }, (_, i) => ({
                title: `${(i + 1).toString().padStart(2, "0")}.03.2025 17:00`,
              })),
            },
          ],
        },
        {
          title: "Software2",
          items: [
            {
              title: "March 2025",
              items: Array.from({ length: 7 }, (_, i) => ({
                title: `${(i + 1).toString().padStart(2, "0")}.03.2025 17:00`,
              })),
            },
          ],
        },
        {
          title: "Software3",
          items: [
            {
              title: "March 2025",
              items: Array.from({ length: 7 }, (_, i) => ({
                title: `${(i + 1).toString().padStart(2, "0")}.03.2025 17:00`,
              })),
            },
          ],
        },
      ],
    },
    {
      title: "Training events",
      items: [
        {
          title: "March 2025",
          items: Array.from({ length: 31 }, (_, i) => ({
            title: `${(i + 1).toString().padStart(2, "0")}.03.2025 17:00`,
          })),
        },
      ],
    },
    {
      title: "Other web pages",
      items: [
        {
          title: "About Softwares",
          items: [{ title: "Comparisons" }, { title: "Developments" }, { title: "Literature" }],
        },
        { title: "About Us" },
        { title: "Agreements" },
        { title: "Affiliate Program" },
        { title: "Consultation Topics" },
        { title: "Help" },
        {
          title: "Homepage",
          items: [
            { title: "Homepage" },
            { title: "Cookie Settings" },
            { title: "Pop-up Book Window" },
            { title: "Contact Form" },
          ],
        },
        { title: "News" },
        { title: "Online Live Courses" },
        { title: "Our Crew" },
        { title: "Overview" },
        { title: "Pricing" },
        { title: "Privacy Policy" },
        { title: "References" },
        { title: "Request a refund" },
        { title: "Sitemap" },
        { title: "Shopping Cart Items" },
        { title: "Terms & Conditions" },
        { title: "Training Events List" },
        { title: "Underconstruction" },
        { title: "Why citehub" },
      ],
    },
  ]

  return (
    <div className="w-full md:w-64 lg:w-72 pr-0 md:pr-4 mb-8">
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="border-l-2 border-border pl-2 pr-2">{mainNavigation.map((item) => renderMenuItem(item))}</div>
      </ScrollArea>
    </div>
  )
}
