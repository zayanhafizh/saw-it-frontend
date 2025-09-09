"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

const topProductionAreas = [
  { id: "A12", name: "Blok A-12", x: 25, y: 20, production: 485, efficiency: 118 },
  { id: "C08", name: "Blok C-08", x: 60, y: 35, production: 467, efficiency: 115 },
  { id: "B15", name: "Blok B-15", x: 40, y: 60, production: 445, efficiency: 112 },
]

export function SpatialMapTop() {
  return (
    <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-emerald-700 dark:text-emerald-300 flex items-center gap-2 text-sm">
          <TrendingUp className="h-4 w-4" />
          Peta Spasial Top 3 Area Produksi Terbesar
        </CardTitle>
        <CardDescription className="text-xs">Visualisasi area dengan produksi kelapa sawit tertinggi</CardDescription>
      </CardHeader>
      <CardContent className="pt-0 h-full flex flex-col">
        <div className="relative bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-900/30 dark:to-emerald-800/30 rounded-lg overflow-hidden flex-1">
          {/* Map background image */}
          <img
            src="/satellite-map-view-of-palm-oil-plantation-with-gre.jpg"
            alt="Peta satelit perkebunan kelapa sawit"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />

          {/* Overlay gradient for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 to-emerald-200/40"></div>

          {/* Top production areas */}
          {topProductionAreas.map((area, index) => (
            <div
              key={area.id}
              className="absolute group cursor-pointer z-10"
              style={{ left: `${area.x}%`, top: `${area.y}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-black border-2 border-white shadow-lg flex items-center justify-center transition-transform hover:scale-110">
                <span className="text-white font-bold text-xs">{index + 1}</span>
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs rounded-lg px-2 py-1 whitespace-nowrap z-20">
                <div className="font-medium">{area.name}</div>
                <div>
                  {area.production} ton • {area.efficiency}% efisiensi
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 grid grid-cols-3 gap-2 text-center">
          <div className="p-1 bg-emerald-100 dark:bg-emerald-900/30 rounded">
            <div className="text-sm font-bold text-emerald-700 dark:text-emerald-300">485</div>
            <p className="text-xs text-gray-600 dark:text-gray-400">Ton Tertinggi</p>
          </div>
          <div className="p-1 bg-emerald-100 dark:bg-emerald-900/30 rounded">
            <div className="text-sm font-bold text-emerald-700 dark:text-emerald-300">118%</div>
            <p className="text-xs text-gray-600 dark:text-gray-400">Efisiensi Puncak</p>
          </div>
          <div className="p-1 bg-emerald-100 dark:bg-emerald-900/30 rounded">
            <div className="text-sm font-bold text-emerald-700 dark:text-emerald-300">1,397</div>
            <p className="text-xs text-gray-600 dark:text-gray-400">Total Produksi</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
