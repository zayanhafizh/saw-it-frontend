"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { TrendingUp } from "lucide-react"

const productionData = [
  { month: "Jan", production: 2100, target: 2200, year: 2024 },
  { month: "Feb", production: 2300, target: 2250, year: 2024 },
  { month: "Mar", production: 2450, target: 2300, year: 2024 },
  { month: "Apr", production: 2200, target: 2350, year: 2024 },
  { month: "Mei", production: 2600, target: 2400, year: 2024 },
  { month: "Jun", production: 2750, target: 2450, year: 2024 },
  { month: "Jul", production: 2850, target: 2500, year: 2024 },
  { month: "Ags", production: 2700, target: 2550, year: 2024 },
  { month: "Sep", production: 2900, target: 2600, year: 2024 },
  { month: "Okt", production: 3100, target: 2650, year: 2024 },
  { month: "Nov", production: 2950, target: 2700, year: 2024 },
  { month: "Des", production: 3200, target: 2750, year: 2024 },
]

export function ProductionChart() {
  return (
    <div className="h-[300px]">
      <ChartContainer
        config={{
          production: {
            label: "Produksi Aktual",
            color: "hsl(var(--chart-1))",
          },
          target: {
            label: "Target",
            color: "hsl(var(--chart-2))",
          },
        }}
        className="h-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={productionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="month" className="text-xs" tick={{ fontSize: 12 }} />
            <YAxis className="text-xs" tick={{ fontSize: 12 }} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="production"
              stroke="var(--color-production)"
              strokeWidth={3}
              dot={{ fill: "var(--color-production)", strokeWidth: 2, r: 4 }}
              name="Produksi Aktual"
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke="var(--color-target)"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: "var(--color-target)", strokeWidth: 2, r: 3 }}
              name="Target"
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}
