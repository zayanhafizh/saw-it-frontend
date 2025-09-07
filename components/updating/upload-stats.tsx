import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Database, CheckCircle, Clock } from "lucide-react"

export function UploadStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <Card className="border-emerald-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-emerald-700 flex items-center gap-2 text-sm">
            <Upload className="h-4 w-4" />
            Total Uploads
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">247</div>
          <p className="text-xs text-gray-600">All time</p>
        </CardContent>
      </Card>

      <Card className="border-emerald-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-emerald-700 flex items-center gap-2 text-sm">
            <Database className="h-4 w-4" />
            Data Points
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">15.2K</div>
          <p className="text-xs text-gray-600">Records processed</p>
        </CardContent>
      </Card>

      <Card className="border-emerald-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-emerald-700 flex items-center gap-2 text-sm">
            <CheckCircle className="h-4 w-4" />
            Success Rate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">98.5%</div>
          <p className="text-xs text-gray-600">Upload success</p>
        </CardContent>
      </Card>

      <Card className="border-emerald-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-emerald-700 flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4" />
            Last Upload
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900">2h ago</div>
          <p className="text-xs text-gray-600">Block A-12 data</p>
        </CardContent>
      </Card>
    </div>
  )
}
