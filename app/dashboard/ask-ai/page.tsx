import { AiChat } from "@/components/dashboard/ai-chat";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

export default function AskAIPage() {
  return (
    <div className="flex flex-col p-4 pt-8 md:p-10 max-w-[1200px] mx-auto min-h-[calc(100vh-4rem)]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight">Ask AI</h2>
      </div>
      
      <p className="text-muted-foreground mb-6">
        Chat with your personal finance assistant. It understands your expenses and can answer questions like "How much did I spend on food this month?" or "Can I afford a new laptop?"
      </p>

      <Card className="translucent-surface border-0 flex-1 flex flex-col h-full min-h-[600px]">
        <CardHeader>
          <CardTitle>Chat Assistant</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col p-0">
          <AiChat />
        </CardContent>
      </Card>
    </div>
  );
}
