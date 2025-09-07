import { ChatInterface } from "@/components/palm-ai/chat-interface"
import { ChatSidebar } from "@/components/palm-ai/chat-sidebar"

export default function PalmAIPage() {
  return (
    <div className="flex h-full">
      <ChatSidebar />
      <div className="flex-1 flex flex-col">
        <ChatInterface />
      </div>
    </div>
  )
}
