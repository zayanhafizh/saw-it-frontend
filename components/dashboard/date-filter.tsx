"use client"

import { useState } from "react"
import { Calendar, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function DateFilter() {
  const [selectedPeriod, setSelectedPeriod] = useState("Bulan Ini")
  const [customDate, setCustomDate] = useState({
    startDate: "",
    endDate: "",
  })
  const [showCustom, setShowCustom] = useState(false)

  const periods = [
    "Hari Ini",
    "Minggu Ini",
    "Bulan Ini",
    "3 Bulan Terakhir",
    "6 Bulan Terakhir",
    "Tahun Ini",
    "Tahun Lalu",
    "Kustom",
  ]

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period)
    setShowCustom(period === "Kustom")
  }

  return (
    <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm">
      <Calendar className="h-4 w-4 text-gray-500" />
      <span className="text-sm font-medium text-gray-700">Filter Periode:</span>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-2 bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
          >
            {selectedPeriod}
            <ChevronDown className="h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48">
          {periods.map((period) => (
            <DropdownMenuItem
              key={period}
              onClick={() => handlePeriodChange(period)}
              className={selectedPeriod === period ? "bg-emerald-50 text-emerald-700" : ""}
            >
              {period}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {showCustom && (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 bg-white text-gray-900 border-gray-300 hover:bg-gray-50">
              Pilih Tanggal
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="start">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="start-date" className="text-sm font-medium">
                  Tanggal Mulai
                </Label>
                <Input
                  id="start-date"
                  type="date"
                  value={customDate.startDate}
                  onChange={(e) => setCustomDate((prev) => ({ ...prev, startDate: e.target.value }))}
                  className="h-8"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end-date" className="text-sm font-medium">
                  Tanggal Akhir
                </Label>
                <Input
                  id="end-date"
                  type="date"
                  value={customDate.endDate}
                  onChange={(e) => setCustomDate((prev) => ({ ...prev, endDate: e.target.value }))}
                  className="h-8"
                />
              </div>
              <Button size="sm" className="w-full h-8">
                Terapkan Filter
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      )}
    </div>
  )
}
