import { Schema, model } from 'npm:mongoose'

const planetSchema = new Schema(
    {
        _id: String,
        name: String,
        rotation_period: String,
        orbital_period: String,
        diameter: String,
        climate: String,
        gravity: String,
        terrain: String,
        surface_water: String,
        residents: [{ type: String, ref: 'Character' }],
        films: [{ type: String, ref: 'Film' }],
    },
    {
        timestamps: true,
    }
)

export const Planet = model('Planet', planetSchema)
