import { modelOptions, prop, getModelForClass } from 'npm:@typegoose/typegoose'
import { Model, Types } from 'npm:mongoose'

@modelOptions({
    schemaOptions: { timestamps: true },
    options: { customName: 'Planet' },
})
class Planet extends Model {
    @prop({
        _id: true,
        default: new Types.ObjectId(),
    })
    _id!: string

    @prop({ required: true })
    name!: string

    @prop({ required: true })
    rotation_period!: string

    @prop({ required: true })
    orbital_period!: string

    @prop({ required: true })
    diameter!: string

    @prop({ required: true })
    climate!: string

    @prop({ required: true })
    gravity!: string

    @prop({ required: true })
    terrain!: string

    @prop({ required: true })
    surface_water!: string

    @prop({ type: [String], ref: 'Character' })
    residents!: string[]

    @prop({ type: [String], ref: 'Film' })
    films!: string[]

    public static async list() {
        return await this.find()
            .populate('residents', ['_id', 'name'])
            .populate('films', ['_id', 'title'])
    }

    public static async get(id: string) {
        return await this.findById(id)
            .populate('residents', ['_id', 'name'])
            .populate('films', ['_id', 'title'])
    }

    public static async insert(planet: Planet) {
        return await this.create(planet)
    }

    public static async delete(id: string) {
        return await this.findByIdAndDelete(id)
    }
}

export const PlanetModel = getModelForClass(Planet)
