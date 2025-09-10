"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, Plus, MessageCircle, Lightbulb, BarChart3, Leaf } from "lucide-react"

const suggestedQuestions = [
  {
    category: "Produksi",
    icon: BarChart3,
    questions: [
      "Kapan waktu panen optimal untuk Blok A-12?",
      "Bagaimana cara meningkatkan hasil di area berproduksi rendah?",
      "Faktor apa yang mempengaruhi kualitas produksi minyak kelapa sawit?",
    ],
  },
  {
    category: "Kesehatan Tanaman",
    icon: Leaf,
    questions: [
      "Bagaimana mengidentifikasi tanda awal penyakit kelapa sawit?",
      "Praktik terbaik untuk perawatan pohon kelapa sawit?",
      "Jadwal pupuk optimal untuk kelapa sawit dewasa?",
    ],
  },
  {
    category: "Analitik",
    icon: Lightbulb,
    questions: [
      "Analisis tren produksi saya tahun ini",
      "Bandingkan kinerja antar blok yang berbeda",
      "Prediksi estimasi produksi bulan depan",
    ],
  },
]

export function ChatSidebar() {
  return (
    <div className="w-80 bg-emerald-50 dark:bg-gray-900 border-r border-emerald-200 dark:border-emerald-700 p-4 overflow-y-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 dark:bg-emerald-700">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-emerald-900 dark:text-emerald-100">Palm-AI</h2>
            <p className="text-sm text-emerald-600 dark:text-emerald-400">Asisten AI Anda</p>
          </div>
        </div>

        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-800">
          <Plus className="h-4 w-4 mr-2" />
          Percakapan Baru
        </Button>
      </div>

      {/* Suggested Questions */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-emerald-800 dark:text-emerald-300 mb-3">Pertanyaan yang Disarankan</h3>

        {suggestedQuestions.map((category) => {
          const IconComponent = category.icon
          return (
            <Card key={category.category} className="border-emerald-200 dark:border-emerald-700 dark:bg-gray-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                  <IconComponent className="h-4 w-4" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {category.questions.map((question, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="w-full text-left justify-start h-auto p-2 text-xs text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-800 dark:hover:text-emerald-300"
                  >
                    <MessageCircle className="h-3 w-3 mr-2 flex-shrink-0" />
                    <span className="text-wrap">{question}</span>
                  </Button>
                ))}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Conversations */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-emerald-800 dark:text-emerald-300 mb-3">Percakapan Terakhir</h3>
        <div className="space-y-2">
          {["Tips optimisasi produksi", "Strategi pencegahan penyakit", "Saran penjadwalan panen"].map(
            (conversation, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="w-full text-left justify-start text-xs text-gray-600 dark:text-gray-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-300"
              >
                <MessageCircle className="h-3 w-3 mr-2" />
                {conversation}
              </Button>
            ),
          )}
        </div>
      </div>
    </div>
  )
}
