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
  { month: "May", production: 2600, target: 2400 },
  { month: "Jun", production: 2750, target: 2450 },
  { month: "Jul", production: 2850, target: 2500 },
  { month: "Aug", production: 2700, target: 2550 },
  { month: "Sep", production: 2900, target: 2600 },
  { month: "Oct", production: 3100, target: 2650 },
  { month: "Nov", production: 2950, target: 2700 },
  { month: "Dec", production: 3200, target: 2750 },
]

export function ProductionChart() {
  return (
    <Card className="border-emerald-200">
      <CardHeader>
        <CardTitle className="text-emerald-700 flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Production Trends 2024
        </CardTitle>
        <CardDescription>Monthly palm oil production vs targets (in tons)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            production: {
              label: "Actual Production",
              color: "hsl(var(--chart-1))",
            },
            target: {
              label: "Target",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="h-[300px]"
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
                name="Actual Production"
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
      </CardContent>
    </Card>
  )
}
