"use client"

import React from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { MenuItemProps } from "@/types/superadmin"
import { menuData } from "@/constants/superadminpage"
import { hasActiveDescendant } from "@/lib/tree-utils"

const MenuItem: React.FC<MenuItemProps> = ({ item, level }) => {
  const [expanded, setExpanded] = React.useState(false)
  const pathname = usePathname()
  const hasChildren = item.children && item.children.length > 0

  const isActive = pathname === item.href
  const isParentActive = hasActiveDescendant(item, pathname)

  const toggleExpand = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault()
      setExpanded(!expanded)
    }
  }

  return (
    <li className="w-full">
      <div
        className={cn(
          "flex items-center w-full",
          isActive || isParentActive ? "font-medium text-[#009900]" : "text-gray-800",
          level === 0 ? "font-medium" : ""
        )}
      >
        <div
          style={{ paddingLeft: `${level * 16}px` }}
          className={cn(
            "flex items-center py-2 w-full hover:bg-gray-100 cursor-pointer rounded-md transition-colors",
            level === 0 ? "text-sm" : "text-[14px]",
            isActive && "text-[#009900] hover:text-[#009900]"
          )}
          onClick={toggleExpand}
        >
          {item.href ? (
            <Link
              href={item.href}
              className="flex items-center gap-[4px] flex-1 truncate"
            >
              {item.title}
              {hasChildren && (
                <span className={cn(
                  "flex-shrink-0",
                  isActive || isParentActive || expanded ? "text-[#009900]" : "text-gray-500"
                )}>
                  {expanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                </span>
              )}
            </Link>
          ) : (
            <span className="flex items-center gap-[4px] flex-1 truncate">
              {item.title}
              {hasChildren && (
                <span className={cn(
                  "flex-shrink-0",
                  isActive || isParentActive || expanded ? "text-[#009900]" : "text-gray-500"
                )}>
                  {expanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                </span>
              )}
            </span>
          )}
        </div>
      </div>

      {hasChildren && expanded && (
        <ul className="w-full  mt-1 ml-4 py-2 px-2 space-y-1">
          {item.children?.map((child, index) => (
            <MenuItem key={index} item={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  )
}

export function Superadminaccordion() {
  return (
    <div className="w-full p-4">
      <ul className="w-full space-y-1">
        {menuData.map((item, index) => (
          <MenuItem key={index} item={item} level={0} />
        ))}
      </ul>
    </div>
  )
}
