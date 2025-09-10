"use client"

import type React from "react"

import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Leaf, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/about" },
  { name: "Fitur", href: "#features" },
  { name: "Kontak", href: "#contact" },
]

interface LandingLayoutProps {
  children: React.ReactNode
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <html lang="id" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Navigation Header */}
            <header className="absolute inset-x-0 top-0 z-50">
              <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                  <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Saw-It</span>
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg">
                        <Leaf className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Saw-It</span>
                    </div>
                  </Link>
                </div>
                <div className="flex lg:hidden gap-2">
                  <ThemeToggle />
                  <Button
                    variant="ghost"
                    onClick={() => setMobileMenuOpen(true)}
                    className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                  >
                    <span className="sr-only">Open main menu</span>
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  </Button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
                  <ThemeToggle />
                  <Link href="/dashboard">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Masuk Dashboard</Button>
                  </Link>
                </div>
              </nav>

              {/* Mobile menu */}
              <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                  <div className="flex items-center justify-between">
                    <Link href="/" className="-m-1.5 p-1.5">
                      <span className="sr-only">Saw-It</span>
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600">
                          <Leaf className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">Saw-It</span>
                      </div>
                    </Link>
                    <Button
                      variant="ghost"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </Button>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-500/25">
                      <div className="space-y-2 py-6">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div className="py-6">
                        <Link
                          href="/dashboard"
                          onClick={() => setMobileMenuOpen(false)}
                          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          Masuk Dashboard
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Main Content */}
            <main>{children}</main>

            {/* Footer */}
            <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
              <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                  <Link href="/about" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                    <span className="sr-only">Tentang</span>
                    Tentang
                  </Link>
                  <Link href="#contact" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                    <span className="sr-only">Kontak</span>
                    Kontak
                  </Link>
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                  <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
                    &copy; 2024 Saw-It Platform. Semua hak cipta dilindungi.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
