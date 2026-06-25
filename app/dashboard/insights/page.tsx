import { generateAiDigest } from "@/app/actions/chat";
import { AiChat } from "@/components/dashboard/ai-chat";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default async function InsightsPage() {
  const digest = await generateAiDigest();

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 pt-8 md:p-10 max-w-[1600px] mx-auto min-h-[calc(100vh-4rem)]">
      
      <div className="flex-1 lg:w-1/3 flex flex-col gap-6">
        <h2 className="text-3xl font-bold tracking-tight">AI Insights</h2>
        
        <Card className="translucent-surface border-0 bg-primary/5 text-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Sparkles className="w-24 h-24" />
          </div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Sparkles className="w-5 h-5" />
              Weekly Digest
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm dark:prose-invert">
            {digest.split("\n").map((line, i) => (
              <p key={i} className="mb-2">{line.replace(/\*\*/g, "")}</p>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="flex-1 lg:w-2/3 flex flex-col">
        <Card className="translucent-surface border-0 flex-1 flex flex-col h-full min-h-[500px]">
          <CardHeader>
            <CardTitle>Ask Your Data</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col p-0">
            <AiChat />
          </CardContent>
        </Card>
      </div>
      
    </div>
  );
}
