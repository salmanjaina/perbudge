import { generateAiDigest } from "@/app/actions/chat";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, TrendingUp, BarChart3, AlertCircle } from "lucide-react";

export default async function InsightsPage() {
  const digest = await generateAiDigest();

  return (
    <div className="flex flex-col gap-6 p-4 pt-8 md:p-10 max-w-[1200px] mx-auto min-h-[calc(100vh-4rem)]">
      
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight">Financial Insights</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* AI Weekly Digest */}
        <Card className="translucent-surface border-0 bg-primary/5 text-foreground relative overflow-hidden md:col-span-2 shadow-lg">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Sparkles className="w-32 h-32" />
          </div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Sparkles className="w-5 h-5" />
              AI Weekly Digest
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm dark:prose-invert">
            {digest.split("\n").map((line, i) => (
              <p key={i} className="mb-2">{line.replace(/\*\*/g, "")}</p>
            ))}
          </CardContent>
        </Card>

        {/* Future placeholder: Spending Trends */}
        <Card className="translucent-surface border-0 h-[300px] flex flex-col items-center justify-center text-muted-foreground shadow-lg">
          <BarChart3 className="w-10 h-10 mb-4 opacity-20" />
          <p>Monthly Comparison</p>
          <p className="text-xs mt-1 opacity-70">(Coming in next update)</p>
        </Card>

        {/* Future placeholder: Anomalies */}
        <Card className="translucent-surface border-0 h-[300px] flex flex-col items-center justify-center text-muted-foreground shadow-lg">
          <AlertCircle className="w-10 h-10 mb-4 opacity-20" />
          <p>Spending Anomalies</p>
          <p className="text-xs mt-1 opacity-70">(Coming in next update)</p>
        </Card>
      </div>
      
    </div>
  );
}
