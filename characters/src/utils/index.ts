import type {
    Context,
    Response,
    Next,
} from 'https://deno.land/x/oak@v12.5.0/mod.ts'

import { CustomError } from './customError.ts'

class Utils {
    declare HttpError

    constructor() {
        this.HttpError = CustomError
    }

    httpResponse(res: Response, statusCode: number, data: unknown) {
        res.status = statusCode
        res.body = {
            status: statusCode,
            data,
        }
    }

    async errorHandler(ctx: Context, next: Next) {
        try {
            await next()
        } catch (error) {
            error instanceof CustomError
                ? (ctx.response.status = error.statusCode)
                : (ctx.response.status = 500)

            ctx.response.type = 'json'
            ctx.response.body = {
                status: ctx.response.status,
                error: error.message,
            }
        }
    }
}

export const { httpResponse, errorHandler, HttpError } = new Utils()
