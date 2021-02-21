const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let a = [];
    if (!Array.isArray(members)){
        return false}
    else {
    for(let i = 0; i < members.length; i++) {
        if (typeof members[i] === "string"){
        members[i] = members[i].replace(/\s+/g, '').toUpperCase()
        a.push(members[i][0])}


        // remove line with error and write your code here
    }return a.sort().join("")}}
