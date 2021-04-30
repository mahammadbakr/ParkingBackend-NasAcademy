const router = require('express').Router();
const {
    parkNewCar,unParkACar,getCars,getCarBySlotNumber
} = require('../Controllers/Controller')


router
    .post('/park', parkNewCar)
    .post('/unpark', unParkACar)
    .get('/cars', getCars)
    .get('/arbyslot',getCarBySlotNumber)

module.exports = router
