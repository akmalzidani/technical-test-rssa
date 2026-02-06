<script setup lang="ts">
import { Loader2 } from "lucide-vue-next";
import { useForm } from "vee-validate";
import { toast } from "vue-sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import CurrencyInput from "@/components/ui/currency-input/CurrencyInput.vue";
import { pdfFormSchema, type PdfFormValues } from "@/lib/schemas/pdf-form";
import { usePdfHistory } from "@/composables/usePdfHistory";

const emit = defineEmits<{
  (e: "change", values: Partial<PdfFormValues>): void;
}>();

const PAGE_SIZES = [
  { label: "A4", value: "a4" },
  { label: "A5", value: "a5" },
  { label: "Letter", value: "letter" },
] as const;

const { addHistory } = usePdfHistory();

const { handleSubmit, resetForm, isSubmitting, values } = useForm({
  validationSchema: pdfFormSchema,
  initialValues: {
    pageSize: "a4" as const,
    title: "",
    description: "",
    amount: 0,
  },
});

watch(values, (newValues) => {
  emit("change", newValues);
}, { deep: true });

const onSubmit = handleSubmit(async (formValues) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", formValues);
    
    addHistory(formValues);
    
    toast.success("PDF berhasil di-generate");
    resetForm();
  } catch {
    toast.error("Gagal generate PDF. Silakan coba lagi.");
  }
});
</script>

<template>
  <section id="form-section" class="scroll-mt-40">
    <Card class="w-full">
      <CardHeader>
        <CardTitle>Generate PDF Form</CardTitle>
        <CardDescription>
          Isi form di bawah untuk membuat laporan PDF sesuai kebutuhan Anda.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form @submit="onSubmit">
          <div class="grid w-full grid-cols-12 items-start gap-4">
            <FormField v-slot="{ componentField }" name="pageSize">
              <FormItem
                class="col-span-5 flex flex-col space-y-1.5 md:col-span-3 lg:col-span-2"
              >
                <FormLabel>Ukuran halaman</FormLabel>
                <Select v-bind="componentField">
                  <FormControl>
                    <SelectTrigger class="relative top-0.5 w-full">
                      <SelectValue placeholder="Pilih ukuran halaman" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem
                        v-for="size in PAGE_SIZES"
                        :key="size.value"
                        :value="size.value"
                      >
                        {{ size.label }}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="title">
              <FormItem
                class="col-span-7 flex flex-col space-y-1.5 md:col-span-9 lg:col-span-10"
              >
                <FormLabel>Judul Laporan</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Masukkan judul laporan..."
                    v-bind="componentField"
                    :maxlength="100"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="description">
              <FormItem class="col-span-full flex flex-col space-y-1.5">
                <FormLabel>Deskripsi / Isi Laporan</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Masukkan isi laporan..."
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ value, handleChange }" name="amount">
              <FormItem
                class="col-span-7 flex flex-col space-y-1.5 md:col-span-5 lg:col-span-3"
              >
                <FormLabel>Nominal (Rp)</FormLabel>
                <FormControl>
                  <CurrencyInput
                    :model-value="value"
                    @update:model-value="handleChange"
                    placeholder="0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex justify-end">
        <Button
          class="px-8 py-6"
          variant="destructive"
          :disabled="isSubmitting"
          @click="onSubmit"
        >
          <Loader2 v-if="isSubmitting" class="mr-2 h-4 w-4 animate-spin" />
          {{ isSubmitting ? "Generating..." : "Generate PDF 📄" }}
        </Button>
      </CardFooter>
    </Card>
  </section>
</template>
