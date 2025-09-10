"use client"

import type React from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { usePathname } from "next/navigation"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  
  // Pages that should not have sidebar (landing page style)
  const noSidebarPages = ['/', '/about']
  const shouldShowSidebar = !noSidebarPages.includes(pathname)

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <title>Saw-It | Manajemen Perkebunan Kelapa Sawit</title>
        <meta name="description" content="Sistem manajemen perkebunan kelapa sawit canggih dengan wawasan bertenaga AI" />
        <meta name="generator" content="v0.app" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased ${shouldShowSidebar ? 'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900' : 'bg-white dark:bg-gray-900'} min-h-screen transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
            </div>
          }>
            {shouldShowSidebar ? (
              <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <main className="flex-1 overflow-auto relative">
                  <div className="absolute inset-0 bg-white/40 dark:bg-black/20 backdrop-blur-sm transition-colors duration-300"></div>
                  <div className="relative z-10 h-full">
                    {children}
                  </div>
                </main>
              </div>
            ) : (
              <main className="min-h-screen">
                {children}
              </main>
            )}
          </Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
