import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const formSchemaObject = z.object({
  pageSize: z.enum(["a4", "a5", "letter"], {
    required_error: "Ukuran halaman wajib dipilih",
  }),
  title: z
    .string({ required_error: "Judul laporan wajib diisi" })
    .min(5, "Judul minimal 5 karakter")
    .max(100, "Judul maksimal 100 karakter"),
  description: z
    .string({ required_error: "Deskripsi wajib diisi" })
    .min(10, "Deskripsi minimal 10 karakter"),
  amount: z
    .number({ required_error: "Nominal wajib diisi" })
    .min(0, "Nominal minimal Rp 0"),
});

export const pdfFormSchema = toTypedSchema(formSchemaObject);
export type PdfFormValues = z.infer<typeof formSchemaObject>;
