"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Leaf } from "lucide-react"

const plantationAreas = [
  { id: "A", name: "Sector A", blocks: 8, x: 20, y: 15, status: "high", production: 3200 },
  { id: "B", name: "Sector B", blocks: 6, x: 45, y: 25, status: "medium", production: 2800 },
  { id: "C", name: "Sector C", blocks: 7, x: 70, y: 20, status: "high", production: 3100 },
  { id: "D", name: "Sector D", blocks: 5, x: 25, y: 50, status: "low", production: 1900 },
  { id: "E", name: "Sector E", blocks: 9, x: 60, y: 45, status: "medium", production: 2600 },
  { id: "F", name: "Sector F", blocks: 4, x: 80, y: 60, status: "low", production: 1700 },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "high":
      return "bg-emerald-500 border-emerald-600"
    case "medium":
      return "bg-yellow-500 border-yellow-600"
    case "low":
      return "bg-red-500 border-red-600"
    default:
      return "bg-gray-500 border-gray-600"
  }
}

export function PlantationMap() {
  return (
    <Card className="border-emerald-200">
      <CardHeader>
        <CardTitle className="text-emerald-700 flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Plantation Overview Map
        </CardTitle>
        <CardDescription>Real-time production status by sector</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-4 h-[280px] overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 grid-rows-6 h-full gap-1">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="bg-emerald-300 rounded-sm"></div>
              ))}
            </div>
          </div>

          {/* Plantation areas */}
          {plantationAreas.map((area) => (
            <div
              key={area.id}
              className="absolute group cursor-pointer"
              style={{ left: `${area.x}%`, top: `${area.y}%` }}
            >
              <div
                className={`w-8 h-8 rounded-full border-2 ${getStatusColor(area.status)} shadow-lg flex items-center justify-center transition-transform hover:scale-110`}
              >
                <Leaf className="h-4 w-4 text-white" />
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap z-10">
                <div className="font-medium">{area.name}</div>
                <div>
                  {area.blocks} blocks • {area.production} tons
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="text-gray-600">High Production</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-gray-600">Medium Production</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-gray-600">Low Production</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
