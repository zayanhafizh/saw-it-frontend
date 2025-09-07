import { EstimateTable } from "@/components/estimate/estimate-table"
import { EstimateFilters } from "@/components/estimate/estimate-filters"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, TrendingUp, Calendar, MapPin } from "lucide-react"

export default function EstimatePage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Production Estimates</h1>
        <p className="text-gray-600">Detailed production forecasts and estimates by block, month, and year</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="border-emerald-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-emerald-700 flex items-center gap-2 text-sm">
              <Calculator className="h-4 w-4" />
              Total Estimates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">156</div>
            <p className="text-xs text-gray-600">Active forecasts</p>
          </CardContent>
        </Card>

        <Card className="border-emerald-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-emerald-700 flex items-center gap-2 text-sm">
              <TrendingUp className="h-4 w-4" />
              Avg. Accuracy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">94.2%</div>
            <p className="text-xs text-gray-600">Last 6 months</p>
          </CardContent>
        </Card>

        <Card className="border-emerald-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-emerald-700 flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4" />
              Next Update
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">3 days</div>
            <p className="text-xs text-gray-600">Scheduled refresh</p>
          </CardContent>
        </Card>

        <Card className="border-emerald-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-emerald-700 flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              Coverage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">24/24</div>
            <p className="text-xs text-gray-600">Blocks covered</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Table */}
      <Card className="border-emerald-200">
        <CardHeader>
          <CardTitle className="text-emerald-700">Production Estimates</CardTitle>
          <CardDescription>Filter and search through production estimates by various criteria</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <EstimateFilters />
          <EstimateTable />
        </CardContent>
      </Card>
    </div>
  )
}
