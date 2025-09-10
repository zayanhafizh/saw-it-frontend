"use client"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"

const productionData = [
  { month: "Jan", production: 2100, target: 2200, year: 2024 },
  { month: "Feb", production: 2300, target: 2250, year: 2024 },
  { month: "Mar", production: 2450, target: 2300, year: 2024 },
  { month: "Apr", production: 2200, target: 2350, year: 2024 },
  { month: "Mei", production: 2600, target: 2400, year: 2024 },
  { month: "Jun", production: 2750, target: 2450, year: 2024 },
  { month: "Jul", production: 2850, target: 2500, year: 2024 },
  { month: "Ags", production: 2700, target: 2550, year: 2024 },
  { month: "Sep", production: 2900, target: 2600, year: 2024 },
  { month: "Okt", production: 3100, target: 2650, year: 2024 },
  { month: "Nov", production: 2950, target: 2700, year: 2024 },
  { month: "Des", production: 3200, target: 2750, year: 2024 },
]

// Custom tooltip sesuai screenshot
const CustomTooltip = ({ active, payload, label, coordinate }: any) => {
  if (!active || !payload || !payload.length) {
    return null
  }

  return (
    <div 
      className="bg-gray-800 rounded-lg p-3 text-white shadow-lg border border-gray-600"
      style={{
        zIndex: 9999,
        pointerEvents: 'none',
        minWidth: '140px',
        position: 'relative'
      }}
    >
      <p className="text-sm font-medium mb-2 text-center">{label}</p>
      {payload.map((entry: any, index: number) => (
        <div key={index} className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-gray-300">{entry.name}</span>
          </div>
          <span className="font-bold text-white ml-4">
            {entry.value?.toLocaleString('id-ID')}
          </span>
        </div>
      ))}
    </div>
  )
}

export function ProductionChart() {
  return (
    <div className="h-[280px] w-full bg-gray-900 rounded-lg p-4 relative">
      <div className="mb-3">
        <h3 className="text-green-400 text-sm font-semibold flex items-center gap-2">
          <span className="text-green-400">📈</span> Tren Produksi 2024
        </h3>
        <p className="text-gray-400 text-xs">Produksi kelapa sawit bulanan vs target (dalam ton)</p>
      </div>
      
      <div className="h-[220px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={productionData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#374151" 
              opacity={0.3}
            />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              axisLine={{ stroke: "#4b5563" }}
              tickLine={{ stroke: "#4b5563" }}
            />
            <YAxis 
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              axisLine={{ stroke: "#4b5563" }}
              tickLine={{ stroke: "#4b5563" }}
              domain={[0, 3200]}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ 
                stroke: "#10b981", 
                strokeWidth: 1, 
                strokeDasharray: "3 3",
                opacity: 0.8
              }}
              animationDuration={0}
              wrapperStyle={{ 
                zIndex: 9999,
                outline: 'none',
                pointerEvents: 'none'
              }}
              allowEscapeViewBox={{ x: false, y: false }}
              offset={15}
            />
            <Line
              type="monotone"
              dataKey="production"
              stroke="#10b981"
              strokeWidth={2.5}
              dot={{ 
                fill: "#10b981", 
                strokeWidth: 0, 
                r: 4
              }}
              activeDot={{
                r: 6,
                fill: "#10b981",
                strokeWidth: 2,
                stroke: "#1f2937"
              }}
              name="Produksi Aktual"
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke="#f59e0b"
              strokeWidth={2}
              strokeDasharray="6 6"
              dot={{ 
                fill: "#f59e0b", 
                strokeWidth: 0, 
                r: 3
              }}
              activeDot={{
                r: 5,
                fill: "#f59e0b",
                strokeWidth: 2,
                stroke: "#1f2937"
              }}
              name="Target"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
