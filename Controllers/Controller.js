var CarSlot = require('./../Models/CarSlot');


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
  
//Initialize new List for Car Slots.
var carSlotsList = new Array();

async function checkSlotAvailable  (req,res) {
      var slot =  carSlotsList.length;
      var carNumber =  req.body.carNumber;

      //Example given size is "10",
      //Check if new slots available for another car
      if (slot != 10) {
        //Add new Car in Slots List
        carSlotsList.push(CarSlot(slot,carNumber));

        res.status(200).json({
          status: 200,
          message:"new car added Successfully !",
          slot:"Your Slot is: " + slot
        });
      }else{
        res.status(400).json({
          status: 400,
          message:"Sorry, All slots now is fulled, We only Provide 10 slots for now!",
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