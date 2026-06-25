"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { useState } from "react";

const typeFilters = [
  { value: "all", label: "All" },
  { value: "income", label: "Income" },
  { value: "expense", label: "Expense" },
  { value: "transfer", label: "Transfer" },
];

export function TransactionFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentType = searchParams.get("type") || "all";
  const currentSearch = searchParams.get("search") || "";
  const [search, setSearch] = useState(currentSearch);

  const applyFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "all") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.delete("page"); // reset page on filter change
    router.push(`/dashboard/transactions?${params.toString()}`);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilter("search", search);
  };

  const clearSearch = () => {
    setSearch("");
    applyFilter("search", "");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      {/* Type filter pills */}
      <div className="flex gap-1.5">
        {typeFilters.map((f) => (
          <Button
            key={f.value}
            variant={currentType === f.value ? "default" : "outline"}
            size="sm"
            className="rounded-full text-xs h-8"
            onClick={() => applyFilter("type", f.value)}
          >
            {f.label}
          </Button>
        ))}
      </div>

      {/* Search */}
      <form onSubmit={handleSearchSubmit} className="flex gap-2 sm:ml-auto">
        <div className="relative">
          <Search className="absolute left-2.5 top-2 h-4 w-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search category, counterparty..."
            className="pl-8 h-8 w-[220px] text-xs"
          />
          {search && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
