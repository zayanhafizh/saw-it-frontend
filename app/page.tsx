import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, MapPin, Brain } from "lucide-react"
import Link from "next/link"
import { ProductionChart } from "@/components/dashboard/production-chart"
import { TopProducersLeaderboard } from "@/components/dashboard/top-producers-leaderboard"
import { LowestProducersLeaderboard } from "@/components/dashboard/lowest-producers-leaderboard"
import { PlantationMap } from "@/components/dashboard/plantation-map"

export default function HomePage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Saw-It Dashboard</h1>
        <p className="text-gray-600">Comprehensive palm oil plantation management with AI-powered insights</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="border-emerald-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-emerald-700 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Production Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 mb-1">2,450 tons</div>
            <p className="text-sm text-gray-600">This month's production</p>
          </CardContent>
        </Card>

        <Card className="border-emerald-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-emerald-700 flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Active Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 mb-1">24 blocks</div>
            <p className="text-sm text-gray-600">Currently monitored</p>
          </CardContent>
        </Card>

        <Card className="border-emerald-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-emerald-700 flex items-center gap-2">
              <Brain className="h-5 w-5" />
              AI Predictions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 mb-1">95.2%</div>
            <p className="text-sm text-gray-600">Accuracy rate</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Production Chart - Takes 2 columns */}
        <div className="lg:col-span-2">
          <ProductionChart />
        </div>

        {/* Top Producers Leaderboard */}
        <div>
          <TopProducersLeaderboard />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Plantation Map - Takes 2 columns */}
        <div className="lg:col-span-2">
          <PlantationMap />
        </div>

        {/* Lowest Producers Leaderboard */}
        <div>
          <LowestProducersLeaderboard />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link href="/estimate">
          <Card className="hover:shadow-md transition-shadow cursor-pointer border-emerald-200 hover:border-emerald-300">
            <CardHeader>
              <CardTitle className="text-lg text-emerald-700">Production Estimates</CardTitle>
              <CardDescription>View and analyze production forecasts by block and time period</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
              >
                View Estimates <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </Link>

        <Link href="/palm-ai">
          <Card className="hover:shadow-md transition-shadow cursor-pointer border-emerald-200 hover:border-emerald-300">
            <CardHeader>
              <CardTitle className="text-lg text-emerald-700">Palm-AI Assistant</CardTitle>
              <CardDescription>Get AI-powered insights and recommendations for your plantation</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
              >
                Chat with AI <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </Link>

        <Link href="/updating">
          <Card className="hover:shadow-md transition-shadow cursor-pointer border-emerald-200 hover:border-emerald-300">
            <CardHeader>
              <CardTitle className="text-lg text-emerald-700">Data Updates</CardTitle>
              <CardDescription>Upload and manage production data for accurate forecasting</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
              >
                Upload Data <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </Link>

        <Card className="border-emerald-200">
          <CardHeader>
            <CardTitle className="text-lg text-emerald-700">Quick Stats</CardTitle>
            <CardDescription>Real-time plantation performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Yield Rate:</span>
                <span className="text-sm font-medium">18.5 tons/ha</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Efficiency:</span>
                <span className="text-sm font-medium">92%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
