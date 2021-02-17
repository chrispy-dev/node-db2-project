const express = require('express');
const db = require('./carsModel');
const { validateCar, validateCarId } = require('./carsMiddleware');

const server = express();

server.use(express.json());

server.get('/cars', (req, res) => {
    db.findAll()
        .then(cars => res.status(200).json(cars))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

server.get('/cars/:id', validateCarId, (req, res) => {
    res.status(200).json(req.car);
});

server.post('/cars', validateCar, (req, res) => {
    db.create(req.car)
        .then(car => res.status(201).json(car))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

server.put('/cars/:id', validateCarId, (req, res) => {
    db.update(req.params.id, {
        ...req.body,
        vin: req.body.vin,
        make: req.body.make,
        model: req.body.model,
        mileage: req.body.mileage,
        transmission: req.body.transmission,
        status: req.body.status
    })
        .then(changes => res.status(202).json(changes))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

server.delete('/cars/:id', validateCarId, (req, res) => {
    db.remove(req.params.id)
        .then(removed => res.status(202).json(removed))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

module.exports = server;