class Services {
    declare HOST

    constructor() {
        this.HOST = Deno.env.get('DOCKER') ? 'database-starwars' : 'localhost'
    }

    async listFilms() {
        const response = await fetch(`http://${this.HOST}:7004/film`)

        return await response.json()
    }

    async getFilm(id: string) {
        const response = await fetch(`http://${this.HOST}:7004/film/${id}`)

        return response.status === 404 ? null : await response.json()
    }

    async createFilm(film: unknown) {
        const response = await fetch(`http://${this.HOST}:7004/film`, {
            method: 'POST',
            body: JSON.stringify(film),
        })

        return await response.json()
    }

    async deleteFilm(id: string) {
        const response = await fetch(`http://${this.HOST}:7004/film/${id}`, {
            method: 'DELETE',
        })

        return response.status === 404 ? null : await response.json()
    }
}

export const services = new Services()
