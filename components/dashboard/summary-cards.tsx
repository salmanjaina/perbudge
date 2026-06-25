import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownRight, ArrowUpRight, Wallet } from "lucide-react";

interface SummaryProps {
  income: number;
  expense: number;
  balance: number;
}

export function SummaryCards({ income, expense, balance }: SummaryProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const cards = [
    {
      label: "Net Balance",
      value: balance,
      icon: Wallet,
      iconBg: "bg-blue-500/15",
      iconColor: "text-blue-500",
    },
    {
      label: "Income",
      value: income,
      icon: ArrowUpRight,
      iconBg: "bg-emerald-500/15",
      iconColor: "text-emerald-500",
    },
    {
      label: "Expenses",
      value: expense,
      icon: ArrowDownRight,
      iconBg: "bg-destructive/15",
      iconColor: "text-destructive",
    },
  ];

  return (
    <div className="grid gap-3 grid-cols-2 md:grid-cols-3">
      {cards.map((card, idx) => (
        <Card 
          key={card.label} 
          className={`translucent-surface ${idx === 0 ? "col-span-2 md:col-span-1" : ""}`}
        >
          <CardContent className="p-3.5 md:p-5 flex flex-col justify-center h-full">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {card.label}
              </span>
              <div className={`w-7 h-7 rounded-full ${card.iconBg} flex items-center justify-center shrink-0`}>
                <card.icon className={`h-3.5 w-3.5 ${card.iconColor}`} />
              </div>
            </div>
            <p className="text-xl md:text-2xl font-bold font-mono tracking-tight">
              {formatCurrency(card.value)}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

