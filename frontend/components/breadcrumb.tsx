import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

export function Breadcrumb() {
  return (
    <div className="hidden sm:block container mx-auto px-4 py-4">
      <nav aria-label="Breadcrumb" className="flex items-center text-sm overflow-x-auto whitespace-nowrap">
        <ol className="flex items-center space-x-1">
          <li className="flex items-center">
            <Link href="/" className="">
             <span className="font-bold">
              (<span className="font-bold">C</span>).<sup className=" text-xs ml-0.5">1</sup>
            </span>
            </Link>
          </li>
          <li className="flex items-center">
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link href="/super-admin-dashboard" className={cn("ml-1 text-muted-foreground hover:text-foreground")}>
              Super administrator dashboard
            </Link>
          </li>
          <li className="flex items-center">
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="ml-1 font-medium">Web content management</span>
          </li>
        </ol>
      </nav>
    </div>
  )
}
