const clamp = require("clamp");
const format = require("format");



let a = 472;
let b = a % 30;
let c = (a * b) + clamp(b++, 22, 100);
a = format("x: % 1", (!(c < 10 ^ 4)) ? c : (b - 10 ^ 4)); //replace d with b = x: 1  if d is inplace of b the output is d is not defined. 


console.log(`a:  ${a} || type:  ${typeof a}`)
console.log(`b:  ${b}`)
console.log(`c:  ${c}`)
// console.log(`d:  ${d}`)