import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Medal, Award } from "lucide-react"

const topProducers = [
  { rank: 1, area: "Block A-12", production: 485, percentage: 118, icon: Trophy, color: "text-yellow-600" },
  { rank: 2, area: "Block C-08", production: 467, percentage: 115, icon: Medal, color: "text-gray-500" },
  { rank: 3, area: "Block B-15", production: 445, percentage: 112, icon: Award, color: "text-amber-600" },
]

export function TopProducersLeaderboard() {
  return (
    <Card className="border-emerald-200">
      <CardHeader>
        <CardTitle className="text-emerald-700 flex items-center gap-2">
          <Trophy className="h-5 w-5" />
          Top Producers
        </CardTitle>
        <CardDescription>Highest production areas this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topProducers.map((producer) => {
            const IconComponent = producer.icon
            return (
              <div
                key={producer.rank}
                className="flex items-center justify-between p-3 rounded-lg bg-emerald-50 border border-emerald-100"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-emerald-200">
                    <IconComponent className={`h-4 w-4 ${producer.color}`} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{producer.area}</p>
                    <p className="text-sm text-gray-600">{producer.production} tons</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-emerald-700">{producer.percentage}%</p>
                  <p className="text-xs text-gray-500">of target</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
