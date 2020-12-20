const express = require('express');
const db = require('./cars-model');
const { validateCar, validateCarId } = require('./cars-middleware');

const router = express.Router();

router.get('/', (req, res) => {
    db.getCars()
        .then(cars => res.status(200).json(cars))
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Error retrieving cars." });
        });
});

router.get('/:id', validateCarId, (req, res) => {
    res.status(200).json(req.car);
});

router.post('/', validateCar, (req, res) => {
    db.insertCar(req.body)
        .then(car => res.status(201).json(car))
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Error inserting car." });
        });
});

router.put('/:id', validateCarId, (req, res) => {
    db.updateCar(req.params.id, {
        vin: req.body.vin,
        make: req.body.make,
        model: req.body.model,
        mileage: req.body.mileage,
        transmission_type: req.body.transmission_type,
        status_of_title: req.body.status_of_title
    })
        .then(updated => res.status(202).json(updated))
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Error updating the car." });
        });
});

module.exports = router;