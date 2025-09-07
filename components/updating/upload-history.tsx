import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { History, Download, Eye, MoreHorizontal } from "lucide-react"

const uploadHistory = [
  {
    id: 1,
    fileName: "production_data_nov_2024.csv",
    dataType: "Production Data",
    uploadDate: "2024-12-01 14:30",
    status: "success",
    records: 1250,
    size: "2.4 MB",
    uploadedBy: "Admin User",
  },
  {
    id: 2,
    fileName: "harvest_records_oct_2024.xlsx",
    dataType: "Harvest Records",
    uploadDate: "2024-11-28 09:15",
    status: "success",
    records: 890,
    size: "1.8 MB",
    uploadedBy: "Field Manager",
  },
  {
    id: 3,
    fileName: "maintenance_logs_q4_2024.json",
    dataType: "Maintenance Logs",
    uploadDate: "2024-11-25 16:45",
    status: "processing",
    records: 456,
    size: "0.9 MB",
    uploadedBy: "Admin User",
  },
  {
    id: 4,
    fileName: "weather_data_nov_2024.csv",
    dataType: "Weather Data",
    uploadDate: "2024-11-22 11:20",
    status: "error",
    records: 0,
    size: "3.1 MB",
    uploadedBy: "Data Analyst",
  },
  {
    id: 5,
    fileName: "production_data_oct_2024.csv",
    dataType: "Production Data",
    uploadDate: "2024-11-01 08:30",
    status: "success",
    records: 1180,
    size: "2.2 MB",
    uploadedBy: "Admin User",
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "success":
      return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">Success</Badge>
    case "processing":
      return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Processing</Badge>
    case "error":
      return <Badge className="bg-red-100 text-red-800 border-red-200">Error</Badge>
    default:
      return <Badge className="bg-gray-100 text-gray-800 border-gray-200">Unknown</Badge>
  }
}

export function UploadHistory() {
  return (
    <Card className="border-emerald-200">
      <CardHeader>
        <CardTitle className="text-emerald-700 flex items-center gap-2">
          <History className="h-5 w-5" />
          Upload History
        </CardTitle>
        <CardDescription>Recent data uploads and their processing status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="border border-emerald-200 rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-emerald-50">
                <TableHead className="font-semibold text-emerald-800">File Name</TableHead>
                <TableHead className="font-semibold text-emerald-800">Data Type</TableHead>
                <TableHead className="font-semibold text-emerald-800">Upload Date</TableHead>
                <TableHead className="font-semibold text-emerald-800">Status</TableHead>
                <TableHead className="font-semibold text-emerald-800">Records</TableHead>
                <TableHead className="font-semibold text-emerald-800">Size</TableHead>
                <TableHead className="font-semibold text-emerald-800">Uploaded By</TableHead>
                <TableHead className="font-semibold text-emerald-800">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {uploadHistory.map((upload) => (
                <TableRow key={upload.id} className="hover:bg-emerald-50/50">
                  <TableCell className="font-medium">{upload.fileName}</TableCell>
                  <TableCell>{upload.dataType}</TableCell>
                  <TableCell>{upload.uploadDate}</TableCell>
                  <TableCell>{getStatusBadge(upload.status)}</TableCell>
                  <TableCell>{upload.records.toLocaleString()}</TableCell>
                  <TableCell>{upload.size}</TableCell>
                  <TableCell>{upload.uploadedBy}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-emerald-100">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 hover:bg-emerald-100"
                        disabled={upload.status !== "success"}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-emerald-100">
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
