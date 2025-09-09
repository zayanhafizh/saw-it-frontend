"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, TrendingDown, ChevronDown, ChevronUp } from "lucide-react"

export function NDVIInfo() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
      <CardHeader
        className="pb-2 cursor-pointer hover:bg-orange-100/50 dark:hover:bg-orange-900/30 transition-colors rounded-t-lg"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-orange-700 dark:text-orange-300" />
            <CardTitle className="text-orange-700 dark:text-orange-300 text-sm">Informasi terkait NDVI</CardTitle>
          </div>
          {isExpanded ? (
            <ChevronUp className="h-4 w-4 text-orange-700 dark:text-orange-300" />
          ) : (
            <ChevronDown className="h-4 w-4 text-orange-700 dark:text-orange-300" />
          )}
        </div>
        <CardDescription className="text-xs">Status kesehatan vegetasi berdasarkan analisis satelit</CardDescription>
      </CardHeader>

      {isExpanded && (
        <CardContent className="pt-0 animate-in slide-in-from-top-2 duration-200">
          <div className="p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-orange-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-orange-600 rounded">
                  <TrendingDown className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">
                    NDVI turun 10% (&lt;10%) berdasarkan inspeksi lapangan
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Terdeteksi penurunan kesehatan vegetasi pada beberapa sektor
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-orange-700 dark:text-orange-300">-10%</div>
                <p className="text-xs text-gray-500">vs bulan lalu</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-3 pt-3 border-t border-orange-200">
              <div className="text-center">
                <div className="text-lg font-bold text-red-600">5</div>
                <p className="text-xs text-gray-600">Sektor Kritis</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-yellow-600">8</div>
                <p className="text-xs text-gray-600">Perlu Perhatian</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">11</div>
                <p className="text-xs text-gray-600">Sektor Sehat</p>
              </div>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
