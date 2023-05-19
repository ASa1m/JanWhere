const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let feedbackSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
   
    message: {
        type: String
    }
});

module.exports = mongoose.model('Feedback', feedbackSchema)
