import { modelOptions, prop, getModelForClass } from 'npm:@typegoose/typegoose'
import { Model, Types } from 'npm:mongoose'

@modelOptions({
    schemaOptions: { timestamps: true },
    options: { customName: 'Film' },
})
class Film extends Model {
    @prop({
        _id: true,
        default: new Types.ObjectId(),
    })
    _id!: string

    @prop({ required: true })
    title!: string

    @prop({ required: true })
    opening_crawl!: string

    @prop({ required: true })
    director!: string

    @prop({ required: true })
    producer!: string

    @prop({ required: true })
    release_date!: Date

    @prop({ type: [String], ref: 'Character' })
    characters!: string[]

    @prop({ type: [String], ref: 'Planet' })
    planets!: string[]

    public static async list() {
        return await this.find()
            .populate('characters', ['_id', 'name'])
            .populate('planets', ['_id', 'name'])
    }

    public static async get(id: string) {
        return await this.findById(id)
            .populate('characters', ['_id', 'name'])
            .populate('planets', ['_id', 'name'])
    }

    public static async insert(film: Film) {
        return await this.create(film)
    }

    public static async delete(id: string) {
        return await this.findByIdAndDelete(id)
    }
}

export const FilmModel = getModelForClass(Film)
