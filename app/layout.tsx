import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClerkThemeProvider from "@/components/ClerkThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/themeContexts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ExpenseTracker AI - Smart Financial Management",
  description:
    "AI-powered expense tracking app with intelligent insights, smart categorization, and personalized financial recommendations",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200`}
      >
        <ThemeProvider>
          <ClerkThemeProvider>
            <Navbar />
            {children}
            <Footer />
          </ClerkThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
