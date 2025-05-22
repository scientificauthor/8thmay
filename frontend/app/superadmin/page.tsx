"use client"
import { PageHeader } from "@/components/header/page-header"
import { BreadcrumbNav } from "@/components/nav/breadcrumb-nav"
import { CopyIcon as Duplicate, Save, Plus, Trash2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Superadminaccordion } from "@/components/superadmin-dahsboard"
import { superadminbreadcrumbItems } from "@/constants/superadminpage"

export default function SuperadminDashboardPage() {

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <header>
        <div className="container px-4 py-2 hidden md:block">
          <BreadcrumbNav items={superadminbreadcrumbItems} />
        </div>
      </header>

      <main>
        <div className="px-4 py-4">
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <PageHeader title="Content management" />
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-4">
              <PageHeader subtitle="" />
              <div className="flex flex-wrap items-center gap-0.5 md:gap-4 mt-2 md:mt-0">
                <Button variant="ghost" className="hover:bg-slate-100 dark:hover:bg-gray-800 hover:text-slate-900 dark:hover:text-gray-100" size="sm">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
                <Button variant="ghost" className="hover:bg-slate-100 dark:hover:bg-gray-800 hover:text-slate-900 dark:hover:text-gray-100" size="sm">
                  <Duplicate className="h-4 w-4" />
                  <span>Duplicate</span>
                </Button>
                <Button variant="ghost" className="hover:bg-slate-100 dark:hover:bg-gray-800 hover:text-slate-900 dark:hover:text-gray-100" size="sm">
                  <Save className="h-4 w-4" />
                  <span>Save</span>
                </Button>
                <Button variant="ghost" className="hover:bg-slate-100 dark:hover:bg-gray-800 hover:text-slate-900 dark:hover:text-gray-100" size="sm">
                  <Plus className="h-4 w-4 text-[#0A4FB1] dark:text-blue-400" />
                  <span className="text-[#0A4FB1] dark:text-blue-400">New</span>
                </Button>
                <Button variant="ghost" size="sm" className="hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 text-red-500 dark:text-red-400">
                  <Trash2 className="h-4 w-4" />
                  <span className="text-red-500 dark:text-red-400">Delete</span>
                </Button>
              </div>
            </div>
          </div>

          <h1 className="text-[16px] font-bold text-center md:text-right mt-6 text-black dark:text-white">CMS/Moodle editor menus</h1>
        </div>

        <div className="container px-4 pb-8 w-full">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="w-full lg:w-[400px] shrink-0">
              <div className="sticky top-4 bg-none border-none dark:text-white">
                <Superadminaccordion />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}
