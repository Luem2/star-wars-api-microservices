import type { ResponseBody } from 'https://deno.land/x/oak@v12.5.0/response.ts'
import type {
    Context,
    Response,
    Next,
} from 'https://deno.land/x/oak@v12.5.0/mod.ts'

import { Error as MongooseError } from 'npm:mongoose'
import { CustomError } from './customError.ts'

class Utils {
    declare HttpError

    constructor() {
        this.HttpError = CustomError
    }

    httpNotFound({ response }: Context) {
        response.status = 404
        response.body = {
            status: 404,
            error: 'Not Found',
        }
    }

    httpResponse(res: Response, statusCode: number, data: ResponseBody) {
        if (data) res.body = data

        res.status = statusCode
    }

    normalizeParameter(query: string) {
        return query.charAt(0).toUpperCase() + query.slice(1)
    }

    async errorHandler({ response }: Context, next: Next) {
        try {
            await next()
        } catch (error) {
            switch (true) {
                case error instanceof CustomError:
                    response.status = error.statusCode
                    break
                case error instanceof MongooseError:
                    response.status = 400
                    break
                default:
                    response.status = 500
            }

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
