"use server";

import { GoogleGenAI } from "@google/genai";
import { getUserTransactionContext } from "@/lib/actions/ai-context";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateAiDigest() {
  const context = await getUserTransactionContext();
  if (!context || context.includes("no recorded transactions")) {
    return "You don't have enough data yet. Log some transactions to get your weekly digest!";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are Kharcha, a highly intelligent financial advisor for Indian middle-income families. 
      Analyze the following transactions and generate a "Weekly Digest". 
      Highlight any anomalies (e.g., spending too much on food), sum up the general flow, and give one actionable piece of advice.
      Keep it brief, conversational, and direct. NO generic filler. Format it using clean Markdown (bolding, lists).
      
      ${context}`,
    });
    
    return response.text || "Failed to generate digest.";
  } catch (error) {
    console.error("Digest error:", error);
    return "Error generating AI digest. Please ensure your Gemini API key is correct.";
  }
}

export async function chatWithAi(messageHistory: {role: string, content: string}[]) {
  const context = await getUserTransactionContext();
  
  const systemPrompt = `You are Kharcha, a personal finance AI. You answer user questions about their money. 
  Here is their transaction history:
  
  ${context}
  
  Answer their queries directly, concisely, and based ONLY on this data. If they ask something unrelated to finance, politely steer them back.`;

  const formattedHistory = messageHistory.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }]
  }));

  try {
    const contents: any[] = [
      { role: "user", parts: [{ text: systemPrompt }] },
      { role: "model", parts: [{ text: "Understood. I will act as Kharcha and answer based on the transaction data." }] },
      ...formattedHistory
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents
    });

    return { success: true, text: response.text };
  } catch (error) {
    console.error("Chat error:", error);
    return { success: false, text: "Sorry, I encountered an error processing your query." };
  }
}
