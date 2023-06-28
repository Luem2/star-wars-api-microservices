import type { Context } from 'https://deno.land/x/oak@v12.5.0/mod.ts'

import { charactersData } from '../data/index.ts'
import { httpResponse } from '../utils/index.ts'

class Controllers {
    getAllCharacters({ response }: Context) {
        const characters = charactersData.listCharacters()

        httpResponse(response, 200, characters)
    }

    async createCharacter({ request, response }: Context) {
        const body = await request.body().value

        httpResponse(response, 200, body)
    }
}

export const ctls = new Controllers()
