"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Calculator, Bot, Upload, Leaf, Info, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Estimate",
    href: "/estimate",
    icon: Calculator,
  },
  {
    name: "Palm-AI",
    href: "/palm-ai",
    icon: Bot,
  },
  {
    name: "Updating",
    href: "/updating",
    icon: Upload,
  },
  {
    name: "About",
    href: "/about",
    icon: Info,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsMobileOpen(false)
      }
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  const closeMobileSidebar = () => {
    setIsMobileOpen(false)
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
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "flex h-full flex-col bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white shadow-xl border-r border-emerald-700/50 dark:border-gray-700/50",
        "fixed md:relative z-50 md:z-auto",
        isMobile ? "w-80" : "w-64",
        isMobile && !isMobileOpen ? "-translate-x-full" : "translate-x-0",
        "transition-transform duration-300 ease-in-out"
      )}>
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
        <div className="flex items-center gap-3 px-6 py-6 border-b border-emerald-700/50">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg">
            <Leaf className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Saw-It
            </h1>
            <p className="text-sm text-emerald-200 font-medium">Palm Management</p>
          </div>
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
                      isActive 
                        ? "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg scale-105" 
                        : "text-emerald-100 hover:bg-emerald-800/60 hover:text-white hover:scale-105 hover:shadow-md",
                    )}
                  >
                    <item.icon className={cn(
                      "h-5 w-5 transition-transform duration-200",
                      isActive ? "scale-110" : "group-hover:scale-110"
                    )} />
                    {item.name}
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* User Profile Section */}
        <div className="border-t border-emerald-700/50 px-4 py-4">
          <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-emerald-800/40 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-white">U</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">User</p>
              <p className="text-xs text-emerald-200 truncate">Administrator</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-emerald-700/50 dark:border-gray-700/50 px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-emerald-300 dark:text-gray-300">© 2024 Saw-It Platform</p>
            {!isMobile && <ThemeToggle />}
          </div>
          <p className="text-xs text-emerald-400 dark:text-gray-400">v2.0.0</p>
        </div>
      </div>
    </>
  )
}
