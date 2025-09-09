"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Leaf } from "lucide-react"

const plantationAreas = [
  { id: "A", name: "Sektor A", blocks: 8, x: 20, y: 15, status: "high", production: 3200 },
  { id: "B", name: "Sektor B", blocks: 6, x: 45, y: 25, status: "medium", production: 2800 },
  { id: "C", name: "Sektor C", blocks: 7, x: 70, y: 20, status: "high", production: 3100 },
  { id: "D", name: "Sektor D", blocks: 5, x: 25, y: 50, status: "low", production: 1900 },
  { id: "E", name: "Sektor E", blocks: 9, x: 60, y: 45, status: "medium", production: 2600 },
  { id: "F", name: "Sektor F", blocks: 4, x: 80, y: 60, status: "low", production: 1700 },
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
    <Card className="border-emerald-200 h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-emerald-700 flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4" />
          Peta Area Kebun Sawit
        </CardTitle>
        <CardDescription className="text-xs">Status produksi real-time berdasarkan sektor</CardDescription>
      </CardHeader>
      <CardContent className="pt-0 h-full flex flex-col">
        <div className="relative rounded-lg overflow-hidden flex-1">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/palm-oil-plantation-aerial-view.jpg')",
            }}
          >
            {/* Dark overlay for better contrast */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Plantation areas */}
          {plantationAreas.map((area) => (
            <div
              key={area.id}
              className="absolute group cursor-pointer z-10"
              style={{ left: `${area.x}%`, top: `${area.y}%` }}
            >
              <div
                className={`w-6 h-6 rounded-full border-2 ${getStatusColor(area.status)} shadow-lg flex items-center justify-center transition-transform hover:scale-110`}
              >
                <Leaf className="h-3 w-3 text-white" />
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs rounded-lg px-2 py-1 whitespace-nowrap z-20">
                <div className="font-medium">{area.name}</div>
                <div>
                  {area.blocks} blok • {area.production} ton
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-2 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-gray-600">Produksi Tinggi</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <span className="text-gray-600">Produksi Sedang</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <span className="text-gray-600">Produksi Rendah</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
