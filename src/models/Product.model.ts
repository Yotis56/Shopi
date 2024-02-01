import { Category } from "./Category.model";

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    category: Category;
}

export interface CartProduct extends Product {
    quantity: number;
}

export type AppProduct = Product | Record<string, never>