"use client";

import { useState } from "react";
import {
  Settings,
  Bell,
  Globe,
  Sun,
  LampDesk,
  Moon,
  LogOut,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface UserSettingsMenuProps {
  isMainMenuExpanded: boolean;
  setIsMainMenuExpanded: (value: boolean) => void;
  setIsSuperAdminMainMenuExpanded: (value: boolean) => void;
}

export function UserSettingsMenu({
  isMainMenuExpanded,
  setIsMainMenuExpanded,
  setIsSuperAdminMainMenuExpanded,
}: UserSettingsMenuProps) {
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<"auto" | "light" | "dark">(
    "light"
  );

  const handleMainMenuToggle = (open: boolean) => {
    setIsMainMenuExpanded(open);
    if (open) {
      setIsSuperAdminMainMenuExpanded(false); // Close super admin menu when main menu is expanded
    }
  };

  const handleThemeSelect = (theme: "auto" | "light" | "dark") => {
    setSelectedTheme(theme);
    setIsThemeOpen(false); // Close theme sub-menu after selection
    // TODO: Implement theme change logic (e.g., update CSS variables or context)
  };

  return (
    <nav className="overflow-y-auto flex flex-col gap-3 p-4">
      <Collapsible
        open={isMainMenuExpanded}
        onOpenChange={handleMainMenuToggle}
      >
        <CollapsibleTrigger asChild>
          <button
            className="flex items-center justify-between w-full rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-200 ease-in-out"
            aria-label="Toggle main menu"
            aria-expanded={isMainMenuExpanded}
            aria-controls="main-menu"
          >
            <span>Main Menu</span>
            {isMainMenuExpanded ? (
              <ChevronRight
                className={`h-4 w-4 transition-transform duration-200`}
              />
            ) : (
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200`}
              />
            )}
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent id="main-menu" className="mt-2 space-y-3">
          <button
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-200 ease-in-out"
            aria-label="Account Settings"
            onClick={() => console.log("Navigate to Account Settings")} // Placeholder
            onKeyDown={(e) =>
              e.key === "Enter" && console.log("Navigate to Account Settings")
            }
          >
            <Settings className="h-5 w-5" />
            <span>Account Settings</span>
          </button>

          <button
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-200 ease-in-out"
            aria-label="Notifications"
            onClick={() => console.log("Navigate to Notifications")} // Placeholder
            onKeyDown={(e) =>
              e.key === "Enter" && console.log("Navigate to Notifications")
            }
          >
            <Bell className="h-5 w-5" />
            <span>Notifications</span>
          </button>

          <button
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hovercomplex bg-accent hover:text-accent-foreground transition-all duration-200 ease-in-out"
            aria-label="Language Settings"
            onClick={() => console.log("Navigate to Language Settings")} // Placeholder
            onKeyDown={(e) =>
              e.key === "Enter" && console.log("Navigate to Language Settings")
            }
          >
            <Globe className="h-5 w-5" />
            <span>Language</span>
          </button>

          <Collapsible open={isThemeOpen} onOpenChange={setIsThemeOpen}>
            <CollapsibleTrigger asChild>
              <button
                className="flex items-center justify-between w-full rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-200 ease-in-out"
                aria-label="Toggle theme options"
                aria-expanded={isThemeOpen}
                aria-controls="theme-menu"
              >
                <div className="flex items-center gap-3">
                  <Sun className="h-5 w-5" />
                  <span>
                    Theme:{" "}
                    {selectedTheme.charAt(0).toUpperCase() +
                      selectedTheme.slice(1)}
                  </span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isThemeOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent id="theme-menu" className="pl-6 mt-2 space-y-3">
              <button
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-200 ease-in-out"
                aria-label="Auto theme"
                onClick={() => handleThemeSelect("auto")}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleThemeSelect("auto")
                }
              >
                <LampDesk className="h-5 w-5" />
                <div className="flex flex-col gap-1">
                  <span>Auto</span>
                  <p className="text-xs text-muted-foreground">
                    Use the same theme as your device
                  </p>
                </div>
              </button>
              <button
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-200 ease-in-out"
                aria-label="Light theme"
                onClick={() => handleThemeSelect("light")}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleThemeSelect("light")
                }
              >
                <Sun className="h-5 w-5" />
                <div className="flex flex-col gap-1">
                  <span>Light</span>
                  <p className="text-xs text-muted-foreground">
                    Light background with dark text
                  </p>
                </div>
              </button>
              <button
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-200 ease-in-out"
                aria-label="Dark theme"
                onClick={() => handleThemeSelect("dark")}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleThemeSelect("dark")
                }
              >
                <Moon className="h-5 w-5" />
                <div className="flex flex-col gap-1">
                  <span>Dark</span>
                  <p className="text-xs text-muted-foreground">
                    Dark background with light text
                  </p>
                </div>
              </button>
            </CollapsibleContent>
          </Collapsible>

          <button
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-200 ease-in-out"
            aria-label="Log out"
            onClick={() => console.log("Handle logout")} // Placeholder
            onKeyDown={(e) => e.key === "Enter" && console.log("Handle logout")}
          >
            <LogOut className="h-5 w-5" />
            <span>Log Out</span>
          </button>
        </CollapsibleContent>
      </Collapsible>
    </nav>
  );
}
