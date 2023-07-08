import { Router } from 'https://deno.land/x/oak@v12.5.0/mod.ts'

import { checkModel } from '../middlewares/index.ts'
import { controllers } from '../controllers/index.ts'

const router = new Router()

router.get('/:model', checkModel, controllers.list)

router.get('/:model/:id', checkModel, controllers.get)

router.post('/:model', checkModel, controllers.create)

router.delete('/:model/:id', checkModel, controllers.delete)

export default router
