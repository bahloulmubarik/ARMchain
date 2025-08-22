import {
  createCallerFactory,
  createTRPCRouter,
  baseProcedure,
} from "~/server/trpc/main";

import { aiSearch } from "~/server/trpc/procedures/aiSearch";

export const appRouter = createTRPCRouter({
  // when we add a real procedure, remove this placeholder
  placeholderProcedure: baseProcedure.query(() => {
    return "placeholder";
  }),
  aiSearch,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
