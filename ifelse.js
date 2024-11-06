// 1.QUESTION
const score = 85;

const grade = (score >= 90) ? 'A' :
              (score >= 80) ? 'B' :
              (score >= 70) ? 'C' :
              (score >= 60) ? 'D' : 'F';

console.log(`Your grade is: ${grade}`);








// 2.QUESTION
const a = 40;

const isAdult = (a >= 18) ? 'You are an adult.' : 'You are not an adult.';
console.log(isAdult);



 
// 3.QUESTION
var day="saturday";
if(day==="sunday"|| day==="saturday"){
    console.log("it is weekend");
}else{
    console.log("it is weekday")
}

// 4.QUESTION
var age=25;
var citizenship="true";
if(age>=18 && citizenship){
    console.log("Eligible for voting");
}else{
    console.log("not eligible for voting");
}


// 5.QUESTION

var username=prompt("Enter your name");
var password=prompt("Enter your password");
var pass_word="12345";
if((username.toLowerCase()==="admin") && (password===pass_word)){
    console.log("You are logged in successfully");
}else{
    console.log("You entered Wrong Credentials");
}


