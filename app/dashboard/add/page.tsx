"use client";

import { QuickAddDrawer } from "@/components/dashboard/quick-add-drawer";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function AddTransactionPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Add Transaction
        </h1>
        <p className="text-muted-foreground text-sm">
          Track your income and expenses with ease
        </p>
      </div>
      <QuickAddDrawer>
        <Button size="lg" className="rounded-xl gap-2 h-12 px-8">
          <PlusCircle className="h-5 w-5" />
          New Transaction
        </Button>
      </QuickAddDrawer>
    </div>
  );
}

