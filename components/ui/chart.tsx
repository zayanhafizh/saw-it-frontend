"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    config: Record<string, any>
  }
>(({ className, config, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("chart-container overflow-visible", className)}
      style={
        {
          "--color-production": "#10b981",
          "--color-target": "#f59e0b",
        } as React.CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  )
})
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = ({ children, ...props }: any) => {
  return React.cloneElement(children, props)
}

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    active?: boolean
    payload?: Array<{
      color?: string
      name?: string
      value?: string | number
      payload?: any
    }>
    label?: string
  }
>(({ className, active, payload, label, ...props }, ref) => {
  if (!active || !payload || !payload.length) {
    return null
  }

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-white p-3 shadow-lg",
        "min-w-[120px] pointer-events-none relative",
        className
      )}
      style={{ 
        zIndex: 9999,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }}
      {...props}
    >
      <div className="grid gap-2">
        <div className="flex flex-col">
          <span className="text-[0.70rem] uppercase text-gray-500 font-medium">
            {label}
          </span>
        </div>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="h-2.5 w-2.5 shrink-0 rounded-[2px]"
              style={{
                backgroundColor: entry.color,
              }}
            />
            <span className="text-[0.70rem] text-gray-600">
              {entry.name}:
            </span>
            <span className="text-[0.70rem] font-semibold text-gray-900">
              {typeof entry.value === 'number' 
                ? entry.value.toLocaleString('id-ID') + ' ton'
                : entry.value
              }
            </span>
          </div>
        ))}
      </div>
    </div>
  )
})
ChartTooltipContent.displayName = "ChartTooltipContent"

export { ChartContainer, ChartTooltip, ChartTooltipContent }
