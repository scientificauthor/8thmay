import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SuperAdminWebContentManagementHeader } from "@/components/super-admin-web-content-management-header";
import { Breadcrumb } from "@/components/breadcrumb";
import { Sidebar } from "@/components/sidebar";
import { ActionButtons } from "@/components/action-button";
import { Footer } from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Citehub - Super Administrator Dashboard",
  description: "Web content management system for administrators",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-background dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex flex-col gap-4 min-h-screen">
            <SuperAdminWebContentManagementHeader />
            <Breadcrumb />
            <div className="flex flex-1 sm:flex-row flex-col">
              <Sidebar />
              <main className="p-4 md:p-6 lg:p-8 flex-1">
                <div className="flex items-center mb-6">
                  <div className="ml-auto">
                    <ActionButtons customStyle="hidden sm:block" title="CMS/Moodle Editor Menus"  color=""/>
                  </div>
                </div>
                <div className="max-w-7xl mx-auto">
                  <div>{children}</div>
                </div>
              </main>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
