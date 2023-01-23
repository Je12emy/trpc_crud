import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const patientRouter = createTRPCRouter({
  all: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(1000).nullish(),
        cursor: z.string().nullish(),
      })
    )
    .query(async ({ input, ctx }) => {
      const limit = input.limit ?? 1000;
      const { cursor } = input;

      const patients = await ctx.prisma.patient.findMany({
        take: limit + 1,
        cursor: cursor ? { id: cursor } : undefined,
      });

      let nextCursor: typeof cursor | undefined = undefined;
      if (patients.length > limit) {
        const nextItem = patients.pop();
        nextCursor = nextItem?.id;
      }

      return {
        patients,
        nextCursor,
      };
    }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      return ctx.prisma.patient.findUnique({ where: { id: input.id } });
    }),
});
