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

        console.log(product.displayDetails());

    } catch (error: any) {
        if (error instanceof CustomError) {
            console.error(`${error.name}: ${error.message}`);
        } else {
            console.error("Unexpected error: ", error);

        }
    }
}

loadProduct()