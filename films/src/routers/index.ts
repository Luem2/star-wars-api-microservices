import { Router } from 'https://deno.land/x/oak@v12.5.0/mod.ts'
import { ctls } from '../controllers/index.ts'

const router = new Router()

router
    .get('/', ctls.getAllFilms)

    .get('/:id', ctls.getFilmById)

    .post('/', ctls.createFilm)

    .delete('/:id', ctls.deleteFilm)

export default router
