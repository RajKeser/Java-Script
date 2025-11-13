let myYoutubename="hiteshChoudharyYoutube.com"

let anotherName=myYoutubename

console.log(anotherName)
anotherName="chaiaurcode"

console.table([{myYoutubename:myYoutubename,anotherName:anotherName}])

let userOne={
    email: "keshar@gmail.come",
    upi: "keshar@ybl"
}

let userTwo=userOne
userTwo.email="keshar@google.com" // original will gets changed

console.log(userOne.email)
console.log(userTwo.email)  
