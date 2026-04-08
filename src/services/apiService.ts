import { CustomError } from "../utils/errorHandler.js";

export async function getProductById(id:number) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        if(!response) {
            throw new CustomError("Product not found", "APIError");
        }
        const data = await response.json();
        console.log(data)
        return data
    } catch(error: any) {
        if(error instanceof CustomError) {
            throw error;
        } else {
            throw new CustomError(error.message, "NetworkError")
        }
    }
}

getProductById(1);