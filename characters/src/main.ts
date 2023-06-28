import { Application } from 'https://deno.land/x/oak@v12.5.0/mod.ts'
import { oakCors } from 'https://deno.land/x/cors@v1.2.2/oakCors.ts'
import oakLogger from 'https://deno.land/x/oak_logger@1.0.0/mod.ts'

import router from './routers/index.ts'
import { errorHandler, httpNotFound } from './utils/index.ts'

const app = new Application()

app.use(oakCors())
app.use(oakLogger.logger)
app.use(oakLogger.responseTime)

app.use(errorHandler)

app.use(router.routes())
app.use(router.allowedMethods())

app.use(httpNotFound)

app.addEventListener('listen', ({ port, hostname, secure }) => {
    const protocol = secure ? 'https' : 'http'
    const host = hostname === '0.0.0.0' ? 'localhost' : hostname

    console.info(`🟢 App is running at ${protocol}://${host}:${port}`)
})

await app.listen({ port: 7001 })
