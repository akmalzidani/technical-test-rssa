<script setup lang="ts">
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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

const PAGE_SIZES = [
  { label: "A4", value: "a4" },
  { label: "A5", value: "a5" },
  { label: "Letter", value: "letter" },
];

const formState = reactive({
  selectedPageSize: "a4",
  judulLaporan: "",
  deskripsi: "",
  nominal: "",
});
</script>

<template>
  <section id="form-section">
    <Card class="w-full">
      <CardHeader>
        <CardTitle>Generate PDF Form</CardTitle>
        <CardDescription>
          Isi form di bawah untuk membuat laporan PDF sesuai kebutuhan Anda.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div class="grid w-full grid-cols-12 items-center gap-4">
            <div
              class="col-span-5 flex flex-col space-y-1.5 md:col-span-3 lg:col-span-2"
            >
              <Label for="ukuran_halaman">Ukuran halaman</Label>
              <Select v-model="formState.selectedPageSize">
                <SelectTrigger class="relative top-0.5 w-full">
                  <SelectValue placeholder="Pilih ukuran halaman" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem
                      v-for="value in PAGE_SIZES"
                      :value="value.value"
                    >
                      {{ value.label }}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div
              class="col-span-7 flex flex-col space-y-1.5 md:col-span-9 lg:col-span-10"
            >
              <Label for="judul_laporan">Judul Laporan</Label>
              <Input
                id="judul_laporan"
                type="text"
                placeholder="Masukkan judul laporan..."
                v-model="formState.judulLaporan"
              />
            </div>
            <div class="col-span-full flex flex-col space-y-1.5">
              <Label for="deskripsi">Deskripsi / Isi Laporan</Label>
              <Textarea
                id="deskripsi"
                placeholder="Masukkan isi laporan..."
                v-model="formState.deskripsi"
              />
            </div>
            <div
              class="col-span-7 flex flex-col space-y-1.5 md:col-span-5 lg:col-span-3"
            >
              <Label for="nominal">Nominal (Rp)</Label>
              <InputGroup>
                <InputGroupAddon>
                  <InputGroupText>Rp</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput placeholder="0" v-model="formState.nominal" />
              </InputGroup>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex justify-end">
        <Button class="cursor-pointer px-8 py-6" variant="destructive"
          >Generate PDF 📄</Button
        >
      </CardFooter>
    </Card>
  </section>
</template>
