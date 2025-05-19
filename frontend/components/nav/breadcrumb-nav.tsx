import React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { BreadcrumbProps } from "@/types/breadcrumb"

export function BreadcrumbNav({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight className="h-4 w-4" />}
          {item.href ? (
            <Link href={item.href} className="hover:text-foreground">
              {item.title}
            </Link>
          ) : (
            <span className="text-foreground">{item.title}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}
