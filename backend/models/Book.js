const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title: String,
    author: String
})

const BookModel = mongoose.model("Library", BookSchema)

module.exports = BookModel