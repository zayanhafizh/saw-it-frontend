"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Eye, Download } from "lucide-react"

// Mock data for estimates
const estimateData = [
  {
    id: 1,
    block: "Blok A-01",
    year: 2024,
    month: "Desember",
    estimatedProduction: 485,
    actualProduction: 467,
    accuracy: 96.3,
    status: "completed",
    confidence: "high",
    lastUpdated: "2024-12-01",
  },
  {
    id: 2,
    block: "Blok A-02",
    year: 2024,
    month: "Desember",
    estimatedProduction: 420,
    actualProduction: null,
    accuracy: null,
    status: "pending",
    confidence: "high",
    lastUpdated: "2024-12-01",
  },
  {
    id: 3,
    block: "Blok B-01",
    year: 2024,
    month: "November",
    estimatedProduction: 395,
    actualProduction: 378,
    accuracy: 95.7,
    status: "completed",
    confidence: "medium",
    lastUpdated: "2024-11-01",
  },
  {
    id: 4,
    block: "Blok B-02",
    year: 2024,
    month: "Desember",
    estimatedProduction: 445,
    actualProduction: null,
    accuracy: null,
    status: "pending",
    confidence: "high",
    lastUpdated: "2024-12-01",
  },
  {
    id: 5,
    block: "Blok C-01",
    year: 2024,
    month: "November",
    estimatedProduction: 380,
    actualProduction: 352,
    accuracy: 92.6,
    status: "completed",
    confidence: "medium",
    lastUpdated: "2024-11-01",
  },
  {
    id: 6,
    block: "Blok C-02",
    year: 2024,
    month: "Desember",
    estimatedProduction: 410,
    actualProduction: null,
    accuracy: null,
    status: "pending",
    confidence: "high",
    lastUpdated: "2024-12-01",
  },
  {
    id: 7,
    block: "Blok D-01",
    year: 2024,
    month: "November",
    estimatedProduction: 285,
    actualProduction: 267,
    accuracy: 93.7,
    status: "completed",
    confidence: "low",
    lastUpdated: "2024-11-01",
  },
  {
    id: 8,
    block: "Blok D-02",
    year: 2024,
    month: "Desember",
    estimatedProduction: 295,
    actualProduction: null,
    accuracy: null,
    status: "pending",
    confidence: "medium",
    lastUpdated: "2024-12-01",
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">Selesai</Badge>
    case "pending":
      return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Menunggu</Badge>
    default:
      return <Badge className="bg-gray-100 text-gray-800 border-gray-200">Tidak Diketahui</Badge>
  }
}

const getConfidenceBadge = (confidence: string) => {
  switch (confidence) {
    case "high":
      return (
        <Badge variant="outline" className="border-emerald-300 text-emerald-700">
          Tinggi
        </Badge>
      )
    case "medium":
      return (
        <Badge variant="outline" className="border-yellow-300 text-yellow-700">
          Sedang
        </Badge>
      )
    case "low":
      return (
        <Badge variant="outline" className="border-red-300 text-red-700">
          Rendah
        </Badge>
      )
    default:
      return <Badge variant="outline">Tidak Diketahui</Badge>
  }
}

export function EstimateTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const totalPages = Math.ceil(estimateData.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = estimateData.slice(startIndex, endIndex)

  return (
    <div className="space-y-4">
      {/* Table */}
      <div className="border border-emerald-200 rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-emerald-50">
              <TableHead className="font-semibold text-emerald-800">Blok</TableHead>
              <TableHead className="font-semibold text-emerald-800">Tahun</TableHead>
              <TableHead className="font-semibold text-emerald-800">Bulan</TableHead>
              <TableHead className="font-semibold text-emerald-800">Estimasi (ton)</TableHead>
              <TableHead className="font-semibold text-emerald-800">Aktual (ton)</TableHead>
              <TableHead className="font-semibold text-emerald-800">Akurasi (%)</TableHead>
              <TableHead className="font-semibold text-emerald-800">Status</TableHead>
              <TableHead className="font-semibold text-emerald-800">Kepercayaan</TableHead>
              <TableHead className="font-semibold text-emerald-800">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((row) => (
              <TableRow key={row.id} className="hover:bg-emerald-50/50">
                <TableCell className="font-medium">{row.block}</TableCell>
                <TableCell>{row.year}</TableCell>
                <TableCell>{row.month}</TableCell>
                <TableCell>{row.estimatedProduction}</TableCell>
                <TableCell>
                  {row.actualProduction ? row.actualProduction : <span className="text-gray-400 italic">Menunggu</span>}
                </TableCell>
                <TableCell>
                  {row.accuracy ? (
                    <span
                      className={`font-medium ${row.accuracy >= 95 ? "text-emerald-600" : row.accuracy >= 90 ? "text-yellow-600" : "text-red-600"}`}
                    >
                      {row.accuracy}%
                    </span>
                  ) : (
                    <span className="text-gray-400 italic">-</span>
                  )}
                </TableCell>
                <TableCell>{getStatusBadge(row.status)}</TableCell>
                <TableCell>{getConfidenceBadge(row.confidence)}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 w-8 p-0 border-emerald-200 hover:bg-emerald-50 bg-transparent"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 w-8 p-0 border-emerald-200 hover:bg-emerald-50 bg-transparent"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Menampilkan {startIndex + 1} sampai {Math.min(endIndex, estimateData.length)} dari {estimateData.length} entri
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
          >
            <ChevronLeft className="h-4 w-4" />
            Sebelumnya
          </Button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className={
                  currentPage === page
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                }
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
          >
            Berikutnya
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
