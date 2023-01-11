const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const cors = require('cors')
app.use(methodOverride('_method'))
app.use(express.json());
app.use(cors())

const Coordinates = require('./models/coordinates.js')

// ROUTES
// Get all coords route
app.get('/coord', (req, res) => {
    Coordinates.find({}, (err, foundCoords) => {
        res.json(foundCoords)
    })
})

// Create coord route
app.post('/coord', (req, res) => {
    Coordinates.create(req.body, (err, createdCoord) => {
        res.json(createdCoord)
    })
})

// Get 1 specific coord
app.get('/coord/:id', (req, res) => {
    Coordinates.findById(req.params.id, (err, foundCoord) => {
        res.json(foundCoord)
    })
})

// Delete coord route
app.delete('/coord/:id', (req, res) => {
    Coordinates.findByIdAndRemove(req.params.id, (err, deletedCoord) => {
        res.json(deletedCoord)
    })
})

// Update coord route
app.put('/coord/:id', (req, res) => {
    Coordinates.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedCoord) => {
        res.json(updatedCoord)
    })
})

app.listen(3000, () => {
    console.log('listening...')
})

mongoose.connect('mongodb://localhost:27017/savetherims')
mongoose.connection.once('open', () => {
    console.log('connected to mongo...')
})