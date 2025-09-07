'use server';

import { generateTheme as generateThemeFlow, type GenerateThemeInput, type GenerateThemeOutput } from '@/ai/flows/generate-theme-from-prompt';

export async function generateTheme(input: GenerateThemeInput): Promise<GenerateThemeOutput> {
  try {
    const output = await generateThemeFlow(input);
    return output;
  } catch (error) {
    console.error("Error in generateTheme server action:", error);
    throw new Error("Failed to connect to the AI service. Please try again later.");
  }
}
