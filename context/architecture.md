# Architecture Context

## Stack

| Layer | Technology | Role |
|---|---|---|
| Framework | Next.js 16 (App Router) | Full-stack framework, SSR, server and client components |
| Auth | Clerk | Session management, role-based access |
| Database | MongoDB | Document storage for transactions, loans, users |
| AI | Google Gemini 2.5 Flash | Natural language parsing, insights, chat interface |
| Charts | Recharts | Data visualization (bar charts, donut charts) |
| Deployment | Docker + Nginx | Containerization and reverse proxy |
| Styling | Tailwind CSS + ShadCN | Design system with glassmorphism and micro-animations |

## Data Model — Top-Level Collections

- `transactions`: `{ amount, category, type, paymentMode, note, tags, counterparty, date, isRecurring }`
- `users`: `{ clerkId, email, firstName, lastName, monthlyBudget }`
- `loans`: `{ lender, principal, rate, tenure, paidEMIs, nextDue }`
- `investments`: `{ type, amount, startDate, maturityDate, goal }`
- `goals`: `{ name, targetAmount, targetDate, linkedInvestments[] }`
- `blogs`: `{ title, slug, content (MDX), tags, aiSummary }`

## Integration Patterns

- **AI Parsing (Gemini)**: User input from the quick-add modal is sent to Gemini Flash for real-time extraction of transaction intent, amount, category, and counterparty.
- **Authentication**: Clerk handles user identity. The Clerk user ID is linked to the MongoDB `users` collection to scope all financial data securely.

## System Boundaries

- `app/` — Route definitions, App Router layouts, and API routes.
- `components/` — Reusable UI components and features (e.g., TransactionModal, DashboardCards).
- `lib/` — Core utilities, database connection logic, and AI service wrappers.
- `context/` — Project documentation and AI rules.

## Recommended Build Order

1. Clerk auth setup + MongoDB schema design.
2. Transaction input UI (mobile bottom sheet + web modal) and NLP parsing via Gemini Flash.
3. Dashboard (cash flow, categories, who-owes-whom, net worth).
4. AI digest + ask-your-data chat.
5. Loan module → Investment tracker → Blog.
