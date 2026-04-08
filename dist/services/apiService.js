import { CustomError } from "../utils/errorHandler.js";
export async function getProduct() {
    try {
        const response = await fetch(`https://dummyjson.com/products/1`);
        if (!response.ok) {
            throw new CustomError("Product not found", "APIError");
        }
        const data = await response.json();
        // console.log(data)
        return data;
    }
    catch (error) {
        if (error instanceof CustomError) {
            throw error;
        }
        else {
            throw new CustomError(error.message, "NetworkError");
        }
    }
}
//# sourceMappingURL=apiService.js.map