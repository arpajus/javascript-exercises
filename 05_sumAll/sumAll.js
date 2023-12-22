const sumAll = function (number1, number2) {
let total = 0;
if (number1 < 0 || number2 < 0) return "ERROR";
if(typeof number1 !== "number" || typeof number2 !== "number") return "ERROR";

if (number1 < number2) {
    for (let i = number1; i <= number2; i++) {
    total = total + i;
    }
} else if (number1 > number2) {
    for (let i = number2; i <= number1; i++) {
    total = total + i;
    }
} else return number1;
return total;
};
// Do not edit below this line
module.exports = sumAll;
