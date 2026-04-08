import { Product } from "../models/Product.js";

export function calculateTax(price: number, category: string) {
    if(category === "grocery") {
        const groceryTax = price * 0.03
        return groceryTax
    } else {
        const defaultTax = price * 0.0475
        return defaultTax
    }
}