const fs = require('fs-extra');
const path = require('path');

const data = fs.readJsonSync(path.join(__dirname, '../data/zips-fixed.json'));

const reducer = (currentState, zip) => {

    if (!currentState[zip.state]) {
        currentState[zip.state] = {
            cities: {}
        }
    }

    if (!currentState[zip.state].cities[zip.city]) {
        currentState[zip.state].cities[zip.city] = 0
    }

    currentState[zip.state].cities[zip.city] += zip.pop
    return currentState
} 

const stateMapper = state => {


    const cities = Object.keys(state.cities).map(cityName => {
        let population = state.cities[cityName]
        const city = {
            name: cityName, population: population
        }
    })
    // state.cities = cities.sort((a, b) => {
    //     if(a.population < b.population) {
    //         return 1
    //     } else if (b.population < a.population) {
    //         return -1
    //     }
    //     return 0
    // })
    return {
        state: state.
        }

}

const reduction = data.reduce(reducer, {});

const reductionMapper = stateName => {
    return reduction[stateName]
}

const states = Object.keys(r).map(reductionMapper).map(stateMapper)


// let final = []

// Object.keys(states).forEach(stateName => {
//     let finalState = {
//         state: stateName
//     }

//     const state = states[stateName]
//     const city = state.cities[0]
//     finalState.city = city
//     final.push(finalState)
// })

// final.sort((a, b) => {
//     if(a.state < b.state) {
//         return -1
//     } else if(b.state < a.state) {
//         return 1
//     }
//     return 0
// })

// const output = path.join(__dirname, 'out/output.json')

// fs.writeJsonSync(output, final)