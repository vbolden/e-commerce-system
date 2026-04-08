import { Product } from "../models/Product.js";

export function calculateDiscount(price: number, discountPercentage: number) {
    const discountAmount = price * discountPercentage;
    return discountAmount
}