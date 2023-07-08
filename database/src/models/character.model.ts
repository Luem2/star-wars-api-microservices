import { modelOptions, prop, getModelForClass } from 'npm:@typegoose/typegoose'
import { Model, Types } from 'npm:mongoose'

@modelOptions({
    schemaOptions: { timestamps: true },
    options: { customName: 'Character' },
})
class Character extends Model {
    @prop({
        _id: true,
        default: new Types.ObjectId(),
    })
    _id!: string

    @prop({ required: true })
    name!: string

    @prop({ required: true })
    height!: string

    @prop({ required: true })
    mass!: string

    @prop({ required: true })
    hair_color!: string

    @prop({ required: true })
    skin_color!: string

    @prop({ required: true })
    eye_color!: string

    @prop({ required: true })
    birth_year!: string

    @prop({ required: true })
    gender!: string

    @prop({ type: String, ref: 'Planet' })
    homeworld!: string

    @prop({ type: [String], ref: 'Film' })
    films!: string[]

    public static async list() {
        return await this.find()
            .populate('homeworld', ['_id', 'name'])
            .populate('films', ['_id', 'title'])
    }

    public static async get(id: string) {
        return await this.findById(id)
            .populate('homeworld', ['_id', 'name'])
            .populate('films', ['_id', 'title'])
    }

    public static async insert(character: Character) {
        return await this.create(character)
    }

    public static async delete(id: string) {
        return await this.findByIdAndDelete(id)
    }
}

export const CharacterModel = getModelForClass(Character)
