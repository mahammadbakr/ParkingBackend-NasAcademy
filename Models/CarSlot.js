class CarSlot {
    constructor() {
        this.slotNumber = '';
        this.carNumber = '';
        this.ipAddress='';
        this.carOwner='';
      };
      
    getCarSlot = function() {
        return {"Slot Number":slotNumber, "Car Number":carNumber,"Ip Address":ipAddress, "Car Owner":carOwner};
    };
    getSlotNumber = function() {
        return this.slotNumber;
    };
    getCarNumber = function() {
        return this.carNumber;
    };
    getIpAddress = function() {
        return this.ipAddress;
    };
    getCarOwner = function() {
        return this.carOwner;
    };
    setSlot = function(value) {
        this.slotNumber= value;
    };
    setCarNumber= function(value) {
        this.carNumber= value;
    };
    setIpAddress= function(value) {
        this.ipAddress= value;
    };
    setCarOwner = function(value) {
        this.carOwner= value;
    };

  }
  module.exports = function(slotNumber,carNumber,ipAddress,carOwner) {
    var instance = new CarSlot();
    instance.slotNumber=slotNumber;
    instance.carNumber=carNumber;
    instance.ipAddress=ipAddress;
    instance.carOwner=carOwner;
    return instance;
  };
