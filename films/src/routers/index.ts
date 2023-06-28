import { Router } from 'https://deno.land/x/oak@v12.5.0/mod.ts'
import { ctls } from '../controllers/index.ts'
import { middlewares } from '../middlewares/index.ts'

const router = new Router()

router
    .get('/', ctls.getAllFilms)

    .post('/', middlewares.filmsValidation, ctls.getAllFilms)

export default router
