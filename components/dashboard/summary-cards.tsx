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
      subtitle: "This month",
    },
    {
      label: "Income",
      value: income,
      icon: ArrowUpRight,
      iconBg: "bg-emerald-500/15",
      iconColor: "text-emerald-500",
      subtitle: "Total received",
    },
    {
      label: "Expenses",
      value: expense,
      icon: ArrowDownRight,
      iconBg: "bg-destructive/15",
      iconColor: "text-destructive",
      subtitle: "Total spent",
    },
  ];

  return (
    <div className="grid gap-4 grid-cols-3">
      {cards.map((card) => (
        <Card key={card.label} className="translucent-surface border-0">
          <CardContent className="p-4 md:p-5">
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-9 h-9 rounded-lg ${card.iconBg} flex items-center justify-center`}
              >
                <card.icon className={`h-4 w-4 ${card.iconColor}`} />
              </div>
              <span className="text-xs md:text-sm font-medium text-muted-foreground">
                {card.label}
              </span>
            </div>
            <p className="text-xl md:text-2xl font-bold font-mono tracking-tight">
              {formatCurrency(card.value)}
            </p>
            <p className="text-[11px] text-muted-foreground mt-1">
              {card.subtitle}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

