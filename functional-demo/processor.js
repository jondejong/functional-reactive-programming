let processor = {}

processor.stateFilter = zip => {
    return state => {
        return state.state == zip.state
    }
}

processor.cityFilter = zip => {
    return city => {
        return city.name == zip.city
    }
}

processor.cloneState = (currentState) => {
    return currentState.map((state) => {
        return {
            state: state.state,
            cities: state.cities.map(city => {
                return {
                    name: city.name,
                    population: city.population
                }
            })
        }
    })
}

processor.reducer = (currentState, zip) => {
    let newState = processor.cloneState(currentState)
    let foundStates = newState.filter(processor.stateFilter(zip))

    if (foundStates.length < 1) {
        const state = {
            state: zip.state,
            cities: []
        }
        newState.push(state)
        foundStates.push(state)
    }
    const state = foundStates[0]

    const foundCities = state.cities.filter(processor.cityFilter(zip))
    if (foundCities.length < 1) {
        const city = {
            name: zip.city,
            population: 0
        }
        state.cities.push(city)
        foundCities.push(city)
    }
    const city = foundCities[0]
    city.population += zip.pop
    return newState
}

processor.cityComparator = (a, b) => {
    if (a.population < b.population) {
        return 1
    } else if (b.population < a.population) {
        return -1
    }
    return 0
}

processor.stateComparator = (a, b) => {
    if (a.state < b.state) {
        return -1
    } else if (b.state < a.state) {
        return 1
    }
    return 0
}

processor.stateMapper = state => {
    state.cities = state.cities.sort(processor.cityComparator)
    return {
        state: state.state,
        city: state.cities[0]
    }
}

processor.process = data => {
    return data.reduce(reducer, []).map(stateMapper).sort(processor.stateComparator);
}

module.exports = processor



