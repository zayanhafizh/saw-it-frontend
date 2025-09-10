import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { History, Download, Eye, MoreHorizontal } from "lucide-react"

const uploadHistory = [
  {
    id: 1,
    fileName: "production_data_nov_2024.csv",
    dataType: "Data Produksi",
    uploadDate: "2024-12-01 14:30",
    status: "success",
    records: 1250,
    size: "2.4 MB",
    uploadedBy: "Pengguna Admin",
  },
  {
    id: 2,
    fileName: "harvest_records_oct_2024.xlsx",
    dataType: "Catatan Panen",
    uploadDate: "2024-11-28 09:15",
    status: "success",
    records: 890,
    size: "1.8 MB",
    uploadedBy: "Manajer Lapangan",
  },
  {
    id: 3,
    fileName: "maintenance_logs_q4_2024.json",
    dataType: "Log Pemeliharaan",
    uploadDate: "2024-11-25 16:45",
    status: "processing",
    records: 456,
    size: "0.9 MB",
    uploadedBy: "Pengguna Admin",
  },
  {
    id: 4,
    fileName: "weather_data_nov_2024.csv",
    dataType: "Data Cuaca",
    uploadDate: "2024-11-22 11:20",
    status: "error",
    records: 0,
    size: "3.1 MB",
    uploadedBy: "Analis Data",
  },
  {
    id: 5,
    fileName: "production_data_oct_2024.csv",
    dataType: "Data Produksi",
    uploadDate: "2024-11-01 08:30",
    status: "success",
    records: 1180,
    size: "2.2 MB",
    uploadedBy: "Pengguna Admin",
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "success":
      return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-700">Berhasil</Badge>
    case "processing":
      return <Badge className="bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-700">Memproses</Badge>
    case "error":
      return <Badge className="bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-700">Error</Badge>
    default:
      return <Badge className="bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/30 dark:text-gray-400 dark:border-gray-700">Tidak Diketahui</Badge>
  }
}

export function UploadHistory() {
  return (
    <Card className="border-emerald-200 dark:border-emerald-700 dark:bg-gray-800/50">
      <CardHeader>
        <CardTitle className="text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
          <History className="h-5 w-5" />
          Riwayat Unggahan
        </CardTitle>
        <CardDescription className="dark:text-gray-400">Unggahan data terbaru dan status pemrosesannya</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="border border-emerald-200 dark:border-emerald-700 rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-emerald-50 dark:bg-emerald-900/20">
                <TableHead className="font-semibold text-emerald-800 dark:text-emerald-400">Nama File</TableHead>
                <TableHead className="font-semibold text-emerald-800 dark:text-emerald-400">Jenis Data</TableHead>
                <TableHead className="font-semibold text-emerald-800 dark:text-emerald-400">Tanggal Unggah</TableHead>
                <TableHead className="font-semibold text-emerald-800 dark:text-emerald-400">Status</TableHead>
                <TableHead className="font-semibold text-emerald-800 dark:text-emerald-400">Catatan</TableHead>
                <TableHead className="font-semibold text-emerald-800 dark:text-emerald-400">Ukuran</TableHead>
                <TableHead className="font-semibold text-emerald-800 dark:text-emerald-400">Diunggah Oleh</TableHead>
                <TableHead className="font-semibold text-emerald-800 dark:text-emerald-400">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {uploadHistory.map((upload) => (
                <TableRow key={upload.id} className="hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10">
                  <TableCell className="font-medium dark:text-gray-300">{upload.fileName}</TableCell>
                  <TableCell className="dark:text-gray-300">{upload.dataType}</TableCell>
                  <TableCell className="dark:text-gray-300">{upload.uploadDate}</TableCell>
                  <TableCell>{getStatusBadge(upload.status)}</TableCell>
                  <TableCell className="dark:text-gray-300">{upload.records.toLocaleString()}</TableCell>
                  <TableCell className="dark:text-gray-300">{upload.size}</TableCell>
                  <TableCell className="dark:text-gray-300">{upload.uploadedBy}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-emerald-100 dark:hover:bg-emerald-900/20 dark:text-gray-300">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 hover:bg-emerald-100 dark:hover:bg-emerald-900/20 dark:text-gray-300"
                        disabled={upload.status !== "success"}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-emerald-100 dark:hover:bg-emerald-900/20 dark:text-gray-300">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
