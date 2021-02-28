const CustomError = require("../extensions/custom-error");

const chainMaker = {
  a: [],
  getLength() {
    return this.a.length;
  }
  ,
  addLink(value) {
    this.a.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if(isNaN(position) || position >= this.a.length){
      this.a = []
      throw new Error()
    }
    this.a.splice(position-1,1)
    return this
  },
  reverseChain() {
    this.a.reverse()
    return this
  },
  finishChain() {
    const result = this.a.join('~~')
    this.a = []
    return result
  }
};

module.exports = chainMaker;
