"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Calculator, Bot, Upload, Leaf, Info } from "lucide-react"

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

  return (
    <div className="flex h-full w-64 flex-col bg-emerald-900 text-white">
      {/* Logo and Brand */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-emerald-800">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
          <Leaf className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-xl font-bold">Saw-It</h1>
          <p className="text-sm text-emerald-200">Palm Management</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive ? "bg-emerald-700 text-white" : "text-emerald-100 hover:bg-emerald-800 hover:text-white",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-emerald-800 px-6 py-4">
        <p className="text-xs text-emerald-200">© 2024 Saw-It Platform</p>
      </div>
    </div>
  )
}
