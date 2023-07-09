class Services {
    declare HOST

    constructor() {
        this.HOST = Deno.env.get('DOCKER') ? 'database-starwars' : 'localhost'
    }

    async listPlanets() {
        const response = await fetch(`http://${this.HOST}:7004/planet`)

        return await response.json()
    }

    async getPlanet(id: string) {
        const response = await fetch(`http://${this.HOST}:7004/planet/${id}`)

        return response.status === 404 ? null : await response.json()
    }

    async createPlanet(planet: unknown) {
        const response = await fetch(`http://${this.HOST}:7004/planet`, {
            method: 'POST',
            body: JSON.stringify(planet),
        })

        return await response.json()
    }

    async deletePlanet(id: string) {
        const response = await fetch(`http://${this.HOST}:7004/planet/${id}`, {
            method: 'DELETE',
        })

        return response.status === 404 ? null : await response.json()
    }
}

export const services = new Services()
