const fs = require('fs-extra');
const path = require('path');

const data = fs.readJsonSync(path.join(__dirname, '../data/zips-fixed.json'));

let states = {}

for (let i = 0; i < data.length; i++) {
    let zip = data[i]
    if (!states[zip.state]) {
        states[zip.state] = {
            cities: {}
        }
    }

    if (!states[zip.state].cities[zip.city]) {
        states[zip.state].cities[zip.city] = 0
    }

    states[zip.state].cities[zip.city] += zip.pop
};

Object.keys(states).forEach((stateName) => {
    let state = states[stateName]
    let cities = []
    Object.keys(state.cities).forEach(cityName => {
        let population = state.cities[cityName]
        const city = {
            name: cityName, population: population
        }
        cities.push(city)
    })
    state.cities = cities.sort((a, b) => {
        if(a.population < b.population) {
            return 1
        } else if (b.population < a.population) {
            return -1
        }
        return 0
    })
  
})

let final = []

Object.keys(states).forEach(stateName => {
    let finalState = {
        state: stateName
    }

    const state = states[stateName]
    const city = state.cities[0]
    finalState.city = city
    final.push(finalState)
})

final.sort((a, b) => {
    if(a.state < b.state) {
        return -1
    } else if(b.state < a.state) {
        return 1
    }
    return 0
})

const output = path.join(__dirname, 'out/output.json')

fs.writeJsonSync(output, final)