import type { Context } from '../types/index.d.ts'

import { services } from '../services/index.ts'
import { httpResponse } from '../utils/index.ts'

class Controllers {
    async getAllFilms({ response }: Context) {
        const films = await services.listFilms()

        httpResponse(response, 200, films)
    }

    async getFilmById({ params, response }: Context) {
        const film = await services.getFilm(params.id)

        !film
            ? httpResponse(response, 404, 'Not found')
            : httpResponse(response, 200, film)
    }

    async createFilm({ request, response }: Context) {
        const body = await request.body().value
        const newFilm = await services.createFilm(body)

        httpResponse(response, 201, newFilm)
    }

    async deleteFilm({ params, response }: Context) {
        const deletedFilm = await services.deleteFilm(params.id)

        !deletedFilm
            ? httpResponse(response, 404, 'Not found')
            : httpResponse(response, 200, deletedFilm)
    }
}

export const ctls = new Controllers()
