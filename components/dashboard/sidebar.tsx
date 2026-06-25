"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import {
  LayoutDashboard,
  Sparkles,
  PlusCircle,
  List,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { QuickAddDrawer } from "@/components/dashboard/quick-add-drawer";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/transactions", label: "Transactions", icon: List },
  { href: "/dashboard/add", label: "Add", icon: PlusCircle, isAdd: true },
  { href: "/dashboard/insights", label: "Insights", icon: Sparkles },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function DashboardNavigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* ── Desktop Sidebar ── */}
      <aside className="hidden md:flex md:sticky md:top-0 md:h-screen w-64 shrink-0 flex-col border-r border-border/40 bg-background z-40">
        <div className="h-16 flex items-center px-6 border-b border-border/40">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">₹</span>
            </div>
            <span className="font-bold text-xl tracking-tight">Kharcha</span>
          </Link>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            if (item.isAdd) {
              return (
                <QuickAddDrawer key={item.href}>
                  <button
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium w-full transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    {item.label}
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
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-primary/15 text-primary shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }
                `}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 px-4 py-4 border-t border-border/40">
          <UserButton />
          <span className="text-sm text-muted-foreground truncate">Account</span>
        </div>
      </aside>

      {/* ── Mobile Top Bar ── */}
      <div className="md:hidden flex items-center justify-between h-14 px-4 border-b border-border/40 bg-background sticky top-0 z-40 w-full">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(true)}
            className="-ml-2"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <span className="font-bold text-lg text-primary">Kharcha</span>
        </div>
        <div>
          <UserButton />
        </div>
      </div>

      {/* ── Mobile Slide-out Drawer ── */}
      {mounted && mobileOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="md:hidden fixed top-0 left-0 z-[70] h-full w-64 bg-background border-r border-border/40 flex flex-col animate-in slide-in-from-left duration-200 shadow-2xl">
            <div className="h-14 flex items-center justify-between px-4 border-b border-border/40">
              <span className="font-bold text-lg text-primary">Kharcha</span>
              <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} className="-mr-2">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex-1 px-3 py-4 space-y-1">
              {navItems.map((item) => {
                if (item.isAdd) {
                  return (
                    <QuickAddDrawer key={item.href}>
                      <button
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium w-full transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      >
                        <item.icon className="h-4 w-4 shrink-0" />
                        {item.label}
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
                    onClick={() => setMobileOpen(false)}
                    className={`
                      flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
                      transition-all duration-200
                      ${
                        isActive
                          ? "bg-primary/15 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }
                    `}
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </aside>
        </>
      )}

      {/* ── Mobile Bottom Tab Bar ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border/40 bg-background/95 backdrop-blur-md">
        <nav className="flex items-center justify-around h-16 pb-safe">
          {navItems.map((item) => {
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
                    <div className="w-12 h-12 -mt-6 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 ring-4 ring-background">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <span className="mt-0.5">{item.label}</span>
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
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

