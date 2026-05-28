'use server';
/**
 * @fileOverview A Genkit flow for generating creative product names and optimized descriptions.
 *
 * - generateProductDescription - A function that generates a product name and description based on ingredients/tags.
 * - GenerateProductDescriptionInput - The input type for the generateProductDescription function.
 * - GenerateProductDescriptionOutput - The return type for the generateProductDescription function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateProductDescriptionInputSchema = z.object({
  ingredients: z.array(z.string()).describe('A list of key ingredients for the product.').optional(),
  tags: z.array(z.string()).describe('A list of descriptive tags for the product, e.g., "handmade", "organic", "dessert".').optional(),
  productType: z.string().describe('The type of product being described, e.g., "cake", "handmade soap", "drink".'),
});
export type GenerateProductDescriptionInput = z.infer<typeof GenerateProductDescriptionInputSchema>;

const GenerateProductDescriptionOutputSchema = z.object({
  productName: z.string().describe('A creative and enticing name for the product.'),
  productDescription: z.string().describe('An optimized and appealing description for the product, highlighting its key features and benefits.'),
});
export type GenerateProductDescriptionOutput = z.infer<typeof GenerateProductDescriptionOutputSchema>;

export async function generateProductDescription(input: GenerateProductDescriptionInput): Promise<GenerateProductDescriptionOutput> {
  return generateProductDescriptionFlow(input);
}

const generateProductDescriptionPrompt = ai.definePrompt({
  name: 'generateProductDescriptionPrompt',
  input: { schema: GenerateProductDescriptionInputSchema },
  output: { schema: GenerateProductDescriptionOutputSchema },
  prompt: `You are a creative marketing expert specializing in product branding and description writing for small businesses. Your goal is to generate an enticing product name and an optimized description for a new product.

Consider the following information:
Product Type: {{{productType}}}

{{#if ingredients}}
Ingredients: {{#each ingredients}}- {{{this}}}{{/each}}
{{/if}}

{{#if tags}}
Tags: {{#each tags}}- {{{this}}}{{/each}}
{{/if}}

Based on the provided details, generate a creative product name and a compelling product description that highlights its unique selling points and appeals to potential customers. The description should be engaging and informative.
`,
});

const generateProductDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProductDescriptionFlow',
    inputSchema: GenerateProductDescriptionInputSchema,
    outputSchema: GenerateProductDescriptionOutputSchema,
  },
  async (input) => {
    const { output } = await generateProductDescriptionPrompt(input);
    if (!output) {
      throw new Error('Failed to generate product name and description.');
    }
    return output;
  }
);
