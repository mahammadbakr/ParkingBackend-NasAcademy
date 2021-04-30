var CarSlot = require('./../Models/CarSlot');
require('dotenv').config({ path: './.env' });


//############## Post A New Car Route

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




//############## Post Unpark A Car Route

  exports.unParkACar = async (req, res) => {
    try {
      await unParkSlot(req,res);  
     } catch (error) {
       res.status(400).json({
         status: 400,
         message: "Error Adding new Car !",
         error,
       });
     }
  };


  async function unParkSlot (req,res) {
    var slotNumber =  req.body.slotNumber;
    // var carNumber =  req.body.carNumber;

    //Check if slot list not empty & not full & slot number not bigger than size
    if (carSlotsList !== 0 || slotNumber < process.env.Slot_Size || slotNumber >carSlotsList.length) {
      //check is current slot number is empty or not
      if(carSlotsList[slotNumber] === null || carSlotsList[slotNumber] === ""){
        res.status(200).json({
          status: 400,
          message:"This Slot Number is empty !",
        });
      }else{
        // Unpark is Done
        removeSlotBySlotNumber(slotNumber);
        res.status(200).json({
          status: 200,
          message:"UnPark the car had been Successfully !",
        });
      }
    }else{
      res.status(400).json({
        status: 400,
        message:"Sorry, There is a problem with your slot number : "+ process.env.Slot_Size,
      });
    }
}

function removeSlotBySlotNumber(slotNumber) { 
  for( var i = 0; i < carSlotsList.length; i++){ 
    if ( carSlotsList[i].slotNumber === slotNumber) { 
      carSlotsList.splice(i, 1); 
    } 
  }
}



//############## Get Cars Route


  exports.getCars = async (req, res) => {  
    res.status(200).json({
      status: 200,
      "data":carSlotsList,
    });
  };



//############## Get Car By Slot Number Route
  exports.getCarBySlotNumber = async (req, res) => {  
    var slotNumber = req.body.slotNumber;

    res.status(200).json({
      status: 200,
      "Car":carSlotsList[slotNumber],
    });
  };