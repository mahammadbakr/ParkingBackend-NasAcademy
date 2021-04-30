class CarSlot {
    constructor() {
        this.slot = '';
        this.carNumber = '';
      };
      
    getSlot = function() {
        return this.slot;
    };
    getCarNumber = function() {
        return this.carNumber;
    };
    setSlot = function(value) {
        this.slot= value;
    };
    setCarNumber= function(value) {
        this.carNumber= value;
    };

  }
  module.exports = function(slot,carNumber) {
    var instance = new CarSlot();
    instance.slot=slot;
    instance.carNumber=carNumber;
    return instance;
  };
