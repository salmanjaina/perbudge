"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import {
  LayoutDashboard,
  Sparkles,
  PlusCircle,
  List,
  Settings,
  MessageSquare,
  Moon,
  Sun,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { QuickAddDrawer } from "@/components/dashboard/quick-add-drawer";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/transactions", label: "Transactions", icon: List },
  { href: "/dashboard/add", label: "Add", icon: PlusCircle, isAdd: true },
  { href: "/dashboard/insights", label: "Insights", icon: Sparkles },
  { href: "/dashboard/ask-ai", label: "Ask AI", icon: MessageSquare },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function DashboardNavigation() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* ── Desktop Sidebar (Hover Expand) ── */}
      <aside className="hidden md:flex md:fixed md:top-0 md:left-0 md:h-screen group w-16 hover:w-64 transition-[width] duration-300 ease-in-out shrink-0 flex-col border-r border-border/40 bg-background/95 backdrop-blur-xl z-50 overflow-hidden shadow-[2px_0_15px_-3px_rgba(0,0,0,0.1)]">
        <div className="h-16 flex items-center px-4 border-b border-border/40 w-64">
          <Link href="/dashboard" className="flex items-center gap-3 w-full">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
              <span className="text-primary-foreground font-bold text-sm">₹</span>
            </div>
            <span className="font-bold text-xl tracking-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Kharcha</span>
          </Link>
        </div>

        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto overflow-x-hidden w-64">
          {navItems.map((item) => {
            if (item.isAdd) {
              return (
                <QuickAddDrawer key={item.href} triggerShortcut>
                  <button
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium w-full transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-muted/50 group/btn"
                  >
                    <item.icon className="h-5 w-5 shrink-0" />
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {item.label}
                    </span>
                  </button>
                </QuickAddDrawer>
              );
            }
            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
                  transition-all duration-200 w-full
                  ${
                    isActive
                      ? "bg-primary/15 text-primary shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }
                `}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-col gap-1 p-2 border-t border-border/40 w-64">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium w-full transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-muted/50"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5 shrink-0" />
              ) : (
                <Moon className="h-5 w-5 shrink-0" />
              )}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
              </span>
            </button>
          )}

          {/* User Profile */}
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg">
            <div className="shrink-0">
              <UserButton />
            </div>
            <span className="text-sm font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Account
            </span>
          </div>
        </div>
      </aside>

      {/* Spacer for desktop since sidebar is fixed */}
      <div className="hidden md:block w-16 shrink-0" />

      {/* ── Mobile Bottom Tab Bar ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border/40 bg-background/95 backdrop-blur-md pb-safe">
        <nav className="flex items-center justify-around h-16">
          {navItems.filter((item) => item.href !== "/dashboard/settings").map((item) => {
            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);
            
            if (item.isAdd) {
              return (
                <QuickAddDrawer key={item.href}>
                  <button
                    className="flex flex-col items-center justify-center gap-1 flex-1 h-full text-[10px] font-medium"
                  >
                    <div className="w-12 h-12 -mt-6 rounded-full bg-primary flex items-center justify-center shadow-[0_0_15px_-3px_var(--primary)] ring-4 ring-background">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <span className="mt-0.5 whitespace-nowrap">{item.label}</span>
                  </button>
                </QuickAddDrawer>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex flex-col items-center justify-center gap-1 flex-1 h-full
                  text-[10px] font-medium transition-colors
                  ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}
                `}
              >
                <item.icon className={`h-5 w-5 ${isActive ? "text-primary" : ""}`} />
                <span className="whitespace-nowrap">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}


