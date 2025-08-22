import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { generateText } from "ai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { baseProcedure } from "~/server/trpc/main";
import { env } from "~/server/env";

export const aiSearch = baseProcedure
  .input(z.object({
    query: z.string().min(1, "Search query cannot be empty").max(500, "Search query too long")
  }))
  .mutation(async ({ input }) => {
    try {
      const openrouter = createOpenRouter({
        apiKey: env.OPENROUTER_API_KEY
      });

      const model = openrouter("openai/gpt-4o");

      const { text } = await generateText({
        model,
        system: "You are a helpful AI assistant for ARMChain, a blockchain platform. Provide accurate, concise, and helpful responses to user queries about blockchain, funding, development, and related topics. Keep responses under 300 words and format them clearly.",
        prompt: input.query,
      });

      return {
        result: text,
        query: input.query,
      };
    } catch (error) {
      console.error("AI Search Error:", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to generate AI response. Please try again.",
      });
    }
  });
