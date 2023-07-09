import { Router } from 'https://deno.land/x/oak@v12.5.0/mod.ts'
import { ctls } from '../controllers/index.ts'

const router = new Router()

router
    .get('/', ctls.getAllCharacters)

    .get('/:id', ctls.getCharacterById)

    .post('/', ctls.createCharacter)

    .delete('/:id', ctls.deleteCharacter)

export default router
