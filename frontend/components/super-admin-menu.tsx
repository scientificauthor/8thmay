"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

interface SuperAdminNavigationMenuProps {
  isSuperAdminMainMenuExpanded: boolean;
  setIsSuperAdminMainMenuExpanded: (value: boolean) => void;
  setIsMainMenuExpanded: (value: boolean) => void;
}

export function SuperAdminNavigationMenu({
  isSuperAdminMainMenuExpanded,
  setIsSuperAdminMainMenuExpanded,
  setIsMainMenuExpanded,
}: SuperAdminNavigationMenuProps) {
  const toggleMenu = () => {
    // Toggle super admin menu and ensure main menu is closed
    setIsSuperAdminMainMenuExpanded(!isSuperAdminMainMenuExpanded);
    if (!isSuperAdminMainMenuExpanded) {
      setIsMainMenuExpanded(false); // Close main menu only when opening super admin menu
    }
  };

  return (
    <nav className="p-4 overflow-y-auto flex-1">
      <div className="flex flex-col space-y-2">
        {/* Super Admin Title with Chevron */}
        <button
          onClick={toggleMenu}
          className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground flex items-center justify-between transition-all duration-200 ease-in-out"
          aria-expanded={isSuperAdminMainMenuExpanded}
          aria-controls="super-admin-menu"
        >
          Super Admin
          {isSuperAdminMainMenuExpanded ? (
            <ChevronRight
              className={`h-4 w-4 transition-transform duration-200 `}
            />
          ) : (
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200`}
            />
          )}
        </button>

        {/* Navigation Links - Conditionally Rendered */}
        {isSuperAdminMainMenuExpanded && (
          <div id="super-admin-menu" className="flex flex-col space-y-2">
            <Link
              href="#overview"
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-all duration-200 ease-in-out"
            >
              Overview
            </Link>
            <Link
              href="#software1"
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-all duration-200 ease-in-out"
            >
              Mendeley
            </Link>
            <Link
              href="#software2"
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-all duration-200 ease-in-out"
            >
              Zotero
            </Link>
            <Link
              href="#software3"
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-all duration-200 ease-in-out"
            >
              EndNote
            </Link>
            <div className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground flex items-center justify-between transition-all duration-200 ease-in-out">
              About Reference Managers
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="pl-6 border-l border-border ml-2 space-y-2">
              <Link
                href="#comparisons"
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground block transition-all duration-200 ease-in-out"
              >
                Comparisons
              </Link>
              <Link
                href="#developments"
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground block transition-all duration-200 ease-in-out"
              >
                Developments
              </Link>
              <Link
                href="#literature"
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground block transition-all duration-200 ease-in-out"
              >
                Literature
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
