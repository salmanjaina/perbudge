import { SettingsPanel } from "@/components/dashboard/settings-panel";

export default function SettingsPage() {
  return (
    <div className="space-y-6 p-4 pt-6 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Settings</h1>
      <SettingsPanel />
    </div>
  );
}
