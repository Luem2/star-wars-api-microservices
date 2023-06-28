import planets from '../data/planets.json' assert { type: 'json' }

class Data {
    listPlanets() {
        return planets
    }
}

export const planetsData = new Data()
