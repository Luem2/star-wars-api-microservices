import { Context } from 'https://deno.land/x/oak@v12.5.0/mod.ts'

class Utils {
    mainResponse({ response }: Context) {
        response.status = 200
        response.body = {
            status: 200,
            URL: 'http://localhost:7000',
            paths: {
                characters: '/characters',
                films: '/films',
                planets: '/planets',
            },
        }
    }

    httpNotFound({ response }: Context) {
        response.status = 404
        response.type = 'json'
        response.body = {
            status: 404,
            error: 'Not Found',
        }
    }
}

export const { mainResponse, httpNotFound } = new Utils()
