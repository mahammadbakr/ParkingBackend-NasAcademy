const router = require('express').Router();
const {
    parkNewCar,unParkACar,getCars,getCarBySlotNumber
} = require('../Controllers/Controller')


router
    .post('/park', parkNewCar)
    .post('/unpark', unParkACar)
    .get('/cars', getCars)
    .get('/carbyslot',getCarBySlotNumber)

module.exports = router
