import { ChatInterface } from "@/components/palm-ai/chat-interface"
import { ChatSidebar } from "@/components/palm-ai/chat-sidebar"

export default function PalmAIPage() {
  return (
    <div className="flex h-full flex-col lg:flex-row bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Mobile Header - Only visible on small screens */}
      <div className="lg:hidden bg-white/90 backdrop-blur-sm border-b border-emerald-200 p-4">
        <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Asisten Palm-AI
        </h1>
        <p className="text-sm text-gray-600">Wawasan bertenaga AI untuk perkebunan Anda</p>
      </div>

      {/* Chat Sidebar - Responsive */}
      <div className="lg:block">
        <ChatSidebar />
      </div>

      {/* Chat Interface - Flexible container */}
      <div className="flex-1 flex flex-col min-h-0">
        <ChatInterface />
      </div>
    </div>
  )
}
