export class CustomError extends Error {
    constructor(message: string, type: string) {
        super(message)
        this.name = type;
    }
}