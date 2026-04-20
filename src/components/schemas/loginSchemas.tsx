import * as z from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, "Username minimal 3 karakter"),

  email: z
    .string()
    .trim()
    .email("Format email tidak valid"),

  password: z
    .string()
    .min(8, "Password minimal 8 karakter"),

  category: z
    .string()
    .refine((val) => val !== "", {
      message: "Silakan pilih kategori event",
    }),

  bio: z
    .string()
    .trim()
    .min(10, "Bio minimal 10 karakter"),
});

export type LoginFormData = z.infer<typeof loginSchema>;