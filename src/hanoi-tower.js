const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2**disksNumber-1;
  const seconds = Math.floor(3600*(turns)/turnsSpeed)
  return { turns, seconds
  };
};