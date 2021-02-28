/*
--discard-next excludes the next element of the array from the transformed array.
--discard-prev excludes the previous element of the array from the transformed array.
--double-next doubles the next element of the array in the transformed array.
--double-prev doubles the previous element of the array in the transformed array.
*/
const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let a = [];

    if (!Array.isArray(arr)){
        throw "THROWN"
    }else if (arr.length === 0) {
        return arr
    }
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === "--discard-next"){
            if(i + 1 < arr.length){
            i++
            continue
        }else{break}}
        if (arr[i] === "--discard-prev"){
            if(i - 1 > 0 && arr[i - 2] !== "--discard-next") {
                a.pop()
                continue
            }else{continue}}
            if (arr[i] === '--double-next'){
                if(i + 1 < arr.length){
                    a.push(arr[i + 1])
                    continue
                }else{break}
            }
            if (arr[i] === '--double-prev') {
                if(i - 1 > 0 && arr[i - 2] !== "--discard-next"){
                    a.push(arr[i - 1])
                    continue
                }else{continue}
        }
        a.push(arr[i])
    }
return a

}
/*}else if(arr.includes('--discard-next') || arr.includes('--discard-prev') || arr.includes('--double-next') || arr.includes('--double-prev')){
        if(arr.includes('--discard-next')){
            b = arr.indexOf('--discard-next', 0)
            return arr = arr.splice(b, 1)
        }


        }else{
        return arr
    }//*/