import { Schema, model } from 'npm:mongoose'

const filmSchema = new Schema(
    {
        _id: String,
        title: String,
        opening_crawl: String,
        director: String,
        producer: String,
        release_date: Date,
        characters: [{ type: String, ref: 'Character' }],
        planets: [{ type: String, ref: 'Planet' }],
    },
    {
        timestamps: true,
    }
)

export const Film = model('Film', filmSchema)
