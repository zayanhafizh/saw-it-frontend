"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Leaf, TrendingUp, AlertTriangle, Target } from "lucide-react"
import { useState } from "react"

const plantationAreas = [
  {
    id: "A",
    name: "Sektor A",
    blocks: 8,
    x: 20,
    y: 15,
    status: "high",
    production: 3200,
    target: 3000,
    prediction: "3400 ton (bulan depan)",
    evaluation: "Tingkatkan pemupukan pada blok A-3 dan A-7",
  },
  {
    id: "B",
    name: "Sektor B",
    blocks: 6,
    x: 45,
    y: 25,
    status: "medium",
    production: 2800,
    target: 2900,
    prediction: "2850 ton (bulan depan)",
    evaluation: "Monitor cuaca dan tingkatkan irigasi",
  },
  {
    id: "C",
    name: "Sektor C",
    blocks: 7,
    x: 70,
    y: 20,
    status: "high",
    production: 3100,
    target: 2950,
    prediction: "3250 ton (bulan depan)",
    evaluation: "Pertahankan kondisi optimal saat ini",
  },
  {
    id: "D",
    name: "Sektor D",
    blocks: 5,
    x: 25,
    y: 50,
    status: "low",
    production: 1900,
    target: 2200,
    prediction: "2050 ton (bulan depan)",
    evaluation: "Perlu inspeksi hama dan penyakit segera",
  },
  {
    id: "E",
    name: "Sektor E",
    blocks: 9,
    x: 60,
    y: 45,
    status: "medium",
    production: 2600,
    target: 2700,
    prediction: "2720 ton (bulan depan)",
    evaluation: "Optimalkan jadwal panen dan pemeliharaan",
  },
  {
    id: "F",
    name: "Sektor F",
    blocks: 4,
    x: 80,
    y: 60,
    status: "low",
    production: 1700,
    target: 2100,
    prediction: "1850 ton (bulan depan)",
    evaluation: "Perbaiki sistem drainase dan replanting",
  },
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
  const [selectedArea, setSelectedArea] = useState<(typeof plantationAreas)[0] | null>(null)
  const [hoveredArea, setHoveredArea] = useState<(typeof plantationAreas)[0] | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

  const handleAreaClick = (area: (typeof plantationAreas)[0]) => {
    setSelectedArea(area)
  }

  const handleAreaHover = (area: (typeof plantationAreas)[0], event: React.MouseEvent) => {
    setHoveredArea(area)
    const rect = event.currentTarget.getBoundingClientRect()
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    })
  }

  const handleAreaLeave = () => {
    setHoveredArea(null)
  }

  return (
    <div className="relative">
      <Card className="border-emerald-200 dark:border-emerald-700 dark:bg-gray-800/50 hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Peta Area Kebun Sawit
          </CardTitle>
          <CardDescription className="dark:text-gray-400">Status produksi real-time berdasarkan sektor</CardDescription>
        </CardHeader>
      <CardContent className="space-y-4">
        {/* Background pattern */}
        <div
          className="relative rounded-lg h-[280px] bg-cover bg-center"
          style={{
            backgroundImage: `url('/aerial-satellite-view-of-palm-oil-plantation-with-.jpg')`,
          }}
        >
          {/* Overlay for better marker visibility */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Road patterns overlay */}
          <div className="absolute inset-0">
            {/* Horizontal roads */}
            <div className="absolute top-[30%] left-0 right-0 h-1 bg-amber-200/60"></div>
            <div className="absolute top-[60%] left-0 right-0 h-1 bg-amber-200/60"></div>

            {/* Vertical roads */}
            <div className="absolute left-[25%] top-0 bottom-0 w-1 bg-amber-200/60"></div>
            <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-amber-200/60"></div>
            <div className="absolute left-[75%] top-0 bottom-0 w-1 bg-amber-200/60"></div>
          </div>

          {/* Plantation areas */}
          {plantationAreas.map((area) => (
            <div
              key={area.id}
              className="absolute group cursor-pointer"
              style={{ left: `${area.x}%`, top: `${area.y}%` }}
              onClick={() => handleAreaClick(area)}
              onMouseEnter={(e) => handleAreaHover(area, e)}
              onMouseLeave={handleAreaLeave}
            >
              <div
                className={`w-10 h-10 rounded-full border-3 ${getStatusColor(area.status)} shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-125 hover:shadow-2xl ${selectedArea?.id === area.id ? "ring-4 ring-blue-400 scale-110" : ""}`}
              >
                <Leaf className="h-5 w-5 text-white drop-shadow-sm" />
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="text-gray-600 dark:text-gray-400">Produksi Tinggi</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-gray-600 dark:text-gray-400">Produksi Sedang</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-gray-600 dark:text-gray-400">Produksi Rendah</span>
          </div>
        </div>

        {/* Notifikasi Target */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
            <Target className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            Notifikasi Target
          </h4>
          <div className="space-y-2">
            {plantationAreas.map((area) => {
              const isAboveTarget = area.production > area.target
              const percentage = ((area.production / area.target) * 100).toFixed(1)
              return (
                <div key={area.id} className="flex items-center justify-between p-2 bg-white dark:bg-gray-700/50 rounded-md">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{area.name}</span>
                  <div className="flex items-center gap-2">
                    <Badge className={isAboveTarget ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"}>
                      {percentage}% dari target
                    </Badge>
                    {isAboveTarget ? (
                      <TrendingUp className="h-3 w-3 text-green-600 dark:text-green-400" />
                    ) : (
                      <AlertTriangle className="h-3 w-3 text-red-600 dark:text-red-400" />
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Detail Area yang Dipilih */}
        {selectedArea && (
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
            <h4 className="font-semibold text-blue-900 dark:text-blue-400 mb-3">Detail {selectedArea.name}</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Produksi Saat Ini:</span>
                <span className="text-sm font-medium dark:text-gray-100">{selectedArea.production} ton</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Target:</span>
                <span className="text-sm font-medium dark:text-gray-100">{selectedArea.target} ton</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Prediksi Produksi:</span>
                <span className="text-sm font-medium text-blue-700 dark:text-blue-400">{selectedArea.prediction}</span>
              </div>
              <div className="mt-3">
                <span className="text-sm text-gray-600 dark:text-gray-400">Langkah Evaluasi:</span>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-1">{selectedArea.evaluation}</p>
              </div>
            </div>
          </div>
        )}
        </CardContent>

        {/* Enhanced Tooltip Portal */}
        {hoveredArea && (
          <div 
            className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full"
            style={{
              left: tooltipPosition.x,
              top: tooltipPosition.y
            }}
          >
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl shadow-2xl p-4 min-w-[300px] max-w-[350px] animate-in fade-in-0 zoom-in-95 duration-200">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="font-bold text-lg text-gray-900 dark:text-gray-100">{hoveredArea.name}</div>
                <div className={`w-3 h-3 rounded-full ${getStatusColor(hoveredArea.status).replace('border-', 'bg-').split(' ')[0]}`}></div>
              </div>

              {/* Production Info */}
              <div className="space-y-2 mb-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Produksi Saat Ini:</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">{hoveredArea.production.toLocaleString()} ton</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Target:</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{hoveredArea.target.toLocaleString()} ton</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Jumlah Blok:</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{hoveredArea.blocks} blok</span>
                </div>
              </div>

              {/* Performance Badge */}
              <div className="mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Performance:</span>
                  <Badge className={
                    hoveredArea.production > hoveredArea.target 
                      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400" 
                      : hoveredArea.production >= hoveredArea.target * 0.9 
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                      : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                  }>
                    {((hoveredArea.production / hoveredArea.target) * 100).toFixed(1)}% dari target
                  </Badge>
                </div>
              </div>

              {/* Prediction */}
              <div className="mb-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Prediksi Bulan Depan:</div>
                <div className="font-semibold text-blue-700 dark:text-blue-400">{hoveredArea.prediction}</div>
              </div>

              {/* Evaluation */}
              <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Rekomendasi:</div>
                <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{hoveredArea.evaluation}</div>
              </div>

              {/* Arrow pointing down */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800"></div>
                <div className="w-0 h-0 border-l-[11px] border-r-[11px] border-t-[11px] border-l-transparent border-r-transparent border-t-gray-200 dark:border-t-gray-600 absolute top-[-1px] left-1/2 transform -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}