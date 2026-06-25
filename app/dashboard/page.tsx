import {
  getSummaryMetrics,
  getRecentTransactions,
  getCategoryBreakdown,
  getTodaySummary,
  getDailySpendingChart,
  getUserBudget,
} from "@/lib/actions/dashboard-data";
import { SummaryCards } from "@/components/dashboard/summary-cards";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { TodayHero } from "@/components/dashboard/today-hero";
import { SpendingChart } from "@/components/dashboard/spending-chart";
import { CategoryDonut } from "@/components/dashboard/category-donut";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default async function DashboardPage() {
  const [
    metrics,
    recentTransactions,
    categoryData,
    todaySummary,
    dailySpending,
    monthlyBudget,
  ] = await Promise.all([
    getSummaryMetrics(),
    getRecentTransactions(5),
    getCategoryBreakdown(),
    getTodaySummary(),
    getDailySpendingChart(),
    getUserBudget(),
  ]);

  return (
    <div className="space-y-6 p-4 pt-6 md:p-8">
      {/* Today Hero */}
      <TodayHero
        totalSpent={todaySummary.totalSpent}
        totalEarned={todaySummary.totalEarned}
        transactionCount={todaySummary.transactionCount}
        monthlyBudget={monthlyBudget}
        monthlyExpense={metrics.expense}
      />

      {/* Summary Metric Cards */}
      <SummaryCards {...metrics} />

      {/* Charts Row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Spending Chart - takes more space */}
        <Card className="col-span-full lg:col-span-4 translucent-surface">
          <CardHeader>
            <CardTitle className="text-base">Daily Spending</CardTitle>
            <p className="text-xs text-muted-foreground">
              Last 30 days • Today highlighted
            </p>
          </CardHeader>
          <CardContent>
            <SpendingChart data={dailySpending} />
          </CardContent>
        </Card>

        {/* Category Donut */}
        <Card className="col-span-full lg:col-span-3 translucent-surface">
          <CardHeader>
            <CardTitle className="text-base">Where Money Goes</CardTitle>
            <p className="text-xs text-muted-foreground">
              This month&apos;s expenses by category
            </p>
          </CardHeader>
          <CardContent>
            <CategoryDonut data={categoryData} />
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card className="translucent-surface">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base">Recent Transactions</CardTitle>
            <p className="text-xs text-muted-foreground mt-0.5">
              Your latest activity
            </p>
          </div>
          <Link href="/dashboard/transactions">
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 text-xs text-muted-foreground"
            >
              View All <ArrowRight className="h-3 w-3" />
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <RecentTransactions transactions={recentTransactions} />
        </CardContent>
      </Card>
    </div>
  );
}

