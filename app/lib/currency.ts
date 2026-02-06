export function formatCurrency(value: number): string {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function parseCurrency(value: string): number {
  const cleaned = value.replace(/\D/g, "");
  return cleaned === "" ? 0 : parseInt(cleaned, 10);
}
