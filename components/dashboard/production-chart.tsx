"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { TrendingUp } from "lucide-react"

const productionData = [
  { month: "Jan", production: 2100, target: 2200 },
  { month: "Feb", production: 2300, target: 2250 },
  { month: "Mar", production: 2450, target: 2300 },
  { month: "Apr", production: 2200, target: 2350 },
  { month: "Mei", production: 2600, target: 2400 },
  { month: "Jun", production: 2750, target: 2450 },
  { month: "Jul", production: 2850, target: 2500 },
  { month: "Agu", production: 2700, target: 2550 },
  { month: "Sep", production: 2900, target: 2600 },
  { month: "Okt", production: 3100, target: 2650 },
  { month: "Nov", production: 2950, target: 2700 },
  { month: "Des", production: 3200, target: 2750 },
]

export function ProductionChart() {
  return (
    <Card className="border-emerald-200 h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-emerald-700 flex items-center gap-2 text-sm">
          <TrendingUp className="h-4 w-4" />
          Tren Produksi 2024
        </CardTitle>
        <CardDescription className="text-xs">Produksi kelapa sawit bulanan vs target (dalam ton)</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <ChartContainer
          config={{
            production: {
              label: "Produksi Aktual",
              color: "#10b981", // Set explicit emerald color for better visibility
            },
            target: {
              label: "Target",
              color: "#f59e0b", // Set explicit amber color for contrast
            },
          }}
          className="h-60 overflow-hidden"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={productionData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300" />
              <XAxis
                dataKey="month"
                className="text-xs"
                tick={{ fontSize: 12, fill: "#374151" }} // Set explicit text color
              />
              <YAxis
                className="text-xs"
                tick={{ fontSize: 12, fill: "#374151" }} // Set explicit text color
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="production"
                stroke="#10b981" // Set explicit stroke color
                strokeWidth={3}
                dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
                name="Produksi Aktual"
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="#f59e0b" // Set explicit stroke color
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: "#f59e0b", strokeWidth: 2, r: 3 }}
                name="Target"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
