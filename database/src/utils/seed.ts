import { Character, Film, Planet } from '../models/index.ts'
import charactersJSON from '../data/characters.json' assert { type: 'json' }
import filmsJSON from '../data/films.json' assert { type: 'json' }
import planetsJSON from '../data/planets.json' assert { type: 'json' }

try {
    await Character.deleteMany()
    await Film.deleteMany()
    await Planet.deleteMany()

    await Character.insertMany(charactersJSON)
    await Film.insertMany(filmsJSON)
    await Planet.insertMany(planetsJSON)

    console.info(`🌱 Database successfully seeded`)
} catch (error) {
    console.error(error)
} finally {
    Deno.exit(1)
}
