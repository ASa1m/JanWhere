const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contactSchema = new Schema({
    phone: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    }
   
});

module.exports = mongoose.model('Contact', contactSchema)
