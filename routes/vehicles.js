// backend/routes/vehicles.js

const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');

// Route to register a new vehicle
router.post('/register', async (req, res) => {
    const { ownerName, vehicleNumber, phoneNumber } = req.body;
    try {
        let vehicle = new Vehicle({ ownerName, vehicleNumber, phoneNumber });
        await vehicle.save();
        res.status(201).json(vehicle);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Route to get vehicle data by its ID
router.get('/:id', async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        if (!vehicle) {
            return res.status(404).json({ msg: 'Vehicle not found' });
        }
        res.json(vehicle);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;