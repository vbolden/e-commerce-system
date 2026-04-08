export function calculateTax(price: number, category: string) {
    if(category === "groceries") {
        return price * 0.03
    } else {
        return price * 0.0475
    }
}