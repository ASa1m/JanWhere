const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    animal_id: {
        type: String
    },
    user_id: {
        type: String
    },
    region: {
        type: String
    },
    location: {
        longitude: {
            type: String
        },  
        latitude: {
            type: String
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
    , likes: {
        type: Array
    }
    , comments: {
        
            user_id: {
                type: String
            },
            content: {
                type: String
            },
            date: {
                type: Date,

             }
    }
});

module.exports = mongoose.model('post', postSchema)
