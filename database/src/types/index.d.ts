import { Context as OakContext } from 'https://deno.land/x/oak@v12.5.0/mod.ts'

export enum ModelType {
    Character = 'Character',
    Film = 'Film',
    Planet = 'Planet',
}

export interface Context extends OakContext {
    params: {
        model: string
        id: string
    }
}
