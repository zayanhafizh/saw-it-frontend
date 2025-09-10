"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, RotateCcw } from "lucide-react"

export function EstimateFilters() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedYear, setSelectedYear] = useState("")
  const [selectedMonth, setSelectedMonth] = useState("")
  const [selectedBlock, setSelectedBlock] = useState("")

  const handleReset = () => {
    setSearchTerm("")
    setSelectedYear("")
    setSelectedMonth("")
    setSelectedBlock("")
  }

  const years = ["2024", "2025", "2026"]
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ]
  const blocks = [
    "Blok A-01",
    "Blok A-02",
    "Blok A-03",
    "Blok A-04",
    "Blok A-05",
    "Blok B-01",
    "Blok B-02",
    "Blok B-03",
    "Blok B-04",
    "Blok B-05",
    "Blok C-01",
    "Blok C-02",
    "Blok C-03",
    "Blok C-04",
    "Blok C-05",
    "Blok D-01",
    "Blok D-02",
    "Blok D-03",
    "Blok D-04",
    "Blok D-05",
  ]

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Cari berdasarkan nama blok, nilai produksi, atau catatan..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 border-emerald-200 focus:border-emerald-400"
        />
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap gap-4 items-end">
        <div className="flex-1 min-w-[200px]">
          <label className="text-sm font-medium text-gray-700 mb-2 block">Tahun</label>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="border-emerald-200 focus:border-emerald-400">
              <SelectValue placeholder="Pilih tahun" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="text-sm font-medium text-gray-700 mb-2 block">Bulan</label>
          <Select value={selectedMonth} onValueChange={setSelectedMonth}>
            <SelectTrigger className="border-emerald-200 focus:border-emerald-400">
              <SelectValue placeholder="Pilih bulan" />
            </SelectTrigger>
            <SelectContent>
              {months.map((month) => (
                <SelectItem key={month} value={month}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="text-sm font-medium text-gray-700 mb-2 block">Blok</label>
          <Select value={selectedBlock} onValueChange={setSelectedBlock}>
            <SelectTrigger className="border-emerald-200 focus:border-emerald-400">
              <SelectValue placeholder="Pilih blok" />
            </SelectTrigger>
            <SelectContent>
              {blocks.map((block) => (
                <SelectItem key={block} value={block}>
                  {block}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={handleReset}
            className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Filter className="h-4 w-4 mr-2" />
            Terapkan Filter
          </Button>
        </div>
      </div>
    </div>
  )
}
