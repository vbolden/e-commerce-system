export class CustomError extends Error {
    constructor(message, type) {
        super(message);
        this.name = type;
    }
}
//# sourceMappingURL=errorHandler.js.map