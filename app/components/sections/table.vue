<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate, formatRupiah } from "~/lib/utils";

const invoices = [
  {
    pageSize: "a4",
    title: "Laporan Penjualan Q1 2026",
    description:
      "Rekapitulasi penjualan produk untuk kuartal pertama tahun 2026",
    amount: "15750000",
    date: new Date("2026-01-15").getTime(),
  },
  {
    pageSize: "a4",
    title: "Laporan Keuangan Bulanan",
    description: "Laporan keuangan perusahaan bulan Januari 2026",
    amount: "42500000",
    date: new Date("2026-01-20").getTime(),
  },
  {
    pageSize: "letter",
    title: "Invoice Klien ABC Corp",
    description: "Pembayaran jasa konsultasi dan pengembangan sistem",
    amount: "28900000",
    date: new Date("2026-01-25").getTime(),
  },
  {
    pageSize: "a5",
    title: "Laporan Inventory",
    description: "Stok barang dan rekapitulasi pembelian bahan baku",
    amount: "8750000",
    date: new Date("2026-02-01").getTime(),
  },
  {
    pageSize: "a4",
    title: "Laporan Pengeluaran Operasional",
    description: "Rincian biaya operasional kantor dan utilities",
    amount: "12300000",
    date: new Date("2026-02-03").getTime(),
  },
  {
    pageSize: "a4",
    title: "Tagihan Vendor XYZ",
    description: "Pembayaran supplier untuk material proyek",
    amount: "35600000",
    date: new Date("2026-02-04").getTime(),
  },
  {
    pageSize: "letter",
    title: "Laporan Pajak",
    description: "Laporan pajak bulanan dan PPh 21 karyawan",
    amount: "6750000",
    date: new Date("2026-02-05").getTime(),
  },
  {
    pageSize: "a4",
    title: "Reimbursement Tim Sales",
    description: "Klaim perjalanan dinas dan entertainment klien",
    amount: "4850000",
    date: new Date("2026-02-06").getTime(),
  },
];
</script>

<template>
  <section id="table-section">
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
            <TableRow
              v-for="({ title, pageSize, amount, date }, index) in invoices"
              :key="index"
              :index="index"
            >
              <TableCell class="border-r border-r-gray-300 font-medium">
                {{ index + 1 }}
              </TableCell>
              <TableCell>{{ title }}</TableCell>
              <TableCell class="uppercase">{{ pageSize }}</TableCell>
              <TableCell> Rp {{ formatRupiah(amount) }} </TableCell>
              <TableCell>
                {{ formatDate(date) }}
              </TableCell>
              <TableCell class="flex items-center justify-end gap-2">
                <Button variant="link">Lihat</Button>
                <Button variant="destructive">Download </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </section>
</template>
