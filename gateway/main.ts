// @deno-types="npm:@types/express@4.17.17"
import express from 'npm:express@4.18.2'
// @deno-types="npm:@types/morgan@1.9.4"
import morgan from 'npm:morgan'
import cors from 'npm:cors'
import { createProxyMiddleware as proxy } from 'npm:http-proxy-middleware'
import { getUrlTarget, httpNotFound, mainResponse } from './utils/index.ts'

const app = express()
const router = express.Router()

app.use(cors())
app.use(morgan('dev'))

router.get('/', mainResponse)

app.use(
    proxy('/characters', {
        target: getUrlTarget('characters', 7001),
        pathRewrite: { '^/characters': '/' },
        changeOrigin: true,
    })
)

app.use(
    proxy('/characters/:id', {
        target: getUrlTarget('characters', 7001),
        pathRewrite: { '^/characters/:id': '/:id' },
        changeOrigin: true,
    })
)

app.use(
    proxy('/films', {
        target: getUrlTarget('films', 7002),
        pathRewrite: { '^/films': '/' },
        changeOrigin: true,
    })
)

app.use(
    proxy('/films/:id', {
        target: getUrlTarget('films', 7002),
        pathRewrite: { '^/films/:id': '/:id' },
        changeOrigin: true,
    })
)

app.use(
    proxy('/planets', {
        target: getUrlTarget('planets', 7003),
        pathRewrite: { '^/planets': '/' },
        changeOrigin: true,
    })
)

app.use(
    proxy('/planets/:id', {
        target: getUrlTarget('planets', 7003),
        pathRewrite: { '^/planets/:id': '/:id' },
        changeOrigin: true,
    })
)

app.use(router)

app.use(httpNotFound)

app.listen(7000, () => {
    console.info('🟢 Gateway on port 7000')
})
