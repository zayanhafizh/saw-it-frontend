"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, TrendingDown } from "lucide-react"

const lowProductionAreas = [
  { id: "D03", name: "Blok D-03", x: 30, y: 25, production: 185, efficiency: 68 },
  { id: "F11", name: "Blok F-11", x: 70, y: 45, production: 205, efficiency: 72 },
  { id: "E07", name: "Blok E-07", x: 45, y: 70, production: 225, efficiency: 78 },
]

export function SpatialMapBottom() {
  return (
    <Card className="border-red-200 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-red-700 dark:text-red-300 flex items-center gap-2 text-sm">
          <TrendingDown className="h-4 w-4" />
          Peta Spasial Top 3 Area Produksi Terkecil
        </CardTitle>
        <CardDescription className="text-xs">Area yang memerlukan perhatian dan perbaikan segera</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="relative rounded-lg overflow-hidden h-48 mb-3">
          <img
            src="/satellite-map-view-of-palm-oil-plantation-with-gre.jpg"
            alt="Peta satelit area produksi rendah"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-900/20"></div>

          {/* Low production areas */}
          {lowProductionAreas.map((area, index) => (
            <div
              key={area.id}
              className="absolute group cursor-pointer"
              style={{ left: `${area.x}%`, top: `${area.y}%` }}
            >
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-red-600 border-3 border-red-300 shadow-lg flex items-center justify-center transition-transform hover:scale-110">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>

                {/* Warning pulse effect */}
                <div className="absolute inset-0 w-8 h-8 rounded-full bg-red-400 animate-pulse opacity-40"></div>
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap z-10">
                <div className="font-medium">{area.name}</div>
                <div>
                  {area.production} ton • {area.efficiency}% dari target
                </div>
                <div className="text-red-300">Perlu Perhatian Segera</div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
            <div className="text-sm font-bold text-red-700 dark:text-red-300">185</div>
            <p className="text-xs text-gray-600 dark:text-gray-400">Ton Terendah</p>
          </div>
          <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
            <div className="text-sm font-bold text-red-700 dark:text-red-300">68%</div>
            <p className="text-xs text-gray-600 dark:text-gray-400">Efisiensi Minimum</p>
          </div>
          <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
            <div className="text-sm font-bold text-red-700 dark:text-red-300">615</div>
            <p className="text-xs text-gray-600 dark:text-gray-400">Total Produksi</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
