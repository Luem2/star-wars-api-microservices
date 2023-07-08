import type { Next } from 'https://deno.land/x/oak@v12.5.0/mod.ts'
import type { Context } from '../types/index.d.ts'

import { normalizeParameter, HttpError } from '../utils/index.ts'

class Middlewares {
    async checkModel({ params }: Context, next: Next) {
        const model = normalizeParameter(params.model)

        if (model === 'Character' || model === 'Film' || model === 'Planet') {
            await next()
        } else {
            throw new HttpError(404, 'Model not found')
        }
    }
}

export const { checkModel } = new Middlewares()
