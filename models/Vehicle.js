// backend/models/Vehicle.js
//This file is a "blueprint" that tells the database what each vehicle's data should look like.
const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    ownerName: {
        type: String,
        required: true
    },
    vehicleNumber: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    registrationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Vehicle', VehicleSchema);