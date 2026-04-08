import { Product } from "./models/Product.js";
import { calculateTax } from "./utils/taxCalculator.js";
import { getProduct } from "./services/apiService.js";
import { CustomError } from "./utils/errorHandler.js";

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