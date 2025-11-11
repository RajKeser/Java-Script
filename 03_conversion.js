let score="33";

console.log(typeof score);
console.log(typeof(score)); // using as method

let valueInNumber=Number(score); // convert string to number
console.log(typeof valueInNumber);
console.log(valueInNumber);

let score1="33abc";
let valueInNumber1=Number(score1); // convert string to number
console.log(typeof valueInNumber1);
console.log(valueInNumber1); // NaN => Not a Number => it is of type number

let score2=null;
let score3=undefined;
let score4=true;

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1
// false => 0

let someNumber=33;
let stringNumber=String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);

// ***************** OPERATIONS *****************

let val=25;
let negVal=-val;
console.log(negVal);

console.log(2**3); // 2^3=8

let str1="Rajkeshar";
let str2="Yadav";
let str3=str1+" "+str2;
console.log(str3);

console.log("Hello "+ 5); // Hello 5

console.log(1+"2"); // "12"
console.log("1"+2); // "12"
console.log("1"+2+2); // "122"
console.log(1+2+"2"); // "32"


let num1, num2, num3;
num1=num2=num3=2+3;
console.log(num1,num2,num3);

let gameCounter=100;
gameCounter++;
console.log(gameCounter);




