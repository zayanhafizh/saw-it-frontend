import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Database, CheckCircle, Clock } from "lucide-react"

export function UploadStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <Card className="border-emerald-200 dark:border-emerald-700 dark:bg-gray-800/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-emerald-700 dark:text-emerald-400 flex items-center gap-2 text-sm">
            <Upload className="h-4 w-4" />
            Total Unggahan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">247</div>
          <p className="text-xs text-gray-600 dark:text-gray-400">Sepanjang waktu</p>
        </CardContent>
      </Card>

      <Card className="border-emerald-200 dark:border-emerald-700 dark:bg-gray-800/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-emerald-700 dark:text-emerald-400 flex items-center gap-2 text-sm">
            <Database className="h-4 w-4" />
            Titik Data
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">15.2K</div>
          <p className="text-xs text-gray-600 dark:text-gray-400">Catatan diproses</p>
        </CardContent>
      </Card>

      <Card className="border-emerald-200 dark:border-emerald-700 dark:bg-gray-800/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-emerald-700 dark:text-emerald-400 flex items-center gap-2 text-sm">
            <CheckCircle className="h-4 w-4" />
            Tingkat Keberhasilan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">98.5%</div>
          <p className="text-xs text-gray-600 dark:text-gray-400">Keberhasilan unggah</p>
        </CardContent>
      </Card>

      <Card className="border-emerald-200 dark:border-emerald-700 dark:bg-gray-800/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-emerald-700 dark:text-emerald-400 flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4" />
            Unggahan Terakhir
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">2 jam lalu</div>
          <p className="text-xs text-gray-600 dark:text-gray-400">Data Blok A-12</p>
        </CardContent>
      </Card>
    </div>
  )
}
