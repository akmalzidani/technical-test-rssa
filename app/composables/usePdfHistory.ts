import { useLocalStorage } from "@vueuse/core";
import type { PdfFormValues } from "@/lib/schemas/pdf-form";

export interface PdfHistoryItem extends PdfFormValues {
  id: string;
  date: number;
}

export const usePdfHistory = () => {
  const history = useLocalStorage<PdfHistoryItem[]>("pdf-generator-history", []);

  const addHistory = (item: PdfFormValues) => {
    history.value.unshift({
      ...item,
      id: crypto.randomUUID(),
      date: Date.now(),
    });
  };

  const removeHistory = (id: string) => {
    history.value = history.value.filter((item) => item.id !== id);
  };

  const clearHistory = () => {
    history.value = [];
  };

  return {
    history,
    addHistory,
    removeHistory,
    clearHistory,
  };
};
