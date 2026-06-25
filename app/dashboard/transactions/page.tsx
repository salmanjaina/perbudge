import { Suspense } from "react";
import Link from "next/link";
import { getAllTransactions } from "@/lib/actions/transaction-list";
import { TransactionTable } from "@/components/dashboard/transaction-table";
import { TransactionFilters } from "@/components/dashboard/transaction-filters";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

interface PageProps {
  searchParams: Promise<{ type?: string; search?: string; page?: string }>;
}

export default async function TransactionsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const data = await getAllTransactions({
    type: params.type,
    search: params.search,
    page: params.page ? Number(params.page) : 1,
  });

  return (
    <div className="space-y-6 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Transactions
        </h1>
        <Link href="/dashboard/add">
          <Button className="gap-2 rounded-full">
            <PlusCircle className="h-4 w-4" />
            Add New
          </Button>
        </Link>
      </div>

      <Suspense fallback={null}>
        <TransactionFilters />
      </Suspense>

      <TransactionTable
        transactions={data.transactions}
        total={data.total}
        totalPages={data.totalPages ?? 1}
        currentPage={data.currentPage ?? 1}
      />
    </div>
  );
}
