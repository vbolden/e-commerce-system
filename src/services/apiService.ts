async function getProduct(id:number) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json();
        console.log(data)
        return data
    } catch(error) {
        console.error("Error message: ", error);
    }
}