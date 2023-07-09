import type { Context } from '../types/index.d.ts'

import { services } from '../services/index.ts'
import { httpResponse } from '../utils/index.ts'

class Controllers {
    async getAllCharacters({ response }: Context) {
        const characters = await services.listCharacters()

        httpResponse(response, 200, characters)
    }

    async getCharacterById({ params, response }: Context) {
        const character = await services.getCharacter(params.id)

        !character
            ? httpResponse(response, 404, 'Not found')
            : httpResponse(response, 200, character)
    }

    async createCharacter({ request, response }: Context) {
        const body = await request.body().value
        const newCharacter = await services.createCharacter(body)

        httpResponse(response, 201, newCharacter)
    }

    async deleteCharacter({ params, response }: Context) {
        const deletedCharacter = await services.deleteCharacter(params.id)

        !deletedCharacter
            ? httpResponse(response, 404, 'Not found')
            : httpResponse(response, 200, deletedCharacter)
    }
}

export const ctls = new Controllers()
