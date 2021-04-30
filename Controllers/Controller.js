var CarSlot = require('./../Models/CarSlot');
require('dotenv').config({ path: './.env' }); //environment variable 


exports.parkNewCar = async (req, res) =>{
  try {
     await checkSlotAvailable(req,res);  

    } catch (error) {
      res.status(400).json({
        status: 400,
        message: "Error Adding new Car !",
        error,
      });
    }
 };
  
//Initialize new List for Car Slot Numbers.
var carSlotsList = new Array();

async function checkSlotAvailable  (req,res) {
      var slotNumber =  carSlotsList.length;
      var carNumber =  req.body.carNumber;

      //Example given size is "10",
      //Check if new slots available for another car
      if (slotNumber != process.env.Slot_Size) {
        //Add new Car in Slots List
        carSlotsList.push(CarSlot(slotNumber,carNumber));

        res.status(200).json({
          status: 200,
          message:"new car added Successfully !",
          slotNumber:"Your Slot Number is: " + slotNumber
        });
      }else{
        res.status(400).json({
          status: 400,
          message:"Sorry, All slots now is fulled, We only Provide "+process.env.Slot_Size+" slots for now!",
        });
      }
  }





  exports.unParkACar = async (req, res) => {
    const Success = "UnParking Success"
    res.status(200).json({
      status: 200,
      Success,
    });
  };
  
  exports.getCars = async (req, res) => {
    const Success = "Cars Success"
  
    res.status(200).json({
      status: 200,
      Success,
    });
  };