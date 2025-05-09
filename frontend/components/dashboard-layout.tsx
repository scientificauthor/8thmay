"use client";

import type React from "react";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <Breadcrumb />
        <div className="container mx-auto px-4 md:hidden mb-4">
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="w-full flex items-center justify-between"
              >
                <span>Navigation</span>
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[80%] sm:w-[350px] p-0 overflow-y-auto"
            >
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold">Dashboard Navigation</h2>
              </div>
              <div className="p-4">{children}</div>
            </SheetContent>
          </Sheet>
        </div>
        <main className="hidden md:flex">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
