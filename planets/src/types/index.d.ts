import { Context as OakContext } from 'https://deno.land/x/oak@v12.5.0/mod.ts'

export interface Context extends OakContext {
    params: {
        model: string
        id: string
    }
}
