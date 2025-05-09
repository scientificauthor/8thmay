import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Sidebar } from "@/components/sidebar";
import { ActionButtons } from "@/components/action-button";
import { Breadcrumb } from "@/components/breadcrumb";

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
      <body className={`${inter.className} bg-background dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header/>
            
            <div className="flex flex-1 sm:flex-row flex-col">
              <Sidebar  />
              <main className="p-4 md:p-6 lg:p-8">
                <div className="max-w-7xl mx-auto">
                  <div className="flex justify-between items-center mb-6">
                    <ActionButtons  />
                  </div>
                  <div>
                    {children}
                  </div>
                </div>
              </main>
            </div>
            
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}