var CarSlot = require('./../Models/CarSlot');
require('dotenv').config({ path: './.env' });


exports.parkNewCar = async (req, res) =>{
  try {
     await checkSlotAvailable(req,res);  

    } catch (error) {
      console.log(error);
      res.status(400).json({
        status: 400,
        message: "Error Adding new Car !",
        error,
      });
    }
 };
  
let carSlotsList = new Array();
async function checkSlotAvailable  (req,res) {
      let slotNumber =  carSlotsList.length;
      const carNumber =  req.body.carNumber;

      if (slotNumber != process.env.Slot_Size) {
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
    try {
      await unParkSlot(req,res);  
     } catch (error) {
       console.log(error);
       res.status(400).json({
         status: 400,
         message: "Error Unparking Car !",
         error,
       });
     }
  };


  async function unParkSlot (req,res) {
    var slotNumber =  req.body.slotNumber;

    if (carSlotsList !== 0 || slotNumber < process.env.Slot_Size || slotNumber >carSlotsList.length) {
    
      if(checkSlotIsEmpty(slotNumber)){
        res.status(200).json({
          status: 400,
          message:"This Slot Number is empty !",
        });
      }else{
        carSlotsList = removeSlotBySlotNumber(slotNumber);
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

function checkSlotIsEmpty(slotNumber){
  if( carSlotsList[slotNumber] !== slotNumber){
    if(slotNumber < carSlotsList.length && carSlotsList[slotNumber].slotNumber !== slotNumber){
      return true;
    }
    return false;
  }else{
    return true;
  }
}
function removeSlotBySlotNumber(slotNumber) { 
 return  carSlotsList.filter(i => i.slotNumber !== slotNumber); 
}



  exports.getCars = async (req, res) => {  
    res.status(200).json({
      status: 200,
      "data":carSlotsList,
    });
  };


  exports.getCarBySlotNumber = async (req, res) => {  
    var slotNumber = req.body.slotNumber;

    res.status(200).json({
      status: 200,
      "Car":carSlotsList[slotNumber],
    });
  };