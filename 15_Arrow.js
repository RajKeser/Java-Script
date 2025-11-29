const user ={
    username: "Rajkeshar",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this)
    }
}

user.welcomeMessage()
user.username="Santosh"
user.welcomeMessage()

//console.log(this)

function chai(){
    let username="hitesh"
    console.log(this);
}

chai()

// Arrow function 

/*const chaiArrow=()=>{
    let username="Santosh"
    console.log(this);
}*/

const addTwo=(num1, num2) => {
    return num1+num2
}

console.log(addTwo(5,7));