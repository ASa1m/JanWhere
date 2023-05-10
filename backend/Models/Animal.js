const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let animalSchema = new Schema({
    name: {
        type: String
    },
    region: {
        type: String
    },
    population: {
        type: Number
    },
    category: {
        type: String
    },
    location: {
        longitude: {
            type: Number
        },
        latitude: {
            type: Number
        }
    },
    description: {
        type: String
    },
    image: {
        type: String
    }

}, {
    collection: 'animals'
})

module.exports = mongoose.model('Animal', animalSchema)