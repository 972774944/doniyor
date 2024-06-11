import { categories } from "./data";
export type Product = {
  id: number;
  name: string;
  image: string;
  desc: string;
  price: number;
  categoriesId: number;
};

export type Products = Product[];
