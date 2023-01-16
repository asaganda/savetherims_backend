const mongoose = require('mongoose');
const coordinatesSchema = new mongoose.Schema({
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    fixed: {
        type: Boolean,
        required: true,
        default: false
    }
})

const Coordinates = mongoose.model('Coordinate', coordinatesSchema);

module.exports = Coordinates;