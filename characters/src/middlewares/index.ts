import type { Context, Next } from 'https://deno.land/x/oak@v12.5.0/mod.ts'
import { HttpError } from '../utils/index.ts'

class Middlewares {
    async characterValidation(ctx: Context, next: Next) {
        const body = ctx.request.body()

        if (body.type !== 'json') {
            throw new HttpError(400, 'Invalid body type')
        }

        if (!Object.keys(await body.value).length)
            throw new HttpError(400, 'Missing properties')

        next()
    }
}

export const middlewares = new Middlewares()
