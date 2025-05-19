"use client"

import React from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { MenuItemProps } from "@/types/superadmin"
import { menuData } from "@/constants/superadminpage"




const MenuItem: React.FC<MenuItemProps> = ({ item, level, isExpanded = false }) => {
  const [expanded, setExpanded] = React.useState(item.isExpanded || isExpanded)
  const hasChildren = item.children && item.children.length > 0

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
          item.isActive ? "font-medium text-green-700" : "text-gray-800",
          level === 0 ? "font-medium" : "",
        )}
      >
        <div
          style={{ paddingLeft: `${level * 16}px` }}
          className={cn(
            "flex items-center py-1.5 w-full hover:bg-gray-100 cursor-pointer",
            level === 0 ? "text-sm" : "text-[14px]",
          )}
          onClick={toggleExpand}
        >
          {hasChildren && (
            <span className="mr-1 text-gray-500">
              {expanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
            </span>
          )}
          {item.href ? (
            <Link href={item.href} className="flex-1">
              {item.title}
            </Link>
          ) : (
            <span className="flex-1">{item.title}</span>
          )}
        </div>
      </div>

      {hasChildren && expanded && (
        <ul className="w-full">
          {item.children?.map((child, index) => (
            <MenuItem key={index} item={child} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  )
}

export function SidebarMenu() {
  return (
    <div className="w-full max-w-xs">
      <ul className="w-full">
        {menuData.map((item, index) => (
          <MenuItem key={index} item={item} level={0} />
        ))}
      </ul>
    </div>
  )
}
    