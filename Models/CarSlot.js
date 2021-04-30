class CarSlot {
    constructor() {
        this.slotNumber = '';
        this.carNumber = '';
      };
      
    getSlot = function() {
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
