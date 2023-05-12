const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    name: {
        type: String
    },
    region: {
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
    date: {
        type: Date,
        default: Date.now
    },
    images: {   
        type: Array
    },
    cover: {
        type: String
    },
    content: {
        type: String
    }
});

module.exports = mongoose.model('Post', postSchema)
