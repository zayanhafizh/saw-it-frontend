import { ProductionChart } from "@/components/dashboard/production-chart"
import { PlantationMap } from "@/components/dashboard/plantation-map"
import { NDVIInfo } from "@/components/dashboard/ndvi-info"
import { SpatialMapTop } from "@/components/dashboard/spatial-map-top"
import { SpatialMapBottom } from "@/components/dashboard/spatial-map-bottom"
import { DateFilter } from "@/components/dashboard/date-filter"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        {/* Dashboard Layout - 5 sections as per wireframe */}
        <div className="space-y-3">
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Perkebunan</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Monitoring dan analisis produksi kelapa sawit real-time
              </p>
            </div>
            <DateFilter />
          </div>

          {/* Top section - NDVI Information (full width) */}
          <div className="w-full">
            <NDVIInfo />
          </div>

          {/* Middle row - Top production areas and Interactive plantation map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 h-[320px]">
            <SpatialMapTop />
            <PlantationMap />
          </div>

          {/* Bottom row - Low production areas and Production chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 h-[320px]">
            <SpatialMapBottom />
            <ProductionChart />
          </div>
        </div>
      </div>
    </div>
  )
}
