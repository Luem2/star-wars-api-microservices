import type { Request, Response } from 'npm:@types/express@4.17.17'

class Utils {
    mainResponse(_req: Request, res: Response) {
        res.send({
            status: 200,
            URL: 'http://localhost:7000',
            paths: {
                characters: '/characters',
                films: '/films',
                planets: '/planets',
            },
        })
    }

    httpNotFound(_req: Request, res: Response) {
        res.status(404).send({
            status: 404,
            error: 'Not Found',
        })
    }
}

export const { mainResponse, httpNotFound } = new Utils()
