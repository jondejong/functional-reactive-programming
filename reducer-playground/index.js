let id = 0;

const initialState = {
    dogs: [{ id: id++, name: 'Bear', breed: 'Collie', age: 4 }]
}

const ADD_DOG = 'ADD_DOG';
const REMOVE_DOG = 'REMOVE_DOG';

const reduce = (state = initialState, action) => {
    const newState = {
        dogs: state.dogs.map(dog => dog)
    }
    switch (action.type) {
        case ADD_DOG:
            const dog = Object.assign(action.dog)
            dog.id = id++

            newState.dogs.push(dog)
            break;

        case REMOVE_DOG:
            newState.dogs = newState.dogs.filter(dog => dog.id != action.id)
            break
    }
    return newState
}

// Action Creator
const addDog = (dog) => {
    return {
        type: ADD_DOG,
        dog: dog
    }
}

const removeDog = (id) => {
    return {
        type: REMOVE_DOG,
        id: id
    }
}

// Let's have an application
const actions = [
    addDog({breed: 'Puggle', name: 'Snoop', age: 5}),
    addDog({breed: 'Cosmos', name: 'Bulldog', age: 7}),
    removeDog(1)
]

// Framework
let state
actions.forEach(action => {
    state = reduce(state, action);
})

console.log(state)