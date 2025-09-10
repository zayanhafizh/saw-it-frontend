"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { Sidebar } from "@/components/sidebar"

interface ClientLayoutProps {
  children: React.ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname()

  // Pages that should not have sidebar (landing page style)
  const noSidebarPages = ["/", "/about"]
  const shouldShowSidebar = !noSidebarPages.includes(pathname)

  return (
    <div
      className={
        shouldShowSidebar
          ? "bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
          : "bg-white dark:bg-gray-900"
      }
    >
      {shouldShowSidebar ? (
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-auto relative">
            <div className="absolute inset-0 bg-white/40 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300"></div>
            <div className="relative z-10 h-full">{children}</div>
          </main>
        </div>
      ) : (
        <main className="min-h-screen">{children}</main>
      )}
    </div>
  )
}
