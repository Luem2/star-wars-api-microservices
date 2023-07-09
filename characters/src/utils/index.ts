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

export const { httpResponse, errorHandler, HttpError, httpNotFound } =
    new Utils()
