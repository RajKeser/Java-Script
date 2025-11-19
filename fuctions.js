function myname(){
    console.log("R");
    console.log("a");
    console.log("j");
}

//myname();

function addTwoNum(num1, num2){
    console.log(num1+num2);
}

addTwoNum(5,null);
addTwoNum(5,undefined);
addTwoNum(5,"10");


function loginUserMessage(username){
    if(!username){
        console.log("please enter a valid username");
        return;
    }
   return `${username} just logged in`;
}

console.log(loginUserMessage("Rajkeshar"));

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(100,    200, 400))

const user={
    username: "Rajkeshar",
    price:199
}

function handleObject(anyobject){
     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user);

handleObject({
    username:"Santosh", 
    price:299
});


const mynewArray=[100,200,300,400,500];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(mynewArray));