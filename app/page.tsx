import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Sparkles, Zap, Shield } from "lucide-react";

export default async function LandingPage() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center border-b border-border/40 bg-background sticky top-0 z-50">
        <span className="font-bold text-lg sm:text-xl text-primary">Kharcha</span>
        <div className="ml-auto flex gap-2 sm:gap-4">
          <Link href="/sign-in">
            <Button variant="ghost" size="sm">Log in</Button>
          </Link>
          <Link href="/sign-up">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24 md:py-32">
        <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Know your money.
            <br />
            <span className="text-primary">Control your future.</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            The AI-powered personal finance tracker built for Indian families.
            Log expenses in one sentence, get insights that help you save.
          </p>
          <div className="pt-2">
            <Link href="/sign-up">
              <Button size="lg" className="rounded-full shadow-lg px-8 h-12 text-base">
                Start Tracking Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Why Kharcha?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Built different from every other expense tracker.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
            <Card className="border-0 bg-background shadow-sm">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-2">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base">Zero-friction Input</CardTitle>
                <CardDescription className="text-sm">
                  Say &quot;paid Rahul 500 for lunch&quot; and our AI handles the rest. Under 5 seconds.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-background shadow-sm">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base">AI That Gives Decisions</CardTitle>
                <CardDescription className="text-sm">
                  Not &quot;you spent ₹8k on food.&quot; Instead: weekly digests, anomaly alerts, and actionable advice.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-background shadow-sm">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-2">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base">Your Data, Your Control</CardTitle>
                <CardDescription className="text-sm">
                  Full data export, account deletion anytime. We never sell your data.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">
            How it works
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { step: "1", title: "Log it", desc: "Type or talk. \"Spent 200 on auto.\" Done." },
              { step: "2", title: "See it", desc: "Dashboard shows where every rupee went." },
              { step: "3", title: "Ask it", desc: "\"Why did I overspend in May?\" AI answers." },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mx-auto text-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-6 border-t border-border/40 text-center">
        <p className="text-xs text-muted-foreground">
          Kharcha · Built with Next.js, Clerk, MongoDB & Gemini Flash
        </p>
      </footer>
    </div>
  );
}
