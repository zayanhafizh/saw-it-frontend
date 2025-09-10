import { EstimateTable } from "@/components/estimate/estimate-table"
import { EstimateFilters } from "@/components/estimate/estimate-filters"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, TrendingUp, Calendar, MapPin, Target, AlertCircle } from "lucide-react"

export default function EstimatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                Estimasi Produksi
              </h1>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
                Perkiraan dan estimasi produksi terperinci berdasarkan blok, bulan, dan tahun dengan akurasi bertenaga
                AI
              </p>
            </div>
            <Badge className="self-center md:self-start bg-emerald-100 text-emerald-800 border-emerald-200 px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              Data Waktu Nyata
            </Badge>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-emerald-50 to-emerald-100 hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-emerald-700 flex items-center gap-2 text-sm md:text-base">
                <div className="p-2 bg-emerald-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Calculator className="h-3 w-3 md:h-4 md:w-4 text-white" />
                </div>
                Total Estimasi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl md:text-2xl font-bold text-gray-900">156</div>
              <p className="text-xs md:text-sm text-gray-600">Perkiraan aktif</p>
              <div className="mt-2 flex items-center gap-1 text-emerald-600">
                <TrendingUp className="h-3 w-3" />
                <span className="text-xs font-medium">+8 baru minggu ini</span>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-teal-50 to-teal-100 hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-teal-700 flex items-center gap-2 text-sm md:text-base">
                <div className="p-2 bg-teal-600 rounded-lg group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-white" />
                </div>
                Akurasi Rata-rata
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl md:text-2xl font-bold text-gray-900">94.2%</div>
              <p className="text-xs md:text-sm text-gray-600">6 bulan terakhir</p>
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-teal-600 h-2 rounded-full" style={{ width: "94.2%" }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-cyan-50 to-cyan-100 hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-cyan-700 flex items-center gap-2 text-sm md:text-base">
                <div className="p-2 bg-cyan-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Calendar className="h-3 w-3 md:h-4 md:w-4 text-white" />
                </div>
                Pembaruan Berikutnya
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl md:text-2xl font-bold text-gray-900">3 hari</div>
              <p className="text-xs md:text-sm text-gray-600">Refresh terjadwal</p>
              <div className="mt-2 flex items-center gap-1 text-cyan-600">
                <AlertCircle className="h-3 w-3" />
                <span className="text-xs font-medium">Auto-update diaktifkan</span>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-indigo-50 to-indigo-100 hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-indigo-700 flex items-center gap-2 text-sm md:text-base">
                <div className="p-2 bg-indigo-600 rounded-lg group-hover:scale-110 transition-transform">
                  <MapPin className="h-3 w-3 md:h-4 md:w-4 text-white" />
                </div>
                Cakupan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl md:text-2xl font-bold text-gray-900">24/24</div>
              <p className="text-xs md:text-sm text-gray-600">Blok tercakup</p>
              <div className="mt-2">
                <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">100% Lengkap</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Table */}
        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="border-b border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-lg md:text-xl text-emerald-700 flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Estimasi Produksi
                </CardTitle>
                <CardDescription className="text-sm mt-1">
                  Filter dan cari melalui estimasi produksi berdasarkan berbagai kriteria
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  Terakhir diperbarui: 2 jam lalu
                </Badge>
                <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 text-xs">Didukung AI</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 md:p-6 space-y-6">
            <div className="bg-gray-50/50 rounded-lg p-4">
              <EstimateFilters />
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <EstimateTable />
            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-teal-50">
            <CardHeader>
              <CardTitle className="text-emerald-700 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Wawasan Perkiraan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Pertumbuhan yang Diharapkan:</span>
                  <span className="text-sm font-bold text-emerald-600">+12.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Musim Puncak:</span>
                  <span className="text-sm font-bold text-gray-900">Maret - Mei</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Tingkat Risiko:</span>
                  <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">Rendah</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-cyan-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="text-cyan-700 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Metrik Kinerja
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Kepercayaan Prediksi:</span>
                  <span className="text-sm font-bold text-cyan-600">95.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Kelengkapan Data:</span>
                  <span className="text-sm font-bold text-gray-900">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Versi Model:</span>
                  <Badge variant="outline" className="text-xs">
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
