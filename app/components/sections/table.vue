<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { usePdfHistory } from "@/composables/usePdfHistory";
import { FileX } from "lucide-vue-next";
import { formatDateTime, formatRupiah } from "~/lib/utils";

const { history, removeHistory } = usePdfHistory();
</script>

<template>
  <section id="table-section" class="scroll-mt-30 lg:scroll-mt-36">
    <Card class="w-full">
      <CardHeader>
        <CardTitle>History Generate</CardTitle>
        <CardDescription>
          Berikut adalah daftar laporan PDF yang telah Anda buat sebelumnya.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader class="bg-gray-200">
            <TableRow>
              <TableHead class="w-6 border-r border-r-gray-300"> No </TableHead>
              <TableHead>Judul Laporan</TableHead>
              <TableHead>Ukuran Halaman</TableHead>
              <TableHead> Nominal </TableHead>
              <TableHead> Tanggal </TableHead>
              <TableHead class="w-24 text-center"> Aksi </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-if="history.length === 0">
              <TableCell colspan="6" class="h-60 text-center">
                <Empty>
                   <EmptyMedia class="bg-slate-100 p-4 rounded-full">
                      <FileX class="size-8 text-slate-400" />
                   </EmptyMedia>
                   <EmptyHeader>
                      <EmptyTitle>Belum ada data</EmptyTitle>
                      <EmptyDescription>
                         Anda belum membuat document PDF apapun. Silakan generate form di atas.
                      </EmptyDescription>
                   </EmptyHeader>
                </Empty>
              </TableCell>
            </TableRow>
            <TableRow
              v-else
              v-for="({ id, title, pageSize, amount, date }, index) in history"
              :key="id"
              :index="index"
            >
              <TableCell class="border-r border-r-gray-300 font-medium">
                {{ index + 1 }}
              </TableCell>
              <TableCell>{{ title }}</TableCell>
              <TableCell class="uppercase">{{ pageSize }}</TableCell>
              <TableCell> Rp {{ formatRupiah(String(amount)) }} </TableCell>
              <TableCell>
                {{ formatDateTime(date) }}
              </TableCell>
              <TableCell class="flex items-center justify-end gap-2">
                <Button variant="link">Lihat</Button>
                <Button variant="destructive" @click="removeHistory(id)"
                  >Hapus</Button
                >
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </section>
</template>
