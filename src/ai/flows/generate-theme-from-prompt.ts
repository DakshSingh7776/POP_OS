'use server';
/**
 * @fileOverview AI-powered theme generation flow.
 *
 * - generateTheme - A function that generates a theme based on a text prompt.
 * - GenerateThemeInput - The input type for the generateTheme function.
 * - GenerateThemeOutput - The return type for the generateTheme function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateThemeInputSchema = z.object({
  themePrompt: z
    .string()
    .describe('A text prompt describing the desired theme style (e.g., \'retro\', \'futuristic\', \'minimalist\').'),
});
export type GenerateThemeInput = z.infer<typeof GenerateThemeInputSchema>;

const GenerateThemeOutputSchema = z.object({
  colorPalette: z
    .array(z.string())
    .describe('An array of color hex codes suitable for the theme.'),
  visualStyles: z
    .string()
    .describe('Suggested visual styles and elements to align with the theme.'),
});
export type GenerateThemeOutput = z.infer<typeof GenerateThemeOutputSchema>;

export async function generateTheme(input: GenerateThemeInput): Promise<GenerateThemeOutput> {
  return generateThemeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateThemePrompt',
  input: {schema: GenerateThemeInputSchema},
  output: {schema: GenerateThemeOutputSchema},
  prompt: `You are a theme generation AI expert. You generate color palettes and visual style suggestions for UI themes, based on user prompts.

  The user will provide a theme style prompt. You will respond with:
  1.  A color palette comprised of hex codes.
  2.  Visual style suggestions that align with the theme.

  Theme Prompt: {{{themePrompt}}}

  Output:
  {
    "colorPalette": ["#RRGGBB", "#RRGGBB", ...],
    "visualStyles": "A description of visual styles that fit the theme"
  }`,
});

const generateThemeFlow = ai.defineFlow(
  {
    name: 'generateThemeFlow',
    inputSchema: GenerateThemeInputSchema,
    outputSchema: GenerateThemeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
