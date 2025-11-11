const accountId=2073;
let accountEmail="rajkeshar.2024ug2073@iiitranchi.ac.in";
var accountPassword="Rajkeshar@123";
accountCity="Ranchi";
let accountState; // if we don't want to assign any value at the time of declaration it value will be undefined


// accountId=2024; //we cannot reassign value to a constant variable
accountEmail="rajkesharyadav91@gmail.com";
accountPassword="NewPassword@456";
accountCity="Bangalore";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
