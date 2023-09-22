const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema ({
    username: {
        type: String
    },
    email: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        street1: String,
        city: String,
        state: String,
        country: String,
        postalCode: String
    },
    createdDate: {
        type: Date
    },
})

module.exports.user = UserSchema;