import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/providers/queryProvider";
import { ToastContainer } from "react-toastify";
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Citehub",
  description: "Citehub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        <QueryProvider>{children}</QueryProvider>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          theme="dark"
      
        />
      </body>
    </html>
  );
}
