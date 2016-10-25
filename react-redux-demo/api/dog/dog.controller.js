const _ = require('lodash');

let controller = {};

let id = 1;

let dogs = [];

controller.list = (req, res) => res.json(dogs);

controller.save = (req, res) => {
    let dog = req.body;
    //TODO: Better validation and validation error responses
    if(!dog.name || !dog.breed || !dog.age) {
        res.status(422).send()
    } else {
        dog.id = id++;
        dogs.push(dog);
        res.json(dog);
    }
};

controller.delete = (req, res) => {
    const id = req.params.id;
    dogs = _.filter(dogs, (dog)=> dog.id != id)
    res.json({message: 'deleted'})
};

module.exports = controller;
