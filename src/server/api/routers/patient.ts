import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const patientRouter = createTRPCRouter({
  all: publicProcedure
    .input(
      z.object({
        page: z.number().optional(),
        limit: z.number().optional(),
      })
    )
    .query(async ({ input, ctx }) => {
      return ctx.prisma.patient.findMany({
        take: input.limit,
        skip: input.page,
      });
    }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      return ctx.prisma.patient.findUnique({ where: { id: input.id } });
    }),
});
