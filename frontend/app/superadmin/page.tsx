"use client"
import { PageHeader } from "@/components/header/page-header"
import { BreadcrumbNav } from "@/components/nav/breadcrumb-nav"
import { SidebarMenu } from "@/components/superadmin-dahsboard"
import { CopyIcon as Duplicate, Save, Plus, Trash2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function SuperadminDashboardPage() {
  const breadcrumbItems = [
    { title: "(a)", href: "#" },    
    { title: "Super administrator dashboard", href: "#" },
    { title: "Web content management" },
  ]

  return (
    <div className="flex min-h-screen flex-col">

      <div className="container px-4 py-4">
        <BreadcrumbNav items={breadcrumbItems} />
      </div>

      <div className="container px-4 pb-8 pt-9">
        <div className="flex justify-between">
            <PageHeader title="Super administrator dashboard"  />
            
        </div>
        <div className="flex justify-between">
            <PageHeader subtitle="Web content management"/>
            <div className="flex items-center gap-2">
              <Button variant="ghost" className="hover:bg-slate-100 hover:text-slate-900" size="sm">
                <Search className="h-4 w-4 " />
                <span className="sr-only">Search</span>
              </Button>
              <Button variant="ghost" className="hover:bg-slate-100 hover:text-slate-900" size="sm">
                <Duplicate className="h-4 w-4   " />
                <span>Duplicate</span>
              </Button>
              <Button variant="ghost" className="hover:bg-slate-100 hover:text-slate-900" size="sm">
                <Save className="h-4 w-4 " />
                <span>Save</span>
              </Button>
              <Button variant="ghost" className="hover:bg-slate-100 hover:text-slate-900" size="sm">
                <Plus className="h-4 w-4  text-[#0A4FB1]" />
                <span className="text-[#0A4FB1]">New</span>
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-red-50 hover:text-red-600 text-red-500">
                <Trash2 className="h-4 w-4 " />
                <span className="text-red-500">Delete</span>
              </Button>
            </div>
        </div>
        <h1 className="text-[16px] font-bold flex justify-end">CMS/Moodle editor menus</h1>
        <div className="flex flex-col md:flex-row gap-8 ml-[26px] mt-9">
          <aside className="w-full md:w-64 shrink-0">
            <div className="sticky top-4">
              <SidebarMenu />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
