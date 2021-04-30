const router = require('express').Router();
const {
    parkNewCar,unParkACar,getCars,getCarBySlotNumber
} = require('../Controllers/Controller')


router
    .post('/api/v1/park', parkNewCar)
    .post('/api/v1/unpark', unParkACar)
    .get('/api/v1/cars', getCars)
    .get('/api/v1/carbyslot',getCarBySlotNumber)

module.exports = router
