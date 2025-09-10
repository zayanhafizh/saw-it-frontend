import { EstimateTable } from "@/components/estimate/estimate-table"
import { EstimateFilters } from "@/components/estimate/estimate-filters"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, TrendingUp, Calendar, MapPin, Target, AlertCircle } from "lucide-react"

export default function EstimatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                Estimasi Produksi
              </h1>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl">
                Perkiraan dan estimasi produksi terperinci berdasarkan blok, bulan, dan tahun dengan akurasi bertenaga
                AI
              </p>
            </div>
            <Badge className="self-center md:self-start bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-800 dark:text-emerald-200 dark:border-emerald-600 px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              Data Waktu Nyata
            </Badge>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-emerald-700 dark:text-emerald-400 flex items-center gap-2 text-sm md:text-base">
                <div className="p-2 bg-emerald-600 dark:bg-emerald-700 rounded-lg group-hover:scale-110 transition-transform">
                  <Calculator className="h-3 w-3 md:h-4 md:w-4 text-white" />
                </div>
                Total Estimasi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">156</div>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Perkiraan aktif</p>
              <div className="mt-2 flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                <TrendingUp className="h-3 w-3" />
                <span className="text-xs font-medium">+8 baru minggu ini</span>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-teal-700 dark:text-teal-400 flex items-center gap-2 text-sm md:text-base">
                <div className="p-2 bg-teal-600 dark:bg-teal-700 rounded-lg group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-white" />
                </div>
                Akurasi Rata-rata
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">94.2%</div>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">6 bulan terakhir</p>
              <div className="mt-2">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-teal-600 dark:bg-teal-500 h-2 rounded-full" style={{ width: "94.2%" }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-cyan-700 dark:text-cyan-400 flex items-center gap-2 text-sm md:text-base">
                <div className="p-2 bg-cyan-600 dark:bg-cyan-700 rounded-lg group-hover:scale-110 transition-transform">
                  <Calendar className="h-3 w-3 md:h-4 md:w-4 text-white" />
                </div>
                Pembaruan Berikutnya
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">3 hari</div>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Refresh terjadwal</p>
              <div className="mt-2 flex items-center gap-1 text-cyan-600 dark:text-cyan-400">
                <AlertCircle className="h-3 w-3" />
                <span className="text-xs font-medium">Auto-update diaktifkan</span>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-indigo-700 dark:text-indigo-400 flex items-center gap-2 text-sm md:text-base">
                <div className="p-2 bg-indigo-600 dark:bg-indigo-700 rounded-lg group-hover:scale-110 transition-transform">
                  <MapPin className="h-3 w-3 md:h-4 md:w-4 text-white" />
                </div>
                Cakupan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">24/24</div>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Blok tercakup</p>
              <div className="mt-2">
                <Badge className="bg-green-100 text-green-800 border-green-200 dark:bg-green-800 dark:text-green-200 dark:border-green-600 text-xs">100% Lengkap</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Table */}
        <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
          <CardHeader className="border-b border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-lg md:text-xl text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Estimasi Produksi
                </CardTitle>
                <CardDescription className="text-sm mt-1 dark:text-gray-300">
                  Filter dan cari melalui estimasi produksi berdasarkan berbagai kriteria
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs dark:border-gray-600 dark:text-gray-300">
                  Terakhir diperbarui: 2 jam lalu
                </Badge>
                <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-800 dark:text-emerald-200 dark:border-emerald-600 text-xs">Didukung AI</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 md:p-6 space-y-6">
            <div className="bg-gray-50/50 dark:bg-gray-700/50 rounded-lg p-4">
              <EstimateFilters />
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
              <EstimateTable />
            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
            <CardHeader>
              <CardTitle className="text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Wawasan Perkiraan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Pertumbuhan yang Diharapkan:</span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">+12.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Musim Puncak:</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-gray-100">Maret - Mei</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Tingkat Risiko:</span>
                  <Badge className="bg-green-100 text-green-800 border-green-200 dark:bg-green-800 dark:text-green-200 dark:border-green-600 text-xs">Rendah</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-cyan-50 to-indigo-50 dark:from-cyan-900/20 dark:to-indigo-900/20">
            <CardHeader>
              <CardTitle className="text-cyan-700 dark:text-cyan-400 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Metrik Kinerja
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Kepercayaan Prediksi:</span>
                  <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">95.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Kelengkapan Data:</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-gray-100">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Versi Model:</span>
                  <Badge variant="outline" className="text-xs dark:border-gray-600 dark:text-gray-300">
                    v2.1.0
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
