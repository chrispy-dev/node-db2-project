const db = require('./cars-model');

const validateCarId = (req, res, next) => {
    const { id } = req.params;

    db.getCarById(id)
        .then(car => {
            if (car.length > 0) {
                req.car = car;
                next();
            } else {
                res.status(404).json({ message: "Could not find car with that ID." });
            };
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Error retrieving car." });
        });
};

const validateCar = (req, res, next) => {
    const { vin, make, model, mileage, transmission_type, status_of_title } = req.body;

    if (vin && make && model && mileage) {
        next();
    } else {
        res.status(400).json({ message: "Vin, make, model, and mileage are required." });
    };
};

module.exports = {
    validateCar,
    validateCarId
};