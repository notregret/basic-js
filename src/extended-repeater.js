const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    const {
        repeatTimes = 1,
        separator = '+',
        additionSeparator = '|',
        addition = '',
        additionRepeatTimes = 1
    } = options;  //устанавливаю значения по умолчанию

    let str1 = [];   //массив для основной строки
    let str2 = [];   //массив для добавочной

    for(let i = 0; i < repeatTimes; i++){   //заносим в массив repeattimes раз
        str1.push(str)
    }

    for(let i = 0; i < additionRepeatTimes; i++){ //также для доп слова
        str2.push(`${addition}`)
    }

    let add_str = str2.join(additionSeparator)  //так сказать создаем доп строку

    str1 = str1.map((e)=>e + add_str)  //c помощью мар добавляем к каждое строке доп строку
    return str1.join(separator)
};
  