export interface Category {
  id: string;
  label: string;
  emoji: string;
  color: string;
}

export const CATEGORIES: Category[] = [
  { id: "food", label: "Food", emoji: "🍔", color: "oklch(0.75 0.18 55)" },
  { id: "transport", label: "Transport", emoji: "🚕", color: "oklch(0.70 0.15 250)" },
  { id: "rent", label: "Rent", emoji: "🏠", color: "oklch(0.65 0.12 290)" },
  { id: "bills", label: "Bills", emoji: "📱", color: "oklch(0.72 0.16 200)" },
  { id: "entertainment", label: "Entertainment", emoji: "🎮", color: "oklch(0.70 0.20 330)" },
  { id: "shopping", label: "Shopping", emoji: "🛍️", color: "oklch(0.68 0.18 20)" },
  { id: "health", label: "Health", emoji: "💊", color: "oklch(0.72 0.15 150)" },
  { id: "education", label: "Education", emoji: "📚", color: "oklch(0.65 0.14 270)" },
  { id: "salary", label: "Salary", emoji: "💰", color: "oklch(0.78 0.16 145)" },
  { id: "others", label: "Others", emoji: "🧾", color: "oklch(0.60 0.08 260)" },
];

export function getCategoryByName(name: string): Category | undefined {
  return CATEGORIES.find(
    (c) => c.id === name.toLowerCase() || c.label.toLowerCase() === name.toLowerCase()
  );
}

export function getCategoryColor(name: string): string {
  return getCategoryByName(name)?.color || "oklch(0.60 0.08 260)";
}

export function getCategoryEmoji(name: string): string {
  return getCategoryByName(name)?.emoji || "🧾";
}
