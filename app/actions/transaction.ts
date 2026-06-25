"use server";

import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function parseTransactionNLP(text: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Parse the following transaction text into a structured JSON object. Focus on typical Indian spending contexts.
Text: "${text}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            amount: { type: Type.NUMBER, description: "The absolute numeric amount of the transaction." },
            category: { type: Type.STRING, description: "A logical category (e.g., Food, Transport, Rent, Salary, Entertainment, Shopping, Health, Education, Bills, Others)." },
            type: { type: Type.STRING, enum: ["income", "expense", "transfer"], description: "Whether this is an income, expense, or transfer." },
            paymentMode: { type: Type.STRING, enum: ["cash", "credit_card"], description: "Payment mode. Use 'credit_card' only if the text explicitly mentions credit card. For UPI, bank, cash, or any other mode use 'cash'." },
            counterparty: { type: Type.STRING, description: "Who the money was paid to or received from (e.g., Rahul, Starbucks). Leave empty if not applicable." },
            tags: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Any relevant tags." },
            isRecurring: { type: Type.BOOLEAN, description: "True if the text implies this is a recurring payment (e.g., 'monthly', 'subscription')." }
          },
          required: ["amount", "category", "type", "paymentMode", "isRecurring"],
        },
      },
    });

    if (!response.text) {
      throw new Error("Failed to parse transaction");
    }

    const parsedData = JSON.parse(response.text);
    return { success: true, data: parsedData };
  } catch (error) {
    console.error("NLP Parse Error:", error);
    return { success: false, error: "Could not understand the transaction." };
  }
}

