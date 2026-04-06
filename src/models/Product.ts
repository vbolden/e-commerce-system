export class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discount: number;
    rating: number;
    sku: string;
    reviews: string[];

    constructor(id: number, title: string, description: string, category: string, price: number, discount: number, rating: number, sku: string, reviews: string[]){
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discount = discount;
        this.rating = rating;
        this.sku = sku;
        this.reviews = reviews;
    }
}