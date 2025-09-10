"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="w-9 h-9 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] text-gray-900 dark:text-gray-100" />
        <span className="sr-only text-gray-900 dark:text-gray-100">Toggle theme</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="w-9 h-9 bg-white dark:bg-gray-800 backdrop-blur-sm border-emerald-200 dark:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-gray-900 dark:text-gray-100"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gray-900 dark:text-gray-100" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-gray-900 dark:text-gray-100" />
          <span className="sr-only text-gray-900 dark:text-gray-100">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white dark:bg-gray-800 backdrop-blur-sm border-emerald-200 dark:border-emerald-700"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="hover:bg-emerald-50 dark:hover:bg-emerald-900/20 cursor-pointer text-gray-900 dark:text-gray-100"
        >
          <Sun className="h-4 w-4 mr-2 text-gray-900 dark:text-gray-100" />
          <span className="text-gray-900 dark:text-gray-100">Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="hover:bg-emerald-50 dark:hover:bg-emerald-900/20 cursor-pointer text-gray-900 dark:text-gray-100"
        >
          <Moon className="h-4 w-4 mr-2 text-gray-900 dark:text-gray-100" />
          <span className="text-gray-900 dark:text-gray-100">Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="hover:bg-emerald-50 dark:hover:bg-emerald-900/20 cursor-pointer text-gray-900 dark:text-gray-100"
        >
          <Sun className="h-4 w-4 mr-2 text-gray-900 dark:text-gray-100" />
          <span className="text-gray-900 dark:text-gray-100">System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
