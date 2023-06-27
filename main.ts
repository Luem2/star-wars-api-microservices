import { Application } from 'https://deno.land/x/oak@v12.5.0/mod.ts'

import middlewares from './src/middlewares/server.middlewares.ts'

const app = new Application()

middlewares.forEach((middleware) => {
    app.use(middleware)
})

app.addEventListener('listen', ({ hostname, port }) => {
    console.info(`🟢 App is running at http://${hostname}:${port}`)
})

await app.listen({ port: 8000 })
