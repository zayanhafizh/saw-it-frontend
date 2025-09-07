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
      "Hello! I'm Palm-AI, your intelligent assistant for palm oil plantation management. I can help you with production optimization, plant health monitoring, harvest planning, and data analysis. How can I assist you today?",
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

    if (input.includes("production") || input.includes("yield")) {
      return "Based on your current data, I can see that your average yield is 18.5 tons/hectare. To optimize production, I recommend: 1) Focus on Block A-12 which shows the highest potential, 2) Implement precision fertilization in underperforming areas, 3) Consider adjusting harvest cycles based on palm maturity. Would you like me to analyze specific blocks in more detail?"
    }

    if (input.includes("disease") || input.includes("health")) {
      return "Palm health monitoring is crucial for maintaining productivity. Key indicators to watch: 1) Yellowing fronds (possible nutrient deficiency), 2) Crown rot symptoms, 3) Pest infestations like rhinoceros beetles. I recommend implementing weekly visual inspections and soil testing every 3 months. Would you like me to create a monitoring schedule for your plantation?"
    }

    if (input.includes("harvest") || input.includes("schedule")) {
      return "Optimal harvest timing depends on several factors: 1) Palm age and variety, 2) Seasonal patterns, 3) Market conditions. Based on your plantation data, I suggest harvesting mature bunches every 10-14 days. Blocks A and C are currently showing peak ripeness indicators. Shall I generate a detailed harvest schedule for the next month?"
    }

    if (input.includes("fertilizer") || input.includes("nutrition")) {
      return "Proper nutrition is essential for palm productivity. I recommend: 1) NPK 15:15:6:4 for mature palms, 2) Apply 2-3 kg per palm annually, 3) Split applications during dry seasons. Your soil analysis shows adequate potassium but low nitrogen in Blocks D and F. Would you like me to create a customized fertilization plan?"
    }

    return "I understand you're asking about palm plantation management. Based on your question, I'd recommend reviewing your current production data and implementing best practices for sustainable palm oil production. Could you provide more specific details about what aspect you'd like me to focus on - production optimization, plant health, or operational efficiency?"
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
            <h3 className="font-semibold text-emerald-900">Palm-AI Assistant</h3>
            <p className="text-sm text-emerald-600">Online • Ready to help</p>
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
            placeholder="Ask Palm-AI about production, plant health, or optimization..."
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
          Palm-AI can make mistakes. Please verify important information with agricultural experts.
        </p>
      </div>
    </div>
  )
}
