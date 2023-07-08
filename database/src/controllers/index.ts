import { ModelType, Context } from '../types/index.d.ts'

import { httpResponse, normalizeParameter } from '../utils/index.ts'
import { store } from '../models/index.ts'

class Controllers {
    async list({ response, params }: Context) {
        const model = normalizeParameter(params.model) as ModelType
        const list = await store[model].list()

        httpResponse(response, 200, list)
    }

    async get({ response, params }: Context) {
        const model = normalizeParameter(params.model) as ModelType
        const item = await store[model].get(params.id)

        !item
            ? httpResponse(response, 404, 'Not found')
            : httpResponse(response, 200, item)
    }

    async create({ request, response, params }: Context) {
        const model = normalizeParameter(params.model) as ModelType
        const body = await request.body({ type: 'json' }).value
        const item = await store[model].insert(body)

        httpResponse(response, 201, item)
    }

    async delete({ response, params }: Context) {
        const model = normalizeParameter(params.model) as ModelType
        const item = await store[model].delete(params.id)

        !item
            ? httpResponse(response, 404, 'Not found')
            : httpResponse(response, 200, item)
    }
}

export const controllers = new Controllers()
