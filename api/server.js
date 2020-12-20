const express = require('express');
const carsRouter = require('./cars/cars-router');

const server = express();

server.use(express.json());

server.use('/api/cars', carsRouter);

server.listen(5000, () => {
    console.log("Server listening on port 5000...");
});