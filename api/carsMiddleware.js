const { find } = require('./carsModel');

const validateCar = (req, res, next) => {
    const { vin, make, model, mileage, transmission, status } = req.body;

    if (vin && make && model && mileage) {
        req.car = req.body;
        next();
    } else {
        res.status(400).json({ error: "Car requires VIN, make, model, and mileage." });
    };
};

const validateCarId = (req, res, next) => {
    const { id } = req.params;

    find(id)
        .then(car => {
            if(car) {
                req.car = car;
                next();
            } else {
                res.status(404).json({ error: "Car with that ID cannot be found." });
            };
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
};

module.exports = {
    validateCar,
    validateCarId
};