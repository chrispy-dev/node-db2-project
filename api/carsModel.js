const db = require('../data/dbConfig');

const findAll = () => {
    return db('cars');
};

const find = (id) => {
    return db('cars')
        .where({ id: id })
        .first();
};

const create = (car) => {
    return db('cars')
        .insert(car);
};

const update = (id, changes) => {
    return db('cars')
        .where({ id: id })
        .update(changes);
};

const remove = (id) => {
    return db('cars')
        .where({ id: id })
        .del();
};

module.exports = {
    findAll,
    find,
    create,
    update,
    remove
};