/*let arr=[2,"hello",true,45.6] // mixed array and is dynamic in nature
console.log(arr.length);

let arr2= new Array(10,20,30,40) // but not recommended

// operations on array //

arr.push(3);
arr.unshift(5);
console.log(arr);

arr.pop();
arr.shift();
console.log(arr);

console.log(typeof arr);

// Most important array methods //

let doubleArr=arr.map(x=>x*2);
console.log(doubleArr);

let even=arr.filter(x=>x%2==0);
console.log(even);

arr3=[2,3,4,67,5,8]
let sum=arr3.reduce((acc,cur)=>acc+cur,0);
console.log(sum);

arr3.sort((a,b)=>a-b);
console.log(arr3);
console.log(arr3.indexOf(67));
console.log(arr3.includes(10));
console.log(arr3.reverse());
console.log(arr3.join(""));
console.log(Array.isArray(arr3));

// slice and splice //
// slice => creates a new array from the given array without modifying the original array
// splice => modifies the original array by adding/removing elements

let slicedArr=arr3.slice(1,4); // includes index 1 to 3
console.log(slicedArr);  
console.log(arr3);

let splicedArr=arr3.splice(1,5); // includes index 1 to 5
console.log(splicedArr);
console.log(arr3); */

//++++++++++ Part 2 ++++++++++//

const marvel_Heroes=["Ironman","Spiderman","Hulk","Thor"];
const dc_Heroes=["Batman","Superman","Flash"];

marvel_Heroes.push(dc_Heroes);
console.log(marvel_Heroes);  // nested array

// concat method
const all_Heroes=marvel_Heroes.concat(dc_Heroes);
console.log(all_Heroes);

// spread operator
const all_Heroes2=[...marvel_Heroes,...dc_Heroes];
console.log(all_Heroes2);

// for...of loop
for(let hero of all_Heroes2){
    console.log(hero);
}


const another_Array=[1,2,3,[4,5,6],7,[8,9,[4,5]]];

const real_another_Array=another_Array.flat(Infinity); // flat method to flatten the array
console.log(real_another_Array);


console.log(Array.isArray("Rajkeshar"));
console.log(Array.from("Rajkeshar")); // converts string to array
console.log(Array.from({name:"Rajkeshar"})); // converts object to array

let score1=10;
let score2=20;
let score3=30;
console.log(Array.of(score1,score2,score3)); // creates an array from the given arguments




