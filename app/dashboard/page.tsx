"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, ChevronUp, ChevronDown, Calendar, Filter, MapPin, TrendingUp } from "lucide-react"
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
            <h1 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Dashboard Perkebunan</h1>
            <p className="text-gray-600 dark:text-gray-300 text-xs transition-colors duration-300">Monitoring dan analisis produksi kelapa sawit real-time</p>
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
        <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-orange-200 dark:border-orange-800 transition-colors duration-300">
          <CardContent className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-orange-500 rounded-lg">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 text-sm transition-colors duration-300">Informasi terkait NDVI</h3>
                  <p className="text-orange-700 dark:text-orange-300 text-xs transition-colors duration-300">Status kesehatan vegetasi berdasarkan analisis satelit</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                className="h-7 w-7 p-0 hover:bg-orange-100 dark:hover:bg-orange-900/30"
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
              <div className="mt-3 bg-white/70 dark:bg-gray-800/70 rounded-lg p-3 transition-colors duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-orange-800 dark:text-orange-200 font-medium text-sm transition-colors duration-300">NDVI turun 10% (&lt;10%) berdasarkan inspeksi lapangan</span>
                  <span className="text-red-600 dark:text-red-400 font-bold text-base">-10%</span>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300 mb-2 transition-colors duration-300">Terdeteksi penurunan kesehatan vegetasi pada beberapa sektor</div>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  <div className="text-center">
                    <div className="text-xl font-bold text-red-600 dark:text-red-400">5</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Sektor Kritis</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-yellow-600 dark:text-yellow-400">8</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Perlu Perhatian</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600 dark:text-green-400">11</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Sektor Sehat</div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Top Production Areas */}
          <Card className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border-emerald-200 dark:border-emerald-800 transition-colors duration-300">
            <CardHeader className="pb-1 pt-3 px-3">
              <div className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                <CardTitle className="text-emerald-700 dark:text-emerald-300 text-xs transition-colors duration-300">Peta Spasial Top 3 Area Produksi Terbesar</CardTitle>
              </div>
              <CardDescription className="text-xs text-gray-600 dark:text-gray-300 transition-colors duration-300">Visualisasi area dengan produksi kelapa sawit tertinggi</CardDescription>
            </CardHeader>
            <CardContent className="pt-0 px-3 pb-3">
              <div className="relative bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-800/30 dark:to-emerald-700/30 rounded-lg h-32 overflow-hidden transition-colors duration-300">
                {/* Satellite-style map background */}
                <div className="absolute inset-0 opacity-30">
                  <div className="w-full h-full bg-emerald-200 dark:bg-emerald-700 bg-opacity-50 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(5,150,105,0.1)_10px,rgba(5,150,105,0.1)_20px)]"></div>
                </div>
                
                {/* Map markers */}
                <div className="absolute top-6 left-8 w-5 h-5 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300">1</div>
                <div className="absolute top-4 right-8 w-5 h-5 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300">2</div>
                <div className="absolute bottom-8 left-1/3 w-5 h-5 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300">3</div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-1 mt-2 text-center">
                <div>
                  <div className="text-base font-bold text-emerald-700 dark:text-emerald-300">485</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Ton Tertinggi</div>
                </div>
                <div>
                  <div className="text-base font-bold text-emerald-700 dark:text-emerald-300">118%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Efisiensi Puncak</div>
                </div>
                <div>
                  <div className="text-base font-bold text-emerald-700 dark:text-emerald-300">1,397</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Total Produksi</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Plantation Area Map */}
          <Card className="bg-gray-900 dark:bg-gray-800 text-white border-gray-700 dark:border-gray-600 transition-colors duration-300">
            <CardHeader className="pb-1 pt-3 px-3">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-emerald-400" />
                <CardTitle className="text-emerald-400 text-xs">Peta Area Kebun Sawit</CardTitle>
              </div>
              <CardDescription className="text-gray-400 dark:text-gray-300 text-xs transition-colors duration-300">Status produksi real-time berdasarkan sektor</CardDescription>
            </CardHeader>
            <CardContent className="pt-0 px-3 pb-3">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 rounded-lg h-32 overflow-hidden transition-colors duration-300">
                {/* Satellite imagery style background */}
                <div className="absolute inset-0 opacity-50">
                  <div className="w-full h-full bg-green-900 bg-opacity-30 bg-[repeating-radial-gradient(circle_at_30%_30%,rgba(6,95,70,0.3),rgba(6,95,70,0.3)_4px,transparent_4px,transparent_60px)]"></div>
                </div>
                
                {/* Production status markers */}
                <div className="absolute top-3 left-6 w-3 h-3 bg-emerald-500 rounded-full border border-white"></div>
                <div className="absolute top-4 right-8 w-3 h-3 bg-red-500 rounded-full border border-white flex items-center justify-center">
                  <AlertTriangle className="h-2 w-2 text-white" />
                </div>
                <div className="absolute top-8 left-1/2 w-3 h-3 bg-yellow-500 rounded-full border border-white"></div>
                <div className="absolute bottom-6 left-6 w-3 h-3 bg-emerald-500 rounded-full border border-white"></div>
                <div className="absolute bottom-4 right-6 w-3 h-3 bg-yellow-500 rounded-full border border-white"></div>
                <div className="absolute bottom-8 right-1/3 w-3 h-3 bg-red-500 rounded-full border border-white flex items-center justify-center">
                  <AlertTriangle className="h-2 w-2 text-white" />
                </div>
                <div className="absolute top-1/2 right-4 w-3 h-3 bg-emerald-500 rounded-full border border-white"></div>
              </div>
              
              {/* Legend */}
              <div className="flex justify-center gap-3 mt-2 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-emerald-400">Produksi Tinggi</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-yellow-400">Produksi Sedang</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-red-400">Produksi Rendah</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lowest Production Areas */}
          <Card className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-red-200 dark:border-red-800 transition-colors duration-300">
            <CardHeader className="pb-1 pt-3 px-3">
              <div className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-red-600 dark:text-red-400 rotate-180" />
                <CardTitle className="text-red-700 dark:text-red-300 text-xs transition-colors duration-300">Peta Spasial Top 3 Area Produksi Terkecil</CardTitle>
              </div>
              <CardDescription className="text-xs text-gray-600 dark:text-gray-300 transition-colors duration-300">Area yang memerlukan perhatian dan perbaikan segera</CardDescription>
            </CardHeader>
            <CardContent className="pt-0 px-3 pb-3">
              <div className="relative bg-gradient-to-br from-red-100 to-red-200 dark:from-red-800/30 dark:to-red-700/30 rounded-lg h-32 overflow-hidden transition-colors duration-300">
                {/* Map background */}
                <div className="absolute inset-0 opacity-30">
                  <div className="w-full h-full bg-red-200 dark:bg-red-700 bg-opacity-50 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(220,38,38,0.1)_10px,rgba(220,38,38,0.1)_20px)]"></div>
                </div>
                
                {/* Warning markers */}
                <div className="absolute top-8 left-8 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border border-white">
                  <AlertTriangle className="h-3 w-3 text-white" />
                </div>
                <div className="absolute top-10 right-8 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border border-white">
                  <AlertTriangle className="h-3 w-3 text-white" />
                </div>
                <div className="absolute bottom-6 left-1/3 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border border-white">
                  <AlertTriangle className="h-3 w-3 text-white" />
                </div>
                
                {/* Tooltip example */}
                <div className="absolute top-4 right-6 bg-gray-800 dark:bg-gray-700 text-white p-1 rounded text-xs border border-gray-600 dark:border-gray-500 transition-colors duration-300">
                  <div className="font-semibold">Blok F-11</div>
                  <div>205 ton • 72% dari target</div>
                  <div className="text-red-400">Perlu Perhatian Segera</div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-1 mt-2 text-center">
                <div>
                  <div className="text-base font-bold text-red-700 dark:text-red-300">185</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Ton Terendah</div>
                </div>
                <div>
                  <div className="text-base font-bold text-red-700 dark:text-red-300">68%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Efisiensi Minimum</div>
                </div>
                <div>
                  <div className="text-base font-bold text-red-700 dark:text-red-300">615</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">Total Produksi</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Production Trend Chart */}
          <Card className="bg-gray-900 dark:bg-gray-800 text-white border-gray-700 dark:border-gray-600 transition-colors duration-300">
            <CardHeader className="pb-1 pt-3 px-3">
              <div className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-emerald-400" />
                <CardTitle className="text-emerald-400 text-xs">Tren Produksi 2024</CardTitle>
              </div>
              <CardDescription className="text-gray-400 dark:text-gray-300 text-xs transition-colors duration-300">Produksi kelapa sawit bulanan vs target (dalam ton)</CardDescription>
            </CardHeader>
            <CardContent className="pt-0 px-3 pb-3">
              <div className="relative h-32">
                {/* Chart background grid */}
                <div className="absolute inset-0">
                  {/* Horizontal grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pt-2 pb-6">
                    <div className="h-px bg-gray-600 opacity-30"></div>
                    <div className="h-px bg-gray-600 opacity-30"></div>
                    <div className="h-px bg-gray-600 opacity-30"></div>
                    <div className="h-px bg-gray-600 opacity-30"></div>
                    <div className="h-px bg-gray-600 opacity-30"></div>
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
                      className="transition-all duration-300 hover:stroke-width-3"
                    />
                    {/* Actual production line (green) - steeper growth curve */}
                    <polyline
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2.5"
                      points="0,72 30,68 60,60 90,52 120,40 150,32 180,26 210,20 240,16 270,12 300,10 330,8"
                      vectorEffect="non-scaling-stroke"
                      className="transition-all duration-300 hover:stroke-width-4"
                    />
                    
                    {/* Data points for actual production with hover effects */}
                    <g className="data-points">
                      <circle cx="0" cy="72" r="2" fill="#10b981" className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer">
                        <title>Jan: 800 ton</title>
                      </circle>
                      <circle cx="30" cy="68" r="2" fill="#10b981" className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer">
                        <title>Feb: 950 ton</title>
                      </circle>
                      <circle cx="60" cy="60" r="2" fill="#10b981" className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer">
                        <title>Mar: 1200 ton</title>
                      </circle>
                      <circle cx="90" cy="52" r="2" fill="#10b981" className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer">
                        <title>Apr: 1450 ton</title>
                      </circle>
                      <circle cx="120" cy="40" r="2" fill="#10b981" className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer">
                        <title>Mei: 1800 ton</title>
                      </circle>
                      <circle cx="150" cy="32" r="2" fill="#10b981" className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer">
                        <title>Jun: 2100 ton</title>
                      </circle>
                      <circle cx="180" cy="26" r="2" fill="#10b981" className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer">
                        <title>Jul: 2350 ton</title>
                      </circle>
                      <circle cx="210" cy="20" r="2" fill="#10b981" className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer">
                        <title>Agu: 2600 ton</title>
                      </circle>
                      <circle cx="240" cy="16" r="2" fill="#10b981" className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer">
                        <title>Sep: 2800 ton</title>
                      </circle>
                      <circle cx="270" cy="12" r="2" fill="#10b981" className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer">
                        <title>Okt: 2950 ton</title>
                      </circle>
                      <circle cx="300" cy="10" r="2" fill="#10b981" className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer">
                        <title>Nov: 3050 ton</title>
                      </circle>
                      <circle cx="330" cy="8" r="2" fill="#10b981" className="transition-all duration-200 hover:r-4 hover:fill-emerald-400 cursor-pointer">
                        <title>Des: 3150 ton</title>
                      </circle>
                    </g>
                    
                    {/* Data points for target line with hover effects */}
                    <g className="target-points">
                      <circle cx="0" cy="64" r="1.5" fill="#f59e0b" opacity="0.7" className="transition-all duration-200 hover:r-3 hover:opacity-100 cursor-pointer">
                        <title>Target Jan: 1000 ton</title>
                      </circle>
                      <circle cx="60" cy="60" r="1.5" fill="#f59e0b" opacity="0.7" className="transition-all duration-200 hover:r-3 hover:opacity-100 cursor-pointer">
                        <title>Target Mar: 1200 ton</title>
                      </circle>
                      <circle cx="120" cy="56" r="1.5" fill="#f59e0b" opacity="0.7" className="transition-all duration-200 hover:r-3 hover:opacity-100 cursor-pointer">
                        <title>Target Mei: 1400 ton</title>
                      </circle>
                      <circle cx="180" cy="52" r="1.5" fill="#f59e0b" opacity="0.7" className="transition-all duration-200 hover:r-3 hover:opacity-100 cursor-pointer">
                        <title>Target Jul: 1600 ton</title>
                      </circle>
                      <circle cx="240" cy="48" r="1.5" fill="#f59e0b" opacity="0.7" className="transition-all duration-200 hover:r-3 hover:opacity-100 cursor-pointer">
                        <title>Target Sep: 1800 ton</title>
                      </circle>
                      <circle cx="300" cy="44" r="1.5" fill="#f59e0b" opacity="0.7" className="transition-all duration-200 hover:r-3 hover:opacity-100 cursor-pointer">
                        <title>Target Nov: 2000 ton</title>
                      </circle>
                      <circle cx="330" cy="42" r="1.5" fill="#f59e0b" opacity="0.7" className="transition-all duration-200 hover:r-3 hover:opacity-100 cursor-pointer">
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
              
              {/* Legend */}
              <div className="flex justify-center gap-3 mt-2 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-0.5 bg-emerald-500"></div>
                  <span className="text-emerald-400">Produksi Aktual</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-0.5 bg-yellow-500 border-dashed border border-yellow-500"></div>
                  <span className="text-yellow-400">Target</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
