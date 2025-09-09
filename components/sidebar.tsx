"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Calculator, Bot, Upload, Info, Menu, X, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Estimasi",
    href: "/estimate",
    icon: Calculator,
  },
  {
    name: "Palm-AI",
    href: "/palm-ai",
    icon: Bot,
  },
  {
    name: "Pembaruan",
    href: "/updating",
    icon: Upload,
  },
  {
    name: "Tentang",
    href: "/about",
    icon: Info,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsMobileOpen(false)
      }
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  const closeMobileSidebar = () => {
    setIsMobileOpen(false)
  }

  const toggleDesktopSidebar = () => {
    setIsDesktopCollapsed(!isDesktopCollapsed)
  }

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 left-4 z-50 flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleMobileSidebar}
          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-emerald-200 dark:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
        >
          <Menu className="h-4 w-4" />
        </Button>
        <ThemeToggle />
      </div>

      {/* Mobile backdrop */}
      {isMobileOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={closeMobileSidebar} />}

      {/* Sidebar */}
      <div
        className={cn(
          "flex h-full flex-col bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white shadow-xl border-r border-emerald-700/50 dark:border-gray-700/50",
          "fixed md:relative z-50 md:z-auto",
          isMobile ? "w-80" : isDesktopCollapsed ? "w-20" : "w-64", // Increased collapsed width from w-16 to w-20
          isMobile && !isMobileOpen ? "-translate-x-full" : "translate-x-0",
          "transition-all duration-300 ease-in-out",
        )}
      >
        {!isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDesktopSidebar}
            className="absolute -right-4 top-8 z-10 h-8 w-8 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white border-2 border-emerald-500 shadow-lg"
          >
            {isDesktopCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        )}

        {/* Desktop collapse button */}
        {!isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDesktopSidebar}
            className="absolute -right-3 top-8 z-10 h-7 w-7 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-500 shadow-lg"
          >
            {isDesktopCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        )}

        {/* Close button for mobile */}
        {isMobile && (
          <div className="flex justify-between items-center p-4 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={closeMobileSidebar}
              className="text-white hover:bg-emerald-800 dark:hover:bg-gray-800"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Logo and Brand */}
        <div
          className={cn(
            "flex items-center gap-3 px-6 py-6 border-b border-emerald-700/50",
            isDesktopCollapsed && !isMobile && "px-4 justify-center",
          )}
        >
          <div className="flex h-12 w-12 items-center justify-center bg-emerald-600/20 rounded-xl border border-emerald-500/30 backdrop-blur-sm">
            <Image src="/logo-sawit-tech.png" alt="Saw-It Logo" width={32} height={32} className="object-contain" />
          </div>
          {(!isDesktopCollapsed || isMobile) && (
            <div>
              <h1 className="text-2xl font-bold text-white">Saw-It</h1>
              <p className="text-sm text-emerald-200 font-medium">Manajemen Sawit</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-3">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={closeMobileSidebar}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 group",
                      isDesktopCollapsed && !isMobile && "px-4 justify-center", // Increased padding and better centering
                      isActive
                        ? "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg scale-105"
                        : "text-emerald-100 hover:bg-emerald-800/60 hover:text-white hover:scale-105 hover:shadow-md",
                    )}
                  >
                    <item.icon
                      className={cn(
                        "transition-transform duration-200",
                        isDesktopCollapsed && !isMobile ? "h-6 w-6" : "h-5 w-5", // Larger icons when collapsed
                        isActive ? "scale-110" : "group-hover:scale-110",
                      )}
                    />
                    {(!isDesktopCollapsed || isMobile) && (
                      <>
                        {item.name}
                        {isActive && <div className="ml-auto w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />}
                      </>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* User Profile Section */}
        {(!isDesktopCollapsed || isMobile) && (
          <div className="border-t border-emerald-700/50 px-4 py-4">
            <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-emerald-800/40 transition-colors">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-white">U</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">Pengguna</p>
                <p className="text-xs text-emerald-200 truncate">Administrator</p>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        {(!isDesktopCollapsed || isMobile) && (
          <div className="border-t border-emerald-700/50 dark:border-gray-700/50 px-6 py-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-emerald-300 dark:text-gray-300">© 2024 Saw-It Platform</p>
              {!isMobile && <ThemeToggle />}
            </div>
            <p className="text-xs text-emerald-400 dark:text-gray-400">v2.0.0</p>
          </div>
        )}
      </div>
    </>
  )
}
