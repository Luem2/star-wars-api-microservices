import { Router } from 'https://deno.land/x/oak@v12.5.0/mod.ts'
import { ctls } from '../controllers/index.ts'

const router = new Router()

router
    .get('/', ctls.getAllPlanets)

    .get('/:id', ctls.getPlanetById)

    .post('/', ctls.createPlanet)

    .delete('/:id', ctls.deletePlanet)

export default router
