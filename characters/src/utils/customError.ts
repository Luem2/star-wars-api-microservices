export class CustomError extends Error {
    declare statusCode: number
    constructor(statusCode: number, message: string) {
        super(message)

        this.statusCode = statusCode

        Error.captureStackTrace(this, CustomError)
    }
}
