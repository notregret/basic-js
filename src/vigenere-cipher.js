const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(value_) {
    this.value_ = value_;
    this.arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.second_arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  }
  encrypt(message, key) {
    if(message === undefined || key === undefined || message === null){
      throw new Error()
    }
    this.message123 = message.toUpperCase()
    this.message = this.message123.match(/[A-Z]/g)
    if (this.message === null){
      return this.message123
    }
    this.message = this.message.join('')
    let message2 = message.toUpperCase();
    let result = "";
    let arrr = [];
    this.key = key.toUpperCase()
    this.key = this.key.repeat(Math.ceil(this.message.length / this.key.length)).slice(0, this.message.length);
    let k = 0;
    for(let i = 0; i < this.message.length; i++){               //тута мы берем индексы и собираем слово, но оно пока говно
      let index_word = this.second_arr.indexOf(this.message[i]);
      let index_key = this.second_arr.indexOf(this.key[i])
      let finish_index = (index_key + index_word) % this.second_arr.length
      arrr.push(this.second_arr[finish_index])
    }
    for(let i = 0; i < message.length; i++){         //заменяем букавки из готового экземпляра
        if (this.arr.includes(message2[i])){
        result += arrr[k];
        k++;
      }else{
          result += message2[i]
        }
    }
    if (this.value_ === false){
      return result.split('').reverse().join('')
    }return result


  }    
  decrypt(encrypts, key) {
    if(encrypts === undefined || key === undefined){
      throw new Error()
    }
    this.message12 = encrypts.toUpperCase()
    this.message1 = this.message12.match(/[A-Z]/g)
    if (this.message1 === null){
      return this.message12
    }
    this.message1 = this.message1.join('')
    let message2 = encrypts.toUpperCase();
    let result = "";
    let arrr = [];
    this.key1 = key.toUpperCase()
    this.key1 = this.key1.repeat(Math.ceil(this.message1.length / this.key1.length)).slice(0, this.message1.length);
    let k = 0;
    for(let i = 0; i < this.message1.length; i++){               //тута мы берем индексы и собираем слово, но оно пока говно
      let index_word = this.second_arr.indexOf(this.message1[i]);
      let index_key = this.second_arr.indexOf(this.key1[i])
      let finish_index;
      if (index_word >= index_key) {
        finish_index = index_word - index_key;
        } else {
        finish_index = index_word - index_key + this.second_arr.length;
        }
      arrr.push(this.second_arr[finish_index])
    }
    for(let i = 0; i < encrypts.length; i++){         //заменяем букавки из готового экземпляра
      if (this.arr.includes(message2[i])){
        result += arrr[k];
        k++;
      }else{
        result += message2[i]
      }
    }
    if (this.value_ === false){
      return result.split('').reverse().join('')
    }return result

  }
}

module.exports = VigenereCipheringMachine;
