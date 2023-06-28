import type { Context } from 'https://deno.land/x/oak@v12.5.0/mod.ts'

import { filmsData } from '../data/index.ts'
import { httpResponse } from '../utils/index.ts'

class Controllers {
    getAllFilms({ response }: Context) {
        const films = filmsData.listFilms()

        httpResponse(response, 200, films)
    }
}

export const ctls = new Controllers()
