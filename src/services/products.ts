import axios from "../lib/axios"

export type ProductResponse = {
  total_count: number
  page: number
  items: Product[]
}
export interface Product {
  id: number;
  taxable: boolean;
  shippable: boolean;
  countable: boolean;
  cookable: boolean;
  composite: boolean;
  scalable: boolean;
  tracking: boolean;
  sellable: boolean;
  vatPercent?: null;
  name: string;
  technicalCardId?: null;
  writeOffMethod: number;
  countInBox?: null;
  zone: number;
  unit: string;
  properties?: (PropertiesEntityOrProductPropertiesEntity)[] | null;
  videos?: (null)[] | null;
  productProperties?: (PropertiesEntityOrProductPropertiesEntity)[] | null;
  barcode: string;
  showMarket: boolean;
  lastUpdateTime: string;
  technicalCard: boolean;
  baseUnitRatio?: null;
  product: number;
  sku: string;
  crossSellTags?: null;
  category: number;
  supplier: string;
  supplierId: number;
  productName: string;
  brand: number;
  description: string;
  importProperties?: (null)[] | null;
  recSellPrice?: null;
  recSupplierPrice?: null;
  correctionType: number;
  shortDescription: string;
  stocks?: (StocksEntity)[] | null;
  images?: (ImagesEntity)[] | null;
  analogs?: (null)[] | null;
  modifiers?: (null)[] | null;
  tags?: (null)[] | null;
}
export interface PropertiesEntityOrProductPropertiesEntity {
  name: string;
  value: string;
}
export interface StocksEntity {
  id: string;
  tracking: boolean;
  countable: boolean;
  composite: boolean;
  properties?: (null)[] | null;
  sellPrice: SellPrice;
  supplyPrice: SupplyPrice;
  imported: string;
  impport: number;
  originalImport: number;
  transfer?: null;
  importCount: string;
  transferCount: string;
  originalImportCount: string;
  supplier: number;
  count: number;
  location: number;
  expirationDate?: null;
}
export interface SellPrice {
  UZS: number;
  USD: number;
  ratio: Ratio;
  first: string;
}
export interface Ratio {
  "UZS/USD": number;
}
export interface SupplyPrice {
  UZS: number;
  USD: number;
  ratio: Ratio1;
  first: string;
}
export interface Ratio1 {
  "USD/UZS": number;
}
export interface ImagesEntity {
  id: number;
  brand: number;
  zone: number;
  originalName: string;
  name: string;
  extension: string;
  mimeType: string;
  createdAt: string;
  updatedAt: string;
  sort: number;
  urls: Urls;
}
export interface Urls {
  "50x_"?: null;
  "100x_"?: null;
  "150x_"?: null;
  "300x_"?: null;
  "500x_"?: null;
  "800x_"?: null;
  original?: null;
}


export const queryProducts = async ({ page, token }: { page: number, token: string }) => {
  const { data } = await axios.get<ProductResponse>("/variations", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      page,
      size: 10,
    },
  })
  return data
}
