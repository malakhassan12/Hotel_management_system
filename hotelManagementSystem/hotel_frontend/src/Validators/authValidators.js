import { z } from "zod";

// ====================== Login Schema ======================
export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),

  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),

  role: z.enum(["Customer", "Receptionist", "Admin"], {
    required_error: "Role selection is required",
  }),
});

// ====================== Register Schema ======================
export const registerSchema = z
  .object({
    fullName: z
      .string({ required_error: "Full name is required" })
      .min(3, "Name must be at least 3 characters"),

    email: z
      .string({ required_error: "Email is required" })
      .email("Invalid email address"),

    password: z
      .string({ required_error: "Password is required" })
      .min(6, "Password must be at least 6 characters"),

    confirmPassword: z
      .string({ required_error: "Confirm password is required" }),

    role: z.enum(["Customer", "Receptionist", "Admin"], {
      required_error: "Role selection is required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });