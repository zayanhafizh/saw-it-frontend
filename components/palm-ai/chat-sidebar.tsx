"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, Plus, MessageCircle, Lightbulb, BarChart3, Leaf } from "lucide-react"

const suggestedQuestions = [
  {
    category: "Production",
    icon: BarChart3,
    questions: [
      "What's the optimal harvest time for Block A-12?",
      "How can I improve yield in low-performing areas?",
      "What factors affect palm oil production quality?",
    ],
  },
  {
    category: "Plant Health",
    icon: Leaf,
    questions: [
      "How to identify early signs of palm diseases?",
      "Best practices for palm tree maintenance?",
      "Optimal fertilizer schedule for mature palms?",
    ],
  },
  {
    category: "Analytics",
    icon: Lightbulb,
    questions: [
      "Analyze my production trends for this year",
      "Compare performance across different blocks",
      "Predict next month's production estimates",
    ],
  },
]

export function ChatSidebar() {
  return (
    <div className="w-80 bg-emerald-50 border-r border-emerald-200 p-4 overflow-y-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-emerald-900">Palm-AI</h2>
            <p className="text-sm text-emerald-600">Your AI Assistant</p>
          </div>
        </div>

        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
          <Plus className="h-4 w-4 mr-2" />
          New Conversation
        </Button>
      </div>

      {/* Suggested Questions */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-emerald-800 mb-3">Suggested Questions</h3>

        {suggestedQuestions.map((category) => {
          const IconComponent = category.icon
          return (
            <Card key={category.category} className="border-emerald-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-emerald-700 flex items-center gap-2">
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
                    className="w-full text-left justify-start h-auto p-2 text-xs text-gray-700 hover:bg-emerald-100 hover:text-emerald-800"
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
        <h3 className="text-sm font-semibold text-emerald-800 mb-3">Recent Conversations</h3>
        <div className="space-y-2">
          {["Production optimization tips", "Disease prevention strategies", "Harvest scheduling advice"].map(
            (conversation, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="w-full text-left justify-start text-xs text-gray-600 hover:bg-emerald-100"
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
