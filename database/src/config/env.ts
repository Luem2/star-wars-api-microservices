import { load } from 'https://deno.land/std@0.191.0/dotenv/mod.ts'
import { resolve } from 'https://deno.land/std@0.192.0/path/mod.ts'

export const loadEnv = await load({
    envPath: resolve('.env'),
})

export const env = {
    MONGO_URI: loadEnv['MONGO_URI'] ?? Deno.env.get('MONGO_URI'),
}
