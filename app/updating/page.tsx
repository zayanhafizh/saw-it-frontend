import { UploadArea } from "@/components/updating/upload-area"
import { UploadHistory } from "@/components/updating/upload-history"
import { UploadStats } from "@/components/updating/upload-stats"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, AlertCircle, Upload, Shield, Clock } from "lucide-react"

export default function UpdatingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                Manajemen Data
              </h1>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
                Unggah dan kelola data produksi untuk peramalan dan analisis yang akurat dengan keamanan tingkat
                perusahaan
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Badge className="self-center md:self-start bg-emerald-100 text-emerald-800 border-emerald-200 px-4 py-2">
                <Upload className="w-4 h-4 mr-2" />
                Pemrosesan Real-time
              </Badge>
              <Badge variant="outline" className="self-center md:self-start px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Unggahan Aman
              </Badge>
            </div>
          </div>
        </div>

        {/* Upload Stats */}
        <div className="mb-6 md:mb-8">
          <UploadStats />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Upload Area - Takes 2 columns on xl screens */}
          <div className="xl:col-span-2">
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <UploadArea />
            </Card>
          </div>

          {/* Guidelines */}
          <div className="xl:col-span-1">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-teal-50 h-full">
              <CardHeader className="border-b border-emerald-100">
                <CardTitle className="text-emerald-700 flex items-center gap-2">
                  <div className="p-2 bg-emerald-600 rounded-lg">
                    <FileText className="h-4 w-4 text-white" />
                  </div>
                  Panduan Unggahan
                </CardTitle>
                <CardDescription>Informasi penting untuk unggahan data</CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 space-y-6">
                <div className="space-y-4">
                  <div className="bg-white/70 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-emerald-600" />
                      Format yang Didukung
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center justify-between p-2 bg-emerald-50 rounded-md">
                        <span className="text-sm font-medium text-gray-700">File CSV</span>
                        <Badge variant="outline" className="text-xs">
                          .csv
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-emerald-50 rounded-md">
                        <span className="text-sm font-medium text-gray-700">File Excel</span>
                        <Badge variant="outline" className="text-xs">
                          .xlsx, .xls
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-emerald-50 rounded-md">
                        <span className="text-sm font-medium text-gray-700">File JSON</span>
                        <Badge variant="outline" className="text-xs">
                          .json
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/70 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-teal-600" />
                      Kolom yang Diperlukan
                    </h4>
                    <div className="space-y-2">
                      {["ID Blok", "Tanggal", "Produksi (ton)", "Area (hektar)"].map((column, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-teal-50 rounded-md">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-700">{column}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex gap-3">
                      <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-yellow-800 mb-1">Pemberitahuan Kualitas Data</p>
                        <p className="text-xs text-yellow-700 leading-relaxed">
                          Pastikan kualitas dan akurasi data sebelum mengunggah. Data yang tidak valid atau tidak
                          konsisten dapat secara signifikan mempengaruhi akurasi prediksi AI dan kinerja sistem.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex gap-3">
                      <Shield className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-blue-800 mb-1">Keamanan & Privasi</p>
                        <p className="text-xs text-blue-700 leading-relaxed">
                          Semua unggahan dienkripsi dan diproses dengan aman. Data Anda dilindungi dengan
                          langkah-langkah keamanan tingkat perusahaan.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Upload History */}
        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="border-b border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-lg md:text-xl text-emerald-700 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Riwayat Unggahan
                </CardTitle>
                <CardDescription className="text-sm mt-1">Lacak dan kelola unggahan data sebelumnya</CardDescription>
              </div>
              <Badge variant="outline" className="self-center md:self-start text-xs">
                Terakhir diperbarui: 5 menit lalu
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <UploadHistory />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
