import { NavItem } from "@/types/header"



export const navItems:NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    isActive: false,
    hasDropdown: false,
  },
  {
    title: "Overview",
    href: "/overview",
    isActive: false,
    hasDropdown: false,
  },
  {
    title: "Mendeley",
    href: "/mendeley",
    isActive: false,
    hasDropdown: false,
  },
  {
    title: "Zotero",
    href: "/zotero",
    isActive: false,
    hasDropdown: false,
  },
  {
    title: "EndNote",
    href: "/endnote",
    isActive: false,
    hasDropdown: false,
  },
  {
    title: "About Reference Managers",
    href: "/about",
    isActive: false,
    hasDropdown: true,
    children: [
      { title: "Mendeley", href: "/mendeley", isActive: false, hasDropdown: false },
      { title: "Zotero", href: "/zotero", isActive: false, hasDropdown: false },
      { title: "EndNote", href: "/endnote", isActive: false, hasDropdown: false },
    ],
  },
]