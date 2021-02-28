const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    let numberr = parseFloat(sampleActivity);
    if (numberr >= 1 && numberr < 15){
       numberr = parseFloat(sampleActivity)
    }else {
        numberr = NaN;
    }
    if (!isNaN(numberr) && typeof sampleActivity === "string") {
        return Math.ceil(Math.log(MODERN_ACTIVITY / numberr) * HALF_LIFE_PERIOD / 0.693)
    } else {
        return false
    }
}