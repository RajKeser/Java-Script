const score=400
console.log(score);

const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber=53.47437436
console.log(otherNumber.toPrecision(3));

const other1Number=122.57347
console.log(other1Number.toPrecision(2))

const hundreds=100000000
console.log(hundreds.toLocaleString()); // Default locale
console.log(hundreds.toLocaleString("en-IN")); // Indian English locale

//+++++++++++++++MATHS+++++++++++++++++//
console.log(Math.PI);
console.log(Math.E);            
console.log(Math.SQRT2);
console.log(Math.SQRT1_2); // Square root of 1/2
console.log(Math.LN2);

console.log(Math.abs(-500));    
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.min(23,45,67,12,89));
console.log(Math.max(23,45,67,12,89));
console.log(Math.pow(2,5));
console.log(Math.sqrt(64));
console.log(Math.random()); // Generates random number between 0 and 1
console.log(Math.floor(Math.random()*10)+1); // Generates random number between 1 and 10
console.log(Math.log(10)); // Natural logarithm of 10
console.log(Math.log2(8)); // Base-2 logarithm of 8
console.log(Math.log10(100)); // Base-10 logarithm of 100
console.log(Math.sign(-34)); // Returns -1 for negative numbers
console.log(Math.trunc(4.9)); // Removes decimal part

//+++++++++++++++END+++++++++++++++++//
