"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Upload, FileText, X, CheckCircle, AlertCircle } from "lucide-react"

interface UploadFile {
  file: File
  id: string
  status: "pending" | "uploading" | "success" | "error"
  progress: number
  error?: string
}

export function UploadArea() {
  const [files, setFiles] = useState<UploadFile[]>([])
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploadMetadata, setUploadMetadata] = useState({
    dataType: "",
    period: "",
    description: "",
  })

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)

    const droppedFiles = Array.from(e.dataTransfer.files)
    addFiles(droppedFiles)
  }, [])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      addFiles(selectedFiles)
    }
  }

  const addFiles = (newFiles: File[]) => {
    const validFiles = newFiles.filter((file) => {
      const validTypes = [".csv", ".xlsx", ".xls", ".json"]
      return validTypes.some((type) => file.name.toLowerCase().endsWith(type))
    })

    const uploadFiles: UploadFile[] = validFiles.map((file) => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
      status: "pending",
      progress: 0,
    }))

    setFiles((prev) => [...prev, ...uploadFiles])
  }

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== id))
  }

  const simulateUpload = (fileId: string) => {
    setFiles((prev) =>
      prev.map((file) => (file.id === fileId ? { ...file, status: "uploading" as const, progress: 0 } : file)),
    )

    const interval = setInterval(() => {
      setFiles((prev) => {
        const file = prev.find((f) => f.id === fileId)
        if (!file || file.progress >= 100) {
          clearInterval(interval)
          return prev.map((f) => (f.id === fileId ? { ...f, status: "success" as const, progress: 100 } : f))
        }

        return prev.map((f) =>
          f.id === fileId ? { ...f, progress: Math.min(f.progress + Math.random() * 20, 100) } : f,
        )
      })
    }, 200)
  }

  const uploadAllFiles = () => {
    files.forEach((file) => {
      if (file.status === "pending") {
        simulateUpload(file.id)
      }
    })
  }

  const getFileIcon = (fileName: string) => {
    if (fileName.endsWith(".csv")) return "📊"
    if (fileName.endsWith(".xlsx") || fileName.endsWith(".xls")) return "📈"
    if (fileName.endsWith(".json")) return "📋"
    return "📄"
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-emerald-600" />
      case "error":
        return <AlertCircle className="h-4 w-4 text-red-600" />
      case "uploading":
        return <div className="h-4 w-4 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
      default:
        return <FileText className="h-4 w-4 text-gray-400" />
    }
  }

  return (
    <Card className="border-emerald-200">
      <CardHeader>
        <CardTitle className="text-emerald-700 flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Unggah Data Produksi
        </CardTitle>
        <CardDescription>Unggah file CSV, Excel, atau JSON yang berisi data produksi</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Upload Metadata */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="dataType">Jenis Data</Label>
            <Select
              value={uploadMetadata.dataType}
              onValueChange={(value) => setUploadMetadata((prev) => ({ ...prev, dataType: value }))}
            >
              <SelectTrigger className="border-emerald-200">
                <SelectValue placeholder="Pilih jenis data" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="production">Data Produksi</SelectItem>
                <SelectItem value="harvest">Catatan Panen</SelectItem>
                <SelectItem value="maintenance">Log Pemeliharaan</SelectItem>
                <SelectItem value="weather">Data Cuaca</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="period">Periode</Label>
            <Select
              value={uploadMetadata.period}
              onValueChange={(value) => setUploadMetadata((prev) => ({ ...prev, period: value }))}
            >
              <SelectTrigger className="border-emerald-200">
                <SelectValue placeholder="Pilih periode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Harian</SelectItem>
                <SelectItem value="weekly">Mingguan</SelectItem>
                <SelectItem value="monthly">Bulanan</SelectItem>
                <SelectItem value="quarterly">Triwulanan</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="description">Deskripsi</Label>
            <Input
              id="description"
              placeholder="Deskripsi singkat"
              value={uploadMetadata.description}
              onChange={(e) => setUploadMetadata((prev) => ({ ...prev, description: e.target.value }))}
              className="border-emerald-200"
            />
          </div>
        </div>

        {/* Drag & Drop Area */}
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragOver
              ? "border-emerald-400 bg-emerald-50"
              : "border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50/50"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Seret file ke sini atau klik untuk menjelajah</h3>
          <p className="text-gray-600 mb-4">Mendukung file CSV, Excel (.xlsx, .xls), dan JSON hingga 10MB</p>
          <input
            type="file"
            multiple
            accept=".csv,.xlsx,.xls,.json"
            onChange={handleFileSelect}
            className="hidden"
            id="file-upload"
          />
          <Button
            asChild
            variant="outline"
            className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
          >
            <label htmlFor="file-upload" className="cursor-pointer">
              Pilih File
            </label>
          </Button>
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-900">File Terpilih ({files.length})</h4>
              <Button
                onClick={uploadAllFiles}
                disabled={files.every((f) => f.status !== "pending")}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                Unggah Semua File
              </Button>
            </div>

            <div className="space-y-2">
              {files.map((uploadFile) => (
                <div key={uploadFile.id} className="flex items-center gap-3 p-3 border border-emerald-200 rounded-lg">
                  <div className="text-2xl">{getFileIcon(uploadFile.file.name)}</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">{uploadFile.file.name}</p>
                    <p className="text-sm text-gray-600">{(uploadFile.file.size / 1024 / 1024).toFixed(2)} MB</p>
                    {uploadFile.status === "uploading" && <Progress value={uploadFile.progress} className="mt-2 h-2" />}
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(uploadFile.status)}
                    {uploadFile.status === "pending" && (
                      <Button
                        size="sm"
                        onClick={() => simulateUpload(uploadFile.id)}
                        className="bg-emerald-600 hover:bg-emerald-700"
                      >
                        Unggah
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeFile(uploadFile.id)}
                      className="h-8 w-8 p-0 hover:bg-red-100"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
