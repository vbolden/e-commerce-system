export function calculateTax(price, category) {
    if (category.trim().toLowerCase() === "groceries") {
        return price * 0.03;
    }
    else {
        return price * 0.0475;
    }
}
//# sourceMappingURL=taxCalculator.js.map