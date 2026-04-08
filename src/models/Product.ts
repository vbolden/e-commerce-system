import { calculateDiscount } from "../utils/discountCalculator.js";
import { calculateTax } from "../utils/taxCalculator.ts";

export class Product {
    id: number;
    title: string;
    category: string;
    price: number;
    discountPercentage: number;

    constructor(id: number, title: string, category: string, price: number, discountPercentage: number) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
    }

    displayDetails(): string {
        const discountedPrice = this.getPriceWithDiscount();
        const taxAmount = calculateTax(discountedPrice, this.category);
        const finalPrice = discountedPrice + taxAmount;
        
        return `
    ---------------------------
    ID: ${this.id}
    Name: ${this.title}

    Price: $${this.price}
    Discount: ${this.discountPercentage}%
    Price After Discount: ${discountedPrice.toFixed(2)}

    Tax: $${taxAmount.toFixed(2)}
    Final Price: $${finalPrice.toFixed(2)}
    ----------------------------
        `
    }

    getPriceWithDiscount(): number {
        return this.price - calculateDiscount(this.price, this.discountPercentage)
    }
}