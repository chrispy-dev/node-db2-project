const db = require('../../data/dbConfig');
const { get } = require('./cars-router');

const getCars = () => {
    return db('cars');
};

const getCarById = (id) => {
    return db('cars')
        .where({ id: id });
};

const insertCar = (car) => {
    return db('cars').insert(car);
};

const updateCar = (id, changes) => {
    return db('cars')
        .where({ id: id })
        .update(changes)
        .then(updated => updated > 0 ? getCarById(id) : null)
};

module.exports = {
    getCars,
    getCarById,
    insertCar,
    updateCar
};