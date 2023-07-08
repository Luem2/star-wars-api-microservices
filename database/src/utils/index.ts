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

    httpNotFound({ response }: Context) {
        response.status = 404
        response.type = 'json'
        response.body = {
            status: 404,
            error: 'Not Found',
        }
    }

    httpResponse(res: Response, statusCode: number, data: unknown) {
        res.status = statusCode
        res.body = {
            status: statusCode,
            data,
        }
    }

    normalizeParameter(query: string) {
        return query.charAt(0).toUpperCase() + query.slice(1)
    }

    async errorHandler({ response }: Context, next: Next) {
        try {
            await next()
        } catch (error) {
            error instanceof CustomError
                ? (response.status = error.statusCode)
                : (response.status = 500)

            response.type = 'json'
            response.body = {
                status: response.status,
                error: error.message,
            }
        }
    }
}

export const {
    httpResponse,
    errorHandler,
    HttpError,
    httpNotFound,
    normalizeParameter,
} = new Utils()
