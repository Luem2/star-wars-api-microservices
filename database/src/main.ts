import { Application } from 'https://deno.land/x/oak@v12.5.0/mod.ts'
import { oakCors } from 'https://deno.land/x/cors@v1.2.2/oakCors.ts'
import oakLogger from 'https://deno.land/x/oak_logger@1.0.0/mod.ts'
import mongoose from 'npm:mongoose'

import router from './routers/index.ts'
import { errorHandler, httpNotFound } from './utils/index.ts'
import { env } from './config/env.ts'

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

try {
    const db = await mongoose.connect(env.MONGO_URI)
    const { name, host, port } = db.connection

    console.info(`🟢 Database ${name} connected at ${host} on port ${port}`)

    await app.listen({ port: 7004 })
} catch (error) {
    console.error(error)
}
