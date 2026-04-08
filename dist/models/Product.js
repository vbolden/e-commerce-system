import { calculateDiscount } from "../utils/discountCalculator.js";
import { calculateTax } from "../utils/taxCalculator.js";
export class Product {
    id;
    title;
    category;
    price;
    discountPercentage;
    constructor(id, title, category, price, discountPercentage) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
    }
    displayDetails() {
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
        `;
    }
    getPriceWithDiscount() {
        return this.price - calculateDiscount(this.price, this.discountPercentage);
    }
}
//# sourceMappingURL=Product.js.map