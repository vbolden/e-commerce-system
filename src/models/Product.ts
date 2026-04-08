import { calculateDiscount } from "../utils/discountCalculator.js";

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
        return `${this.id} | ${this.title} | Category: ${this.category} | Price: $${this.price}`
    }

    getPriceWithDiscount(): number {
        return this.price - calculateDiscount(this.price, this.discountPercentage)
    }
}