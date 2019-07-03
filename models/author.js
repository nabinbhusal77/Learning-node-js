const mongoose = require('mongoose')

let authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('author', authorSchema)