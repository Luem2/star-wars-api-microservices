class Services {
    declare HOST

    constructor() {
        this.HOST = Deno.env.get('DOCKER') ? 'database-starwars' : 'localhost'
    }

    async listCharacters() {
        const response = await fetch(`http://${this.HOST}:7004/character`)

        return await response.json()
    }

    async getCharacter(id: string) {
        const response = await fetch(`http://${this.HOST}:7004/character/${id}`)

        return response.status === 404 ? null : await response.json()
    }

    async createCharacter(character: unknown) {
        const response = await fetch(`http://${this.HOST}:7004/character`, {
            method: 'POST',
            body: JSON.stringify(character),
        })

        return await response.json()
    }

    async deleteCharacter(id: string) {
        const response = await fetch(
            `http://${this.HOST}:7004/character/${id}`,
            {
                method: 'DELETE',
            }
        )

        return response.status === 404 ? null : await response.json()
    }
}

export const services = new Services()
