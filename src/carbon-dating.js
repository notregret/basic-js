const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== Number){
        return false
    }
    let a = MODERN_ACTIVITY / sampleActivity;
    let b = 0.693 / HALF_LIFE_PERIOD;
    return  Math.ceil(a /b)
  // remove line with error and write your code here
};
