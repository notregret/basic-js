const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count;
    let max_count = 1;
    for(let i = 0; i < arr.length;i++){
      if (Array.isArray(arr[i])){
        count = 1 + this.calculateDepth(arr[i])
      }
      if (max_count < count){
        max_count = count;
      }
    }

    return max_count
  }
}