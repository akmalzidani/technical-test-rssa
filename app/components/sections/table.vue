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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "vue-sonner";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
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
              <TableHead> Aksi </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow
              v-for="(invoice, index) in invoices"
              :key="invoice.invoice"
            >
              <TableCell
                class="border-r border-r-gray-300 font-medium"
                :isEven="index % 2 === 0"
              >
                {{ index + 1 }}
              </TableCell>
              <TableCell :isEven="index % 2 === 0">{{
                invoice.paymentStatus
              }}</TableCell>
              <TableCell :isEven="index % 2 === 0">{{
                invoice.paymentMethod
              }}</TableCell>
              <TableCell :isEven="index % 2 === 0">
                {{ invoice.totalAmount }}
              </TableCell>
              <TableCell :isEven="index % 2 === 0">
                {{ invoice.totalAmount }}
              </TableCell>
              <TableCell :isEven="index % 2 === 0">
                {{ invoice.totalAmount }}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </section>
</template>
