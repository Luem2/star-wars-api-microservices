import characters from '../data/characters.json' assert { type: 'json' }

class Data {
    listCharacters() {
        return characters
    }
}

export const charactersData = new Data()
