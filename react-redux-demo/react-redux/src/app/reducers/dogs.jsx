import {ADD_DOG, REMOVE_DOG, LOAD_DOGS} from '../actions/ActionTypes'

let filter = require('lodash/filter')
let map = require('lodash/map')

const intialState = {
  dogs: [],
  loaded: false
}

function dogs(state = intialState, action) {
  let newState = {
    loaded: state.loaded
  }
  switch (action.type) {
    case ADD_DOG:
      newState.dogs = [
        ...state.dogs,
        {
          id: 0,
          name: action.dog.name,
          breed: action.dog.breed,
          age: action.dog.age
        }
      ]
      break

    case REMOVE_DOG:
      newState.dogs = filter(state.dogs, (dog)=> dog.id != action.id)
      break
    
    case LOAD_DOGS:
      newState.dogs = action.dogs
      newState.loaded = true
      break

    default:
      newState = state
      break
  }

  return newState
}

export default dogs
