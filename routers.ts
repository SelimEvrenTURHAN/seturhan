import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { createFile, getUserFiles, getFileById, deleteFile } from "./db";
import { storagePut } from "./storage";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  files: router({
    upload: protectedProcedure
      .input(z.object({
        fileName: z.string(),
        fileData: z.string(),
        mimeType: z.string(),
        description: z.string().optional(),
        isPublic: z.boolean().default(false),
      }))
      .mutation(async ({ ctx, input }) => {
        try {
          const buffer = Buffer.from(input.fileData, 'base64');
          const fileSize = buffer.length;
          const fileKey = `${ctx.user.id}-files/${Date.now()}-${input.fileName}`;
          const { url } = await storagePut(fileKey, buffer, input.mimeType);
          const file = await createFile({
            userId: ctx.user.id,
            fileName: input.fileName,
            fileKey,
            fileUrl: url,
            mimeType: input.mimeType,
            fileSize,
            description: input.description,
            isPublic: input.isPublic ? 1 : 0,
          });
          return { success: true, file };
        } catch (error) {
          console.error('File upload error:', error);
          throw new Error('Dosya yukleme basarisiz');
        }
      }),
    list: protectedProcedure.query(async ({ ctx }) => {
      return await getUserFiles(ctx.user.id);
    }),
    get: protectedProcedure
      .input(z.object({ fileId: z.number() }))
      .query(async ({ ctx, input }) => {
        const file = await getFileById(input.fileId);
        if (!file) return null;
        if (file.userId !== ctx.user.id && ctx.user.role !== 'admin') {
          throw new Error('Yetkiniz yok');
        }
        return file;
      }),
    delete: protectedProcedure
      .input(z.object({ fileId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        const file = await getFileById(input.fileId);
        if (!file) throw new Error('Dosya bulunamadi');
        if (file.userId !== ctx.user.id && ctx.user.role !== 'admin') {
          throw new Error('Yetkiniz yok');
        }
        const success = await deleteFile(input.fileId);
        return { success };
      }),
  }),
});

export type AppRouter = typeof appRouter;
