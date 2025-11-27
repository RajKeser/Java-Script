//var c=300  still 30 will be printed because var is function scoped
let a=200

if(true){
    let a=10
    const b=20
    //var c=30
    console.log("Inner a:",a);
}

//console.log(a);
//console.log(b);
//console.log(c);
console.log("Outer a:",a);

function one(){
    const username="rajkeshar"

    function two(){
        const website="youtube"
        console.log(username);
    }
    console.log(website);
    two();
}


if(true){
    const username="keshar"
    if(username==="keshar"){
        const website="github"
        console.log(username+website);
    }
    // console.log(website);
}
//console.log(username);

//+++++++++++++ interesting ++++++++++++++

console.log(addOne(5));
function addOne(num){
    return num+1
}


addTwo(6); //error because function expression not hoisted
const addTwo=function(num){
    return num+2
}


 