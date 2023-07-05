import { Schema, model } from 'npm:mongoose'

enum Gender {
    male = 'male',
    female = 'female',
}

const characterSchema = new Schema(
    {
        _id: String,
        name: String,
        height: String,
        mass: String,
        hair_color: String,
        skin_color: String,
        eye_color: String,
        birth_year: String,
        gender: {
            type: String,
            enum: Gender,
        },
        homeworld: {
            type: String,
            ref: 'Planet',
        },
        films: [{ type: String, ref: 'Film' }],
    },
    {
        timestamps: true,
    }
)

export const Character = model('Character', characterSchema)
