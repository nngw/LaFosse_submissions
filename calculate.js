//const { color, log, red, green, yellow } = require('console-log-colors');
const c = require('ansi-colors');

const calculate = (a,b,operator) => {
    
    let value = 0

    //return operator === "-"
    if(operator === "+"){
        value = a + b
    } else if (operator === "-"){
        value = a - b
    } else if(operator === "*"){
        value = a * b
    } else if(operator === "/"){
        value = a / b
    } else {
        return c.yellow("Not an operator")
    }

    if (value === 0){
        return c.yellow(value)
    } else if (value > 0){
        return c.red(value)
    } else if (value < 0) {
        return c.green(value)
    } else {
        return c.yellow("Not a number")
    } 
}


module.exports = {
    calculate
}



