import { ChatInterface } from "@/components/palm-ai/chat-interface"
import { ChatSidebar } from "@/components/palm-ai/chat-sidebar"

export default function PalmAIPage() {
  return (
    <div className="flex h-full flex-col lg:flex-row bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Mobile Header - Only visible on small screens */}
      <div className="lg:hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-b border-emerald-200 dark:border-emerald-700 p-4">
        <h1 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">Asisten Palm-AI</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">Wawasan bertenaga AI untuk perkebunan Anda</p>
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
