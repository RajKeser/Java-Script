// singleton 
// object.create

//object literal

const mysym=Symbol("key1");


const jsUser={
    name:"Rajkeshar",
    age:20,
    [mysym]:"key1", // symbol as key
    location:"Ranchi",
    email:"rajkesharyadav91@gmail.com",
    isloggediin:true,
    lastLoginDays:["Monday","Friday","Saturday"]
}

console.log(jsUser.email);
//console.log(jsUser[email]);  it will give error because key are treated as string or symbol so it should be in quotes
console.log(jsUser["email"]); 
console.log(jsUser[mysym]);

jsUser.email="rajkeshar@google.com"; // updating the value of email key
//Object.freeze(jsUser); // freezing the object to prevent further modifications
jsUser.email="rajkeshar@microsoft.com";
console.log(jsUser.email); 

jsUser.greeting=function(){
    console.log("Hello js User");
}

jsUser.greeting(); 


// +++++++ part 2: singleton using Object.create ++++++++++

//const tinderUser=new Object(); 

const tinderUser={}; 

tinderUser.id="321abac";
tinderUser.name="Anmol";
tinderUser.isloggediin=false;

console.log(tinderUser);

const regularUser={
    email:"rajkeshar@google.com",
    fullname:{
        Userfullname:{
            firstname:"Rajkeshar",
            lastname:"Yadav"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.Userfullname.firstname);

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};

//const obj3={obj1, obj2};
const obj3=Object.assign({}, obj1, obj2);
console.log(obj3);

// one more method to print is using spread operator


const users=[
    {
        id:1,
        name:"Rajkeshaar"
    },
    {
        id:1,
        name:"Rajkeshaar"
    },
    {
        id:1,
        name:"Rajkeshaar"
    },
]

users[1].name

//+++++++++ part-3 ++++++++++//

const course={
    course_name:"JavaScript",
    price:999,
    course_instructor:"Rajkeshar",
}

// course.course_instructor  

const{course_instructor}=course;
console.log(course_instructor);

const{course_instructor: instrctor}=course;
console.log(course_instructor);

// 

