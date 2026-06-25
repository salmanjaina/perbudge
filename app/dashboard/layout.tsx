import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { DashboardNavigation } from "@/components/dashboard/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background">
      <DashboardNavigation />
      <div className="flex-1 flex flex-col min-w-0 pb-20 md:pb-0 w-full">
        {children}
      </div>
    </div>
  );
}
