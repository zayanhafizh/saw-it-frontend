"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ChevronUp, ChevronDown, Calendar, MapPin, TrendingUp } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function DashboardPage() {
  const [isNdviExpanded, setIsNdviExpanded] = useState(true)
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="p-3 max-w-7xl mx-auto space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              Dashboard Perkebunan
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-xs transition-colors duration-300">
              Monitoring dan analisis produksi kelapa sawit real-time
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-3 w-3 text-gray-500 dark:text-gray-400" />
            <span className="text-xs text-gray-600 dark:text-gray-300">Filter Periode:</span>
            <Select defaultValue="bulan-ini">
              <SelectTrigger className="w-24 h-7 text-xs bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <SelectItem value="bulan-ini">Bulan Ini</SelectItem>
                <SelectItem value="bulan-lalu">Bulan Lalu</SelectItem>
                <SelectItem value="tahun-ini">Tahun Ini</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* NDVI Alert - Collapsible */}
        <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-orange-200 dark:border-orange-800 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
          <CardContent className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-orange-500 rounded-lg transition-transform duration-200 hover:scale-110">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 text-sm transition-colors duration-300">
                    Informasi terkait NDVI
                  </h3>
                  <p className="text-orange-700 dark:text-orange-300 text-xs transition-colors duration-300">
                    Status kesehatan vegetasi berdasarkan analisis satelit
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-all duration-200 hover:scale-110"
                onClick={() => setIsNdviExpanded(!isNdviExpanded)}
              >
                {isNdviExpanded ? (
                  <ChevronUp className="h-3 w-3 text-orange-800 dark:text-orange-200" />
                ) : (
                  <ChevronDown className="h-3 w-3 text-orange-800 dark:text-orange-200" />
                )}
              </Button>
            </div>

            {/* NDVI Stats - Collapsible */}
            {isNdviExpanded && (
              <div className="mt-3 bg-white/70 dark:bg-gray-800/70 rounded-lg p-3 transition-all duration-300 hover:bg-white/90 dark:hover:bg-gray-800/90">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-orange-800 dark:text-orange-200 font-medium text-sm transition-colors duration-300">
                    NDVI turun 10% (&lt;10%) berdasarkan inspeksi lapangan
                  </span>
                  <span className="text-red-600 dark:text-red-400 font-bold text-base">-10%</span>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Terdeteksi penurunan kesehatan vegetasi pada beberapa sektor
                </div>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  <div className="text-center group cursor-pointer">
                    <div className="text-xl font-bold text-red-600 dark:text-red-400 transition-all duration-200 group-hover:scale-110 group-hover:text-red-500">
                      5
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Sektor Kritis</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="text-xl font-bold text-yellow-600 dark:text-yellow-400 transition-all duration-200 group-hover:scale-110 group-hover:text-yellow-500">
                      8
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Perlu Perhatian</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="text-xl font-bold text-green-600 dark:text-green-400 transition-all duration-200 group-hover:scale-110 group-hover:text-green-500">
                      11
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Sektor Sehat</div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <Card className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border-emerald-200 dark:border-emerald-800 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-emerald-300 dark:hover:border-emerald-700 group">
            <CardHeader className="pb-1 pt-3 px-3">
              <div className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-emerald-600 dark:text-emerald-400 transition-transform duration-200 group-hover:scale-110" />
                <CardTitle className="text-emerald-700 dark:text-emerald-300 text-xs transition-colors duration-300">
                  Peta Spasial Top 3 Area Produksi Terbesar
                </CardTitle>
              </div>
              <CardDescription className="text-xs text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Visualisasi area dengan produksi kelapa sawit tertinggi
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 px-3 pb-3">
              <div className="relative bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-800/30 dark:to-emerald-700/30 rounded-lg h-32 overflow-hidden transition-all duration-300 group-hover:from-emerald-200 group-hover:to-emerald-300 dark:group-hover:from-emerald-700/40 dark:group-hover:to-emerald-600/40">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                  style={{
                    backgroundImage: `url('/aerial-satellite-view-of-palm-oil-plantation-with-.jpg')`,
                  }}
                ></div>

                {/* Overlay for better contrast */}
                <div className="absolute inset-0 bg-emerald-500/20 transition-all duration-300 group-hover:bg-emerald-500/30"></div>

                <div
                  className="absolute top-6 left-8 w-5 h-5 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 hover:scale-125 hover:shadow-lg cursor-pointer group/marker"
                  title="Blok A-12: 485 ton"
                >
                  1
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover/marker:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    Blok A-12: 485 ton
                  </div>
                </div>
                <div
                  className="absolute top-4 right-8 w-5 h-5 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 hover:scale-125 hover:shadow-lg cursor-pointer group/marker"
                  title="Blok B-8: 467 ton"
                >
                  2
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover/marker:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    Blok B-8: 467 ton
                  </div>
                </div>
                <div
                  className="absolute bottom-8 left-1/3 w-5 h-5 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 hover:scale-125 hover:shadow-lg cursor-pointer group/marker"
                  title="Blok C-15: 445 ton"
                >
                  3
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover/marker:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    Blok C-15: 445 ton
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1 mt-2 text-center">
                <div className="group cursor-pointer">
                  <div className="text-base font-bold text-emerald-700 dark:text-emerald-300 transition-all duration-200 group-hover:scale-110 group-hover:text-emerald-600">
                    485
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Ton Tertinggi</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-base font-bold text-emerald-700 dark:text-emerald-300 transition-all duration-200 group-hover:scale-110 group-hover:text-emerald-600">
                    118%
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Efisiensi Puncak</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-base font-bold text-emerald-700 dark:text-emerald-300 transition-all duration-200 group-hover:scale-110 group-hover:text-emerald-600">
                    1,397
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Total Produksi</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 dark:bg-gray-800 text-white border-gray-700 dark:border-gray-600 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-gray-600 dark:hover:border-gray-500 group">
            <CardHeader className="pb-1 pt-3 px-3">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-emerald-400 transition-transform duration-200 group-hover:scale-110" />
                <CardTitle className="text-emerald-400 text-xs">Peta Area Kebun Sawit</CardTitle>
              </div>
              <CardDescription className="text-gray-400 dark:text-gray-300 text-xs transition-colors duration-300">
                Status produksi real-time berdasarkan sektor
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 px-3 pb-3">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 rounded-lg h-32 overflow-hidden transition-all duration-300 group-hover:from-gray-700 group-hover:to-gray-800">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                  style={{
                    backgroundImage: `url('/aerial-satellite-view-of-palm-oil-plantation-with-.jpg')`,
                  }}
                ></div>

                {/* Overlay for better contrast */}
                <div className="absolute inset-0 bg-gray-800/20 transition-all duration-300 group-hover:bg-gray-800/30"></div>

                <div
                  className="absolute top-3 left-6 w-3 h-3 bg-emerald-500 rounded-full border border-white transition-all duration-200 hover:scale-150 hover:shadow-lg cursor-pointer group/marker"
                  title="Sektor A: Produksi Tinggi - 320 ton"
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover/marker:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    Sektor A: 320 ton
                  </div>
                </div>
                <div
                  className="absolute top-4 right-8 w-3 h-3 bg-red-500 rounded-full border border-white flex items-center justify-center transition-all duration-200 hover:scale-150 hover:shadow-lg cursor-pointer group/marker"
                  title="Sektor B: Produksi Rendah - 145 ton"
                >
                  <AlertTriangle className="h-2 w-2 text-white" />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover/marker:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    Sektor B: 145 ton
                  </div>
                </div>
                <div
                  className="absolute top-8 left-1/2 w-3 h-3 bg-yellow-500 rounded-full border border-white transition-all duration-200 hover:scale-150 hover:shadow-lg cursor-pointer group/marker"
                  title="Sektor C: Produksi Sedang - 235 ton"
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover/marker:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    Sektor C: 235 ton
                  </div>
                </div>
                <div
                  className="absolute bottom-6 left-6 w-3 h-3 bg-emerald-500 rounded-full border border-white transition-all duration-200 hover:scale-150 hover:shadow-lg cursor-pointer group/marker"
                  title="Sektor D: Produksi Tinggi - 298 ton"
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover/marker:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    Sektor D: 298 ton
                  </div>
                </div>
                <div
                  className="absolute bottom-4 right-6 w-3 h-3 bg-yellow-500 rounded-full border border-white transition-all duration-200 hover:scale-150 hover:shadow-lg cursor-pointer group/marker"
                  title="Sektor E: Produksi Sedang - 210 ton"
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover/marker:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    Sektor E: 210 ton
                  </div>
                </div>
                <div
                  className="absolute bottom-8 right-1/3 w-3 h-3 bg-red-500 rounded-full border border-white flex items-center justify-center transition-all duration-200 hover:scale-150 hover:shadow-lg cursor-pointer group/marker"
                  title="Sektor F: Produksi Rendah - 165 ton"
                >
                  <AlertTriangle className="h-2 w-2 text-white" />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover/marker:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    Sektor F: 165 ton
                  </div>
                </div>
                <div
                  className="absolute top-1/2 right-4 w-3 h-3 bg-emerald-500 rounded-full border border-white transition-all duration-200 hover:scale-150 hover:shadow-lg cursor-pointer group/marker"
                  title="Sektor G: Produksi Tinggi - 315 ton"
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover/marker:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    Sektor G: 315 ton
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex justify-center gap-3 mt-2 text-xs">
                <div className="flex items-center gap-1 group cursor-pointer">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full transition-transform duration-200 group-hover:scale-125"></div>
                  <span className="text-emerald-400 transition-colors duration-200 group-hover:text-emerald-300">
                    Produksi Tinggi
                  </span>
                </div>
                <div className="flex items-center gap-1 group cursor-pointer">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full transition-transform duration-200 group-hover:scale-125"></div>
                  <span className="text-yellow-400 transition-colors duration-200 group-hover:text-yellow-300">
                    Produksi Sedang
                  </span>
                </div>
                <div className="flex items-center gap-1 group cursor-pointer">
                  <div className="w-2 h-2 bg-red-500 rounded-full transition-transform duration-200 group-hover:scale-125"></div>
                  <span className="text-red-400 transition-colors duration-200 group-hover:text-red-300">
                    Produksi Rendah
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-red-200 dark:border-red-800 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-red-300 dark:hover:border-red-700 group">
            <CardHeader className="pb-1 pt-3 px-3">
              <div className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-red-600 dark:text-red-400 rotate-180 transition-transform duration-200 group-hover:scale-110" />
                <CardTitle className="text-red-700 dark:text-red-300 text-xs transition-colors duration-300">
                  Peta Spasial Top 3 Area Produksi Terkecil
                </CardTitle>
              </div>
              <CardDescription className="text-xs text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Area yang memerlukan perhatian dan perbaikan segera
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 px-3 pb-3">
              <div className="relative bg-gradient-to-br from-red-100 to-red-200 dark:from-red-800/30 dark:to-red-700/30 rounded-lg h-32 overflow-hidden transition-all duration-300 group-hover:from-red-200 group-hover:to-red-300 dark:group-hover:from-red-700/40 dark:group-hover:to-red-600/40">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-80 transition-opacity duration-300 group-hover:opacity-90"
                  style={{
                    backgroundImage: `url('/aerial-satellite-view-of-palm-oil-plantation-with-.jpg')`,
                  }}
                ></div>

                {/* Overlay for better contrast */}
                <div className="absolute inset-0 bg-red-500/20 transition-all duration-300 group-hover:bg-red-500/30"></div>

                <div className="absolute top-8 left-8 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border border-white transition-all duration-200 hover:scale-125 hover:shadow-lg cursor-pointer group/marker">
                  <AlertTriangle className="h-3 w-3 text-white" />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover/marker:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    Blok F-11: 185 ton
                  </div>
                </div>
                <div className="absolute top-10 right-8 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border border-white transition-all duration-200 hover:scale-125 hover:shadow-lg cursor-pointer group/marker">
                  <AlertTriangle className="h-3 w-3 text-white" />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover/marker:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    Blok G-7: 198 ton
                  </div>
                </div>
                <div className="absolute bottom-6 left-1/3 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border border-white transition-all duration-200 hover:scale-125 hover:shadow-lg cursor-pointer group/marker">
                  <AlertTriangle className="h-3 w-3 text-white" />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover/marker:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    Blok H-3: 232 ton
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1 mt-2 text-center">
                <div className="group cursor-pointer">
                  <div className="text-base font-bold text-red-700 dark:text-red-300 transition-all duration-200 group-hover:scale-110 group-hover:text-red-600">
                    185
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Ton Terendah</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-base font-bold text-red-700 dark:text-red-300 transition-all duration-200 group-hover:scale-110 group-hover:text-red-600">
                    68%
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Efisiensi Minimum</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-base font-bold text-red-700 dark:text-red-300 transition-all duration-200 group-hover:scale-110 group-hover:text-red-600">
                    615
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Total Produksi</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 dark:bg-gray-800 text-white border-gray-700 dark:border-gray-600 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-gray-600 dark:hover:border-gray-500 group">
            <CardHeader className="pb-1 pt-3 px-3">
              <div className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-emerald-400 transition-transform duration-200 group-hover:scale-110" />
                <CardTitle className="text-emerald-400 text-xs">Tren Produksi 2024</CardTitle>
              </div>
              <CardDescription className="text-gray-400 dark:text-gray-300 text-xs transition-colors duration-300">
                Produksi kelapa sawit bulanan vs target (dalam ton)
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 px-3 pb-3">
              <div className="relative h-32">
                {/* Chart background grid */}
                <div className="absolute inset-0">
                  {/* Horizontal grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pt-2 pb-6">
                    <div className="h-px bg-gray-600 opacity-30 transition-opacity duration-300 group-hover:opacity-50"></div>
                    <div className="h-px bg-gray-600 opacity-30 transition-opacity duration-300 group-hover:opacity-50"></div>
                    <div className="h-px bg-gray-600 opacity-30 transition-opacity duration-300 group-hover:opacity-50"></div>
                    <div className="h-px bg-gray-600 opacity-30 transition-opacity duration-300 group-hover:opacity-50"></div>
                    <div className="h-px bg-gray-600 opacity-30 transition-opacity duration-300 group-hover:opacity-50"></div>
                  </div>
                </div>

                {/* Y-axis labels */}
                <div className="absolute left-0 top-2 bottom-6 flex flex-col justify-between text-xs text-gray-400 dark:text-gray-300 -ml-2 transition-colors duration-300">
                  <span>3200</span>
                  <span>2400</span>
                  <span>1600</span>
                  <span>800</span>
                  <span>0</span>
                </div>

                {/* Chart area with proper margins */}
                <div className="absolute left-8 right-2 top-2 bottom-6">
                  {/* Chart lines simulation */}
                  <svg className="w-full h-full" viewBox="0 0 350 96" preserveAspectRatio="none">
                    {/* Target line (orange/yellow) - gradual increase */}
                    <polyline
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                      points="0,64 30,62 60,60 90,58 120,56 150,54 180,52 210,50 240,48 270,46 300,44 330,42"
                      vectorEffect="non-scaling-stroke"
                      className="transition-all duration-300 hover:stroke-width-3 group-hover:stroke-yellow-400"
                    />
                    {/* Actual production line (green) - steeper growth curve */}
                    <polyline
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2.5"
                      points="0,72 30,68 60,60 90,52 120,40 150,32 180,26 210,20 240,16 270,12 300,10 330,8"
                      vectorEffect="non-scaling-stroke"
                      className="transition-all duration-300 hover:stroke-width-4 group-hover:stroke-emerald-400"
                    />

                    <g className="data-points">
                      <circle
                        cx="0"
                        cy="72"
                        r="2"
                        fill="#10b981"
                        className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer"
                      >
                        <title>Jan: 800 ton</title>
                      </circle>
                      <circle
                        cx="30"
                        cy="68"
                        r="2"
                        fill="#10b981"
                        className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer"
                      >
                        <title>Feb: 950 ton</title>
                      </circle>
                      <circle
                        cx="60"
                        cy="60"
                        r="2"
                        fill="#10b981"
                        className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer"
                      >
                        <title>Mar: 1200 ton</title>
                      </circle>
                      <circle
                        cx="90"
                        cy="52"
                        r="2"
                        fill="#10b981"
                        className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer"
                      >
                        <title>Apr: 1450 ton</title>
                      </circle>
                      <circle
                        cx="120"
                        cy="40"
                        r="2"
                        fill="#10b981"
                        className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer"
                      >
                        <title>Mei: 1800 ton</title>
                      </circle>
                      <circle
                        cx="150"
                        cy="32"
                        r="2"
                        fill="#10b981"
                        className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer"
                      >
                        <title>Jun: 2100 ton</title>
                      </circle>
                      <circle
                        cx="180"
                        cy="26"
                        r="2"
                        fill="#10b981"
                        className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer"
                      >
                        <title>Jul: 2350 ton</title>
                      </circle>
                      <circle
                        cx="210"
                        cy="20"
                        r="2"
                        fill="#10b981"
                        className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer"
                      >
                        <title>Agu: 2600 ton</title>
                      </circle>
                      <circle
                        cx="240"
                        cy="16"
                        r="2"
                        fill="#10b981"
                        className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer"
                      >
                        <title>Sep: 2800 ton</title>
                      </circle>
                      <circle
                        cx="270"
                        cy="12"
                        r="2"
                        fill="#10b981"
                        className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer"
                      >
                        <title>Okt: 2950 ton</title>
                      </circle>
                      <circle
                        cx="300"
                        cy="10"
                        r="2"
                        fill="#10b981"
                        className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer"
                      >
                        <title>Nov: 3050 ton</title>
                      </circle>
                      <circle
                        cx="330"
                        cy="8"
                        r="2"
                        fill="#10b981"
                        className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer"
                      >
                        <title>Des: 3150 ton</title>
                      </circle>
                    </g>

                    {/* Data points for target line with hover effects */}
                    <g className="target-points">
                      <circle
                        cx="0"
                        cy="64"
                        r="1.5"
                        fill="#f59e0b"
                        opacity="0.7"
                        className="transition-all duration-200 hover:r-3 hover:opacity-100 cursor-pointer"
                      >
                        <title>Target Jan: 1000 ton</title>
                      </circle>
                      <circle
                        cx="60"
                        cy="60"
                        r="1.5"
                        fill="#f59e0b"
                        opacity="0.7"
                        className="transition-all duration-200 hover:r-3 hover:opacity-100 cursor-pointer"
                      >
                        <title>Target Mar: 1200 ton</title>
                      </circle>
                      <circle
                        cx="120"
                        cy="56"
                        r="1.5"
                        fill="#f59e0b"
                        opacity="0.7"
                        className="transition-all duration-200 hover:r-3 hover:opacity-100 cursor-pointer"
                      >
                        <title>Target Mei: 1400 ton</title>
                      </circle>
                      <circle
                        cx="180"
                        cy="52"
                        r="1.5"
                        fill="#f59e0b"
                        opacity="0.7"
                        className="transition-all duration-200 hover:r-3 hover:opacity-100 cursor-pointer"
                      >
                        <title>Target Jul: 1600 ton</title>
                      </circle>
                      <circle
                        cx="240"
                        cy="48"
                        r="1.5"
                        fill="#f59e0b"
                        opacity="0.7"
                        className="transition-all duration-200 hover:r-3 hover:opacity-100 cursor-pointer"
                      >
                        <title>Target Sep: 1800 ton</title>
                      </circle>
                      <circle
                        cx="300"
                        cy="44"
                        r="1.5"
                        fill="#f59e0b"
                        opacity="0.7"
                        className="transition-all duration-200 hover:r-3 hover:opacity-100 cursor-pointer"
                      >
                        <title>Target Nov: 2000 ton</title>
                      </circle>
                      <circle
                        cx="330"
                        cy="42"
                        r="1.5"
                        fill="#f59e0b"
                        opacity="0.7"
                        className="transition-all duration-200 hover:r-3 hover:opacity-100 cursor-pointer"
                      >
                        <title>Target Des: 2100 ton</title>
                      </circle>
                    </g>
                  </svg>
                </div>

                {/* Month labels with proper spacing */}
                <div className="absolute bottom-0 left-8 right-2 flex justify-between text-xs text-gray-400 dark:text-gray-300 transition-colors duration-300">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>Mei</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Agu</span>
                  <span>Sep</span>
                  <span>Okt</span>
                  <span>Nov</span>
                  <span>Des</span>
                </div>
              </div>

              <div className="flex justify-center gap-3 mt-2 text-xs">
                <div className="flex items-center gap-1 group cursor-pointer">
                  <div className="w-2 h-0.5 bg-emerald-500 transition-all duration-200 group-hover:bg-emerald-400 group-hover:h-1"></div>
                  <span className="text-emerald-400 transition-colors duration-200 group-hover:text-emerald-300">
                    Produksi Aktual
                  </span>
                </div>
                <div className="flex items-center gap-1 group cursor-pointer">
                  <div className="w-2 h-0.5 bg-yellow-500 border-dashed border border-yellow-500 transition-all duration-200 group-hover:bg-yellow-400 group-hover:border-yellow-400 group-hover:h-1"></div>
                  <span className="text-yellow-400 transition-colors duration-200 group-hover:text-yellow-300">
                    Target
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
