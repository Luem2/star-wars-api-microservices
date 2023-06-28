import type { Context } from 'https://deno.land/x/oak@v12.5.0/mod.ts'

import { planetsData } from '../data/index.ts'
import { httpResponse } from '../utils/index.ts'

class Controllers {
    getAllPlanets({ response }: Context) {
        const planets = planetsData.listPlanets()

        httpResponse(response, 200, planets)
    }
}

export const ctls = new Controllers()
