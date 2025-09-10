"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, Bot, User, Copy, ThumbsUp, ThumbsDown } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: "1",
    content:
      "Halo! Saya Palm-AI, asisten cerdas Anda untuk manajemen perkebunan kelapa sawit. Saya dapat membantu optimisasi produksi, pemantauan kesehatan tanaman, perencanaan panen, dan analisis data. Bagaimana saya bisa membantu Anda hari ini?",
    sender: "ai",
    timestamp: new Date(),
  },
]

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(inputValue),
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsLoading(false)
    }, 1500)
  }

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("production") || input.includes("yield") || input.includes("produksi") || input.includes("hasil")) {
      return "Berdasarkan data saat ini, saya dapat melihat bahwa rata-rata hasil Anda adalah 18,5 ton/hektare. Untuk mengoptimalkan produksi, saya merekomendasikan: 1) Fokus pada Blok A-12 yang menunjukkan potensi tertinggi, 2) Terapkan pemupukan presisi di area berproduksi rendah, 3) Pertimbangkan penyesuaian siklus panen berdasarkan kematangan kelapa sawit. Apakah Anda ingin saya menganalisis blok-blok tertentu secara lebih detail?"
    }

    if (input.includes("disease") || input.includes("health") || input.includes("penyakit") || input.includes("kesehatan")) {
      return "Pemantauan kesehatan kelapa sawit sangat penting untuk menjaga produktivitas. Indikator utama yang perlu diperhatikan: 1) Pelepah menguning (kemungkinan kekurangan nutrisi), 2) Gejala busuk pucuk, 3) Serangan hama seperti kumbang tanduk. Saya merekomendasikan inspeksi visual mingguan dan pengujian tanah setiap 3 bulan. Apakah Anda ingin saya membuat jadwal pemantauan untuk perkebunan Anda?"
    }

    if (input.includes("harvest") || input.includes("schedule") || input.includes("panen") || input.includes("jadwal")) {
      return "Waktu panen optimal tergantung pada beberapa faktor: 1) Umur dan varietas kelapa sawit, 2) Pola musiman, 3) Kondisi pasar. Berdasarkan data perkebunan Anda, saya menyarankan panen tandan matang setiap 10-14 hari. Blok A dan C saat ini menunjukkan indikator kematangan puncak. Haruskah saya membuat jadwal panen detail untuk bulan depan?"
    }

    if (input.includes("fertilizer") || input.includes("nutrition") || input.includes("pupuk") || input.includes("nutrisi")) {
      return "Nutrisi yang tepat sangat penting untuk produktivitas kelapa sawit. Saya merekomendasikan: 1) NPK 15:15:6:4 untuk kelapa sawit dewasa, 2) Aplikasi 2-3 kg per pohon per tahun, 3) Aplikasi terbagi selama musim kemarau. Analisis tanah Anda menunjukkan kalium cukup tetapi nitrogen rendah di Blok D dan F. Apakah Anda ingin saya membuat rencana pemupukan yang disesuaikan?"
    }

    return "Saya memahami Anda bertanya tentang manajemen perkebunan kelapa sawit. Berdasarkan pertanyaan Anda, saya merekomendasikan untuk meninjau data produksi saat ini dan menerapkan praktik terbaik untuk produksi kelapa sawit yang berkelanjutan. Bisakah Anda memberikan detail yang lebih spesifik tentang aspek apa yang ingin saya fokuskan - optimisasi produksi, kesehatan tanaman, atau efisiensi operasional?"
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="border-b border-emerald-200 p-4 bg-white">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8 bg-emerald-600">
            <AvatarFallback className="text-white">
              <Bot className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-emerald-900">Asisten Palm-AI</h3>
            <p className="text-sm text-emerald-600">Online • Siap membantu</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            {message.sender === "ai" && (
              <Avatar className="h-8 w-8 bg-emerald-600 flex-shrink-0">
                <AvatarFallback className="text-white">
                  <Bot className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            )}

            <div className={`max-w-[70%] ${message.sender === "user" ? "order-first" : ""}`}>
              <Card
                className={`p-3 ${
                  message.sender === "user"
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-white border-emerald-200"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
              </Card>

              <div
                className={`flex items-center gap-2 mt-2 text-xs text-gray-500 ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <span>{message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                {message.sender === "ai" && (
                  <div className="flex gap-1">
                    <Button size="sm" variant="ghost" className="h-6 w-6 p-0 hover:bg-emerald-100">
                      <Copy className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-6 w-6 p-0 hover:bg-emerald-100">
                      <ThumbsUp className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-6 w-6 p-0 hover:bg-emerald-100">
                      <ThumbsDown className="h-3 w-3" />
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {message.sender === "user" && (
              <Avatar className="h-8 w-8 bg-gray-600 flex-shrink-0">
                <AvatarFallback className="text-white">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-3 justify-start">
            <Avatar className="h-8 w-8 bg-emerald-600 flex-shrink-0">
              <AvatarFallback className="text-white">
                <Bot className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <Card className="p-3 bg-white border-emerald-200">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-emerald-200 p-4 bg-white">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Tanyakan kepada Palm-AI tentang produksi, kesehatan tanaman, atau optimisasi..."
            className="flex-1 border-emerald-200 focus:border-emerald-400"
            disabled={isLoading}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Palm-AI dapat membuat kesalahan. Harap verifikasi informasi penting dengan ahli pertanian.
        </p>
      </div>
    </div>
  )
}
