class CarSlot {
    constructor() {
        this.slotNumber = '';
        this.carNumber = '';
      };
      
    getCarSlot = function() {
        return {"Slot Number":slotNumber, "Car Number":carNumber};
    };
    getSlotNumber = function() {
        return this.slotNumber;
    };
    getCarNumber = function() {
        return this.carNumber;
    };
    setSlot = function(value) {
        this.slotNumber= value;
    };
    setCarNumber= function(value) {
        this.carNumber= value;
    };

  }
  module.exports = function(slotNumber,carNumber) {
    var instance = new CarSlot();
    instance.slotNumber=slotNumber;
    instance.carNumber=carNumber;
    return instance;
  };
