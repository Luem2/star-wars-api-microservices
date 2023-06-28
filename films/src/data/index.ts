import films from '../data/films.json' assert { type: 'json' }

class Data {
    listFilms() {
        return films
    }
}

export const filmsData = new Data()
