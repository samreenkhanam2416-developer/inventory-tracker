export interface Product {
  id: number;
  name: string;
  sku: string;
  category: string;
  quantity: number;
  lowStockThreshold: number;
  unitPrice: number;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export type StockStatus = 'in-stock' | 'low-stock' | 'out-of-stock';

export function getStockStatus(p: Product): StockStatus {
  if (p.quantity === 0) return 'out-of-stock';
  if (p.quantity <= p.lowStockThreshold) return 'low-stock';
  return 'in-stock';
}
