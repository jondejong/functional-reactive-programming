const fs = require('fs-extra');
const path = require('path');

const dogs = fs.readJsonSync(path.join(__dirname, 'dogs.json'));

// console.log(dogs)

// Map
const names = dogs.map(dog => dog.name)

// console.log(names)


// Filter
const puggles = dogs.filter(dog => {
    return dog.breed == 'Puggle'
})

// console.log(puggles)

//Reduce
const sumOfAges = dogs.reduce( (currentValue, dog) => {
    return currentValue + dog.age
}, 0)

console.log(sumOfAges)
