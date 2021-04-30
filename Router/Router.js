const router = require('express').Router();
const {
    parkCar,unParkCar,getCars
} = require('../Controllers/Controller')


router
    .post('/api/v1/park', parkCar)
    .post('/api/v1/unpark', unParkCar)
    .get('/api/v1/cars', getCars)

module.exports = router
