const name="Rajkeshar"
const repocount=2

// console.log(name + repocount + "value")  old way of syntax

console.log(` Hello my name is ${name} and my repo count is ${repocount}`);

const gameName=new String("Rajkeshar Yadav")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('Y'));

const newString=gameName.substring(0,5);
console.log(newString)

const anotherString=gameName.substring(-2, 4); // if we provide negative value it will consider as 0
console.log(anotherString)


const newString2=gameName.slice(0,5);
console.log(newString2)
const anotherString2=gameName.slice(-4); // it will count from last
console.log(anotherString2)

const newString3="   Rajkeshar Yadav    "
console.log(newString3.trim());

const newString4="Rajkeshar Yadav"
console.log(newString4.replace("Rajkeshar", "Keshar"));    