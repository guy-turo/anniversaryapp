const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
    },
    emailAddress: {
        type: String,
        required: true,
    },

}, { timestamps: true })

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact