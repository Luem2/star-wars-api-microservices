import type { Context } from '../types/index.d.ts'

import { services } from '../services/index.ts'
import { httpResponse } from '../utils/index.ts'

class Controllers {
    async getAllPlanets({ response }: Context) {
        const planets = await services.listPlanets()

        httpResponse(response, 200, planets)
    }

    async getPlanetById({ params, response }: Context) {
        const planet = await services.getPlanet(params.id)

        !planet
            ? httpResponse(response, 404, 'Not found')
            : httpResponse(response, 200, planet)
    }

    async createPlanet({ request, response }: Context) {
        const body = await request.body().value
        const newPlanet = await services.createPlanet(body)

        httpResponse(response, 201, newPlanet)
    }

    async deletePlanet({ params, response }: Context) {
        const deletedPlanet = await services.deletePlanet(params.id)

        !deletedPlanet
            ? httpResponse(response, 404, 'Not found')
            : httpResponse(response, 200, deletedPlanet)
    }
}

export const ctls = new Controllers()
