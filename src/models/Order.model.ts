import { CartProduct } from './Product.model'

export interface Order {
    date: Date; 
    client: string;
    items: CartProduct[];
    shippingInformation: ShippingInformation;
    summaryInformation: SummaryInformation;
}

export interface SummaryInformation {
    totalItems: number;
    totalPrice: number;
    shippingPrice: number; 
    taxes: number,
    totalNetPrice: number
}

export interface ShippingInformation {
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    address: string;
    phone: string;
    delivery: string;
}