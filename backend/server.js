const express = require('express')
const connectDB = require('./db.js')
const cors = require('cors')
const BookModel = require('./models/Book.js')

const app = express()
app.use(express.json())
app.use(cors())
connectDB()

app.get('/', (req, res) => {
    BookModel.find()
        .then(Books => res.json(Books))
        .catch(err => res.json(err))
})

app.post('/', (req, res) => {
    BookModel.create(req.body)
        .then(book => res.json(book))
        .catch(err => res.json(err))
})

app.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    BookModel.findByIdAndUpdate(id, updatedData, { new: true })
        .then(book => res.json(book))
        .catch(err => res.json(err))
})

app.delete('/:id', (req, res) => {
    const { id } = req.params;
    BookModel.findByIdAndDelete(id)
        .then(book => res.json(book))
        .catch(err => res.json(err))
})
app.listen(3000, () => { console.log("app is running"); })