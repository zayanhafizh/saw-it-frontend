import { UploadArea } from "@/components/updating/upload-area"
import { UploadHistory } from "@/components/updating/upload-history"
import { UploadStats } from "@/components/updating/upload-stats"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, AlertCircle } from "lucide-react"

export default function UpdatingPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Data Management</h1>
        <p className="text-gray-600">Upload and manage production data for accurate forecasting and analysis</p>
      </div>

      {/* Upload Stats */}
      <UploadStats />

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Upload Area - Takes 2 columns */}
        <div className="lg:col-span-2">
          <UploadArea />
        </div>

        {/* Guidelines */}
        <div>
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle className="text-emerald-700 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Upload Guidelines
              </CardTitle>
              <CardDescription>Important information for data uploads</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Supported Formats</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• CSV files (.csv)</li>
                  <li>• Excel files (.xlsx, .xls)</li>
                  <li>• JSON files (.json)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Required Columns</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Block ID</li>
                  <li>• Date</li>
                  <li>• Production (tons)</li>
                  <li>• Area (hectares)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <div className="flex gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-yellow-800">Important</p>
                    <p className="text-xs text-yellow-700 mt-1">
                      Ensure data quality before upload. Invalid data may affect prediction accuracy.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Upload History */}
      <UploadHistory />
    </div>
  )
}
