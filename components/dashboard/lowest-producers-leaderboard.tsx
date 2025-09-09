import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingDown, AlertTriangle } from "lucide-react"

const lowestProducers = [
  { rank: 1, area: "Block D-03", production: 185, percentage: 68, status: "needs-attention" },
  { rank: 2, area: "Block F-11", production: 205, percentage: 72, status: "below-target" },
  { rank: 3, area: "Block E-07", production: 225, percentage: 78, status: "below-target" },
]

export function LowestProducersLeaderboard() {
  return (
    <Card className="border-red-200">
      <CardHeader>
        <CardTitle className="text-red-700 flex items-center gap-2">
          <TrendingDown className="h-5 w-5" />
          Needs Attention
        </CardTitle>
        <CardDescription>Areas requiring immediate focus</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {lowestProducers.map((producer) => (
            <div
              key={producer.rank}
              className="flex items-center justify-between p-3 rounded-lg bg-red-50 border border-red-100"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-red-200">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{producer.area}</p>
                  <p className="text-sm text-gray-600">{producer.production} tons</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-red-700">{producer.percentage}%</p>
                <p className="text-xs text-gray-500">of target</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
