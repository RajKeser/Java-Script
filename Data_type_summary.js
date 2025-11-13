// Primitive Data Types

// Types -> Number, String, Boolean, Null, Undefined, Symbol, BigInt

const score=100;
const scoreValue=100.5;

const isLoggedIn=true;
const outsideTemp=null;

let userEmail; 

const id=Symbol('1234');
const anotherId=Symbol('1234');

console.log(id===anotherId); // false

const bigNumber=9007199254741991n;

// Reference Data Types(Non-primitive data types

// Types -> Object, Array, Function

const heroes=["Shaktiman","Naagraj","Doga"];
let myObj={
    name: "Rajkeshar",
    age: 19,
}

const myFunction=function(){
    console.log("Hellow World!")
}

console.log(typeof heroes)