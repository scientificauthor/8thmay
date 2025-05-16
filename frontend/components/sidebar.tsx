"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import mainNavigation from "@/constants/super-adminstrator-dashboard-nav-items";
import { ActionButtons } from "./action-button";

type MenuItem = {
  title: string;
  url?: string;
  items?: MenuItem[];
  isActive?: boolean;
};

export function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    Courses: true,
    Software1: true,
    "My learning": true,
    "Course Material": true,
    "How to": true,
    "Online live courses": true,
  });

  // Toggle expanded state for an item
  const toggleExpand = (title: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // Check if an item is expanded
  const isExpanded = (title: string) => {
    return !!expandedItems[title];
  };

  // Render a menu item with proper indentation and expand/collapse functionality
  const renderMenuItem = (item: MenuItem, level = 0, path = "") => {
    const hasChildren = item.items && item.items.length > 0;
    const itemPath = path ? `${path}.${item.title}` : item.title;
    const expanded = isExpanded(item.title);
    const isItemTitleCourses = item.title === "Courses";
    if (!hasChildren) {
      return (
        <div
          key={itemPath}
          className={cn(
            "flex items-center py-1.5 px-2 rounded-md cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors",
            level === 0 ? "font-medium" : "",
            level === 0 && expanded
              ? "bg-accent/50 text-green-600 font-medium"
              : ""
          )}
          style={{ marginLeft: level > 0 ? `${level * 12}px` : undefined }}
        >
          <span className="text-sm">{item.title}</span>
        </div>
      );
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
            level === 0 ? " font-medium" : "",
            level === 0 && expanded
              ? "bg-accent/50 text-green-600 font-medium"
              : ""
          )}
        >
          <span className="text-sm">{item.title}</span>
          <span className="mr-1">
            {expanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </span>
        </CollapsibleTrigger>
        {isItemTitleCourses && (
          <ActionButtons
            customStyle="block sm:hidden"
            title="CMS/Moodle related & offered
 editor menus"
            color="text-[#5383EC]"
          />
        )}
        <CollapsibleContent className="pt-1">
          {item.items!.map((subItem) =>
            renderMenuItem(subItem, level + 1, itemPath)
          )}
        </CollapsibleContent>
      </Collapsible>
    );
  };

  return (
    <div className="w-full sm:w-1/3">
      <div className="mb-4 px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-1">
          Content Management
        </h1>
      </div>

      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="border-l-2 border-border pl-2 pr-2">
          {mainNavigation.map((item, index) => (
            <div key={item.title} className="flex flex-col">
              {renderMenuItem(item)}
              {index < mainNavigation.length && (
                <div className="w-full h-0.5 bg-gray-100" />
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
