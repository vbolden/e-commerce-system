import { Product } from "./models/Product.ts";
import { calculateTax } from "./utils/taxCalculator.ts";
import { getProduct } from "./services/apiService.ts";
import { CustomError } from "./utils/errorHandler.ts";

async function loadProduct() {
    try {
        const data = await getProduct();

        const product = new Product(
            data.id,
            data.title,
            data.category,
            data.price,
            data.discountPercentage
        );

        const discountedPrice = product.getPriceWithDiscount();
        const tax = calculateTax(discountedPrice, product.category);
        const finalPrice = discountedPrice + tax;

        console.log(product.displayDetails());
        console.log(`Price with discount: $${discountedPrice.toFixed(2)}`)
        console.log(`Final Price with tax: $${finalPrice.toFixed(2)}`)

    } catch (error: any) {
        if (error instanceof CustomError) {
            console.error(`${error.name}: ${error.message}`);
        } else {
            console.error("Unexpected error: ", error);

        }
    }
}

loadProduct()