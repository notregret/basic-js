const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let a = 0, b, c, d;
  for (let i = 0; i < matrix.length; i++){
      for (let j = 0; j < matrix[i].length; j++){
          if (matrix[i][j] === '^^'){
              a += 1;
          }
  }}
  return a
  // remove line with error and write your code here
};
