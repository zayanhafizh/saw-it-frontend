import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, MapPin, Brain, Zap, Shield, Clock, Users } from "lucide-react"
import Link from "next/link"
import { ProductionChart } from "@/components/dashboard/production-chart"
import { TopProducersLeaderboard } from "@/components/dashboard/top-producers-leaderboard"
import { LowestProducersLeaderboard } from "@/components/dashboard/lowest-producers-leaderboard"
import { PlantationMap } from "@/components/dashboard/plantation-map"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-800 dark:via-teal-800 dark:to-cyan-800 text-white transition-colors duration-300">
        <div className="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
                <Zap className="w-3 h-3 mr-1" />
                AI-Powered Analytics
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Welcome to <span className="bg-gradient-to-r from-emerald-200 to-cyan-200 bg-clip-text text-transparent">Saw-It</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-emerald-100 mb-6 max-w-3xl mx-auto leading-relaxed">
                Comprehensive palm oil plantation management with cutting-edge AI insights and real-time monitoring
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 dark:bg-gray-800 dark:text-emerald-400 dark:hover:bg-gray-700 font-semibold px-8 transition-colors duration-200">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 dark:border-gray-300 dark:text-gray-300 dark:hover:bg-white/5 font-semibold px-8 transition-colors duration-200">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/3 -left-8 w-24 h-24 bg-emerald-300/20 rounded-full blur-lg"></div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-cyan-300/20 rounded-full blur-lg"></div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-7xl mx-auto">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-emerald-700 dark:text-emerald-300 flex items-center gap-2 text-sm md:text-base">
                <div className="p-2 bg-emerald-600 dark:bg-emerald-500 rounded-lg">
                  <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                Production Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">2,450</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">tons this month</p>
              <div className="mt-2 flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                <TrendingUp className="h-3 w-3" />
                <span className="text-xs font-medium">+12.5% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-teal-700 dark:text-teal-300 flex items-center gap-2 text-sm md:text-base">
                <div className="p-2 bg-teal-600 dark:bg-teal-500 rounded-lg">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                Active Areas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">24</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">blocks monitored</p>
              <div className="mt-2 flex items-center gap-1 text-teal-600 dark:text-teal-400">
                <Shield className="h-3 w-3" />
                <span className="text-xs font-medium">100% coverage</span>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-cyan-700 dark:text-cyan-300 flex items-center gap-2 text-sm md:text-base">
                <div className="p-2 bg-cyan-600 dark:bg-cyan-500 rounded-lg">
                  <Brain className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                AI Predictions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">95.2%</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">accuracy rate</p>
              <div className="mt-2 flex items-center gap-1 text-cyan-600 dark:text-cyan-400">
                <Zap className="h-3 w-3" />
                <span className="text-xs font-medium">Real-time processing</span>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-indigo-700 dark:text-indigo-300 flex items-center gap-2 text-sm md:text-base">
                <div className="p-2 bg-indigo-600 dark:bg-indigo-500 rounded-lg">
                  <Users className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                Team Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">98.5%</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">efficiency score</p>
              <div className="mt-2 flex items-center gap-1 text-indigo-600 dark:text-indigo-400">
                <Clock className="h-3 w-3" />
                <span className="text-xs font-medium">Updated 5 min ago</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Production Chart - Takes 2 columns on xl screens */}
          <div className="xl:col-span-2">
            <Card className="h-full border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
              <ProductionChart />
            </Card>
          </div>

          {/* Top Producers Leaderboard */}
          <div className="xl:col-span-1">
            <Card className="h-full border-0 shadow-lg bg-gradient-to-br from-white to-emerald-50 dark:from-gray-800 dark:to-emerald-900/20">
              <TopProducersLeaderboard />
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Plantation Map - Takes 2 columns on xl screens */}
          <div className="xl:col-span-2">
            <Card className="h-full border-0 shadow-lg bg-gradient-to-br from-white to-teal-50 dark:from-gray-800 dark:to-teal-900/20">
              <PlantationMap />
            </Card>
          </div>

          {/* Lowest Producers Leaderboard */}
          <div className="xl:col-span-1">
            <Card className="h-full border-0 shadow-lg bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-orange-900/20">
              <LowestProducersLeaderboard />
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Quick Actions</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Access key features and tools to manage your plantation efficiently</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <Link href="/estimate" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 hover:scale-105 group-hover:shadow-emerald-200/50 dark:group-hover:shadow-emerald-800/50">
                <CardHeader>
                  <CardTitle className="text-lg text-emerald-700 dark:text-emerald-300 group-hover:text-emerald-800 dark:group-hover:text-emerald-200 transition-colors">
                    Production Estimates
                  </CardTitle>
                  <CardDescription className="text-sm dark:text-gray-400">
                    View and analyze production forecasts by block and time period
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-emerald-200 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 dark:hover:bg-emerald-600 dark:hover:text-white dark:hover:border-emerald-600 transition-all duration-200"
                  >
                    View Estimates <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/palm-ai" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 hover:scale-105 group-hover:shadow-cyan-200/50 dark:group-hover:shadow-cyan-800/50">
                <CardHeader>
                  <CardTitle className="text-lg text-cyan-700 dark:text-cyan-300 group-hover:text-cyan-800 dark:group-hover:text-cyan-200 transition-colors">
                    Palm-AI Assistant
                  </CardTitle>
                  <CardDescription className="text-sm dark:text-gray-400">
                    Get AI-powered insights and recommendations for your plantation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-cyan-200 dark:border-cyan-700 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 dark:hover:bg-cyan-600 dark:hover:text-white dark:hover:border-cyan-600 transition-all duration-200"
                  >
                    Chat with AI <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/updating" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 hover:scale-105 group-hover:shadow-teal-200/50 dark:group-hover:shadow-teal-800/50">
                <CardHeader>
                  <CardTitle className="text-lg text-teal-700 dark:text-teal-300 group-hover:text-teal-800 dark:group-hover:text-teal-200 transition-colors">
                    Data Updates
                  </CardTitle>
                  <CardDescription className="text-sm dark:text-gray-400">
                    Upload and manage production data for accurate forecasting
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300 hover:bg-teal-600 hover:text-white hover:border-teal-600 dark:hover:bg-teal-600 dark:hover:text-white dark:hover:border-teal-600 transition-all duration-200"
                  >
                    Upload Data <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-lg text-indigo-700 dark:text-indigo-300">Quick Stats</CardTitle>
                <CardDescription className="text-sm dark:text-gray-400">Real-time plantation performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Yield Rate:</span>
                    <span className="text-sm font-bold text-indigo-700 dark:text-indigo-300">18.5 tons/ha</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Efficiency:</span>
                    <span className="text-sm font-bold text-indigo-700 dark:text-indigo-300">92%</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                    <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Status:</span>
                    <Badge className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700">
                      Optimal
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
