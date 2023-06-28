import { Application, Router } from 'https://deno.land/x/oak@v12.5.0/mod.ts'
import { oakCors } from 'https://deno.land/x/cors@v1.2.2/oakCors.ts'
import { proxy } from 'https://deno.land/x/oak_proxy@v0.0.2/mod.ts'
import oakLogger from 'https://deno.land/x/oak_logger@1.0.0/mod.ts'
import { httpNotFound, mainResponse } from './utils/index.ts'

const app = new Application()
const router = new Router()

app.use(oakCors())
app.use(oakLogger.logger)
app.use(oakLogger.responseTime)

router.get('/', mainResponse)

app.use(
    proxy('/characters', {
        target: 'http://characters:7001',
        pathRewrite: {
            '/characters': '/',
        },
        changeOrigin: true,
    })
)

app.use(
    proxy('/films', {
        target: 'http://films:7002',
        pathRewrite: {
            '/films': '/',
        },
        changeOrigin: true,
    })
)

app.use(
    proxy('/planets', {
        target: 'http://planets:7003',
        pathRewrite: {
            '/planets': '/',
        },
        changeOrigin: true,
    })
)

app.use(router.routes())

app.use(httpNotFound)

app.addEventListener('listen', ({ port, hostname, secure }) => {
    const protocol = secure ? 'https' : 'http'
    const host = hostname === '0.0.0.0' ? 'localhost' : hostname

    console.info(`🟢 Gateway on ${protocol}://${host}:${port}`)
})

await app.listen({ port: 7000 })
