import { jsPDF } from "jspdf";
import { formatDate, formatRupiah } from "@/lib/utils";
import type { PdfHistoryItem } from "./usePdfHistory";

export const usePdfGenerator = () => {
  const generatePdf = (data: PdfHistoryItem) => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: data.pageSize.toLowerCase(),
    });

    // Configuration
    const margin = 20;
    let y = 20;

    // Header
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text(data.title, margin, y);
    
    y += 10;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Dibuat melalui pdf generator pada : ${new Date(data.date).toLocaleString('id-ID')}`, margin, y);
    
    y += 5;
    doc.setLineWidth(0.5);
    doc.line(margin, y, 210 - margin, y);
    
    // Content
    y += 15;
    doc.setFont("helvetica", "bold");
    doc.text("Ukuran Kertas", margin, y);
    y += 7;
    doc.setFont("helvetica", "normal");
    doc.text(data.pageSize.toUpperCase(), margin, y);

    y += 15;
    doc.setFont("helvetica", "bold");
    doc.text("Nominal", margin, y);
    y += 7;
    doc.setFont("helvetica", "normal");
    doc.text(`Rp ${formatRupiah(String(data.amount))}`, margin, y);

    y += 15;
    doc.setFont("helvetica", "bold");
    doc.text("Deskripsi:", margin, y);
    y += 7;
    doc.setFont("helvetica", "normal");
    const splitDescription = doc.splitTextToSize(data.description, 170);
    doc.text(splitDescription, margin, y);

    // Save
    doc.save(`${data.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`);
  };

  return {
    generatePdf,
  };
};
