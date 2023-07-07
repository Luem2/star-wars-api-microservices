import mongoose from 'npm:mongoose'

import charactersJSON from '../data/characters.json' assert { type: 'json' }
import filmsJSON from '../data/films.json' assert { type: 'json' }
import planetsJSON from '../data/planets.json' assert { type: 'json' }
import { CharacterModel, FilmModel, PlanetModel } from '../models/index.ts'
import { env } from '../config/env.ts'

try {
    await mongoose.connect(env['MONGO_URI'])

    await CharacterModel.deleteMany()
    await FilmModel.deleteMany()
    await PlanetModel.deleteMany()

    await CharacterModel.insertMany(charactersJSON)
    await FilmModel.insertMany(filmsJSON)
    await PlanetModel.insertMany(planetsJSON)

    console.info(`🌱 Database successfully seeded`)
} catch (error) {
    console.error(error)
} finally {
    await mongoose.connection.close()
}
