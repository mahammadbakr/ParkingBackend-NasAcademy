
function MemoryHandler(windowMs) {
  let tries = {};
  let resetTime = nextResetTimeOut(windowMs);

  this.incr = function (keySecret, cb) {
    if (tries[keySecret]) {
      tries[keySecret]++;
    } else {
      tries[keySecret] = 1;
    }

    cb(null, tries[keySecret], resetTime);
  };

  this.decrement = function (key) {
    if (tries[key]) {
      tries[key]--;
    }
  };

  // Reset Key Secret
  this.resetKey = function (key) {
    delete tries[key];
  };
  //Reset ALl IP addresses
  this.resetAll = function () {
    tries = {};
    resetTime = nextResetTimeOut(windowMs);
  };
  // Reset ALL Tries
  const interval = setInterval(this.resetAll, windowMs);
  if (interval.unref) {
    interval.unref();
  }
}


function nextResetTimeOut(windowMs) {
    const timeout = new Date();
    timeout.setMilliseconds(timeout.getMilliseconds() + windowMs);
    return timeout;
  }

  
module.exports = MemoryHandler;