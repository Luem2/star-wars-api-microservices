import mongoose from 'npm:mongoose'

import charactersJSON from '../data/characters.json' assert { type: 'json' }
import filmsJSON from '../data/films.json' assert { type: 'json' }
import planetsJSON from '../data/planets.json' assert { type: 'json' }
import { store } from '../models/index.ts'
import { env } from '../config/env.ts'

try {
    const { Character, Film, Planet } = store

    await mongoose.connect(env['MONGO_URI'])

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
    await mongoose.connection.close()
}
