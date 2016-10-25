const ADD_DOG = 'ADD_DOG'
const REMOVE_DOG = 'REMOVE_THING'
const LOAD_DOGS = 'LOAD_DOGS'

let addDog = (dog) => {
  return {type: ADD_DOG, dog: dog}
}

let removeDog = (id) => {
  return {type: REMOVE_DOG, id: id}
}

let loadDogs = (dogs) => {
  return {type: LOAD_DOGS, dogs: dogs}
}

export {
  ADD_DOG,
  REMOVE_DOG,
  LOAD_DOGS,
  addDog,
  removeDog,
  loadDogs
}