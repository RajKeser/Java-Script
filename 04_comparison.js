console.log("2"==2); // true
console.log("2">1); // true
console.log("02">1); // true


console.log(null>0); //false
console.log(null==0); // false    Equlity check and comparison operators treat null differently, comparison operators treat null as 0.
console.log(null>=0); // true


console.log(undefined>0); // false
console.log(undefined==0); // false
console.log(undefined<0); // false



// === (strict comparison)

console.log("2"===2); // false