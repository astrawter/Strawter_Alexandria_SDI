//Conditonal Logic

var kidHeight = 47;
var minHeight = 48;
var wParentHeight = 45

//if the child is old enough print to console "You can ride!"
if(kidHeight > minHeight)
//Code performed if the condition is true
    {
    console.log("You can ride the coaster!")
    }
else if(kidHeight > wParentHeight)
    {
    console.log("You can ride with a parent.")
    }
else{
    console.log("Sorry you cannot ride. :/")
    }

// Relational Operators >, <, >=, <=  (NEVER USE A SPACE BETWEEN SYMBOLS)
//Go in between pairs of objects
var a = 12;
var b = 6;
a > 20;

5 < 5;//False
5 <= 5; //True

//Equality Operators:
//Equality == (The same as instead of replacing the value states the values are the same)
//Strict Equality === (The same value and the same type
6 == "6";//True
6 === "6";//False One is a string and the other is a number
//Inequality !=  is not the same as
a != b;

//Logical Operators
//go in between Relational Expressions or Boolean values
//Always work in pairs you need to break it into only two objects
&& //And symbol Requires both in the pair to be TRUE for the entire pair to be TRUE
var budget = 100;
var androidPrice = 199.99;
var paycheck = 200;

if(androidPrice < budget && paycheck > 300){
    console.log("We can buy the phone!")
}
else{
    console.log("No phone for you!")
};

|| //Or one or the other in the pair can be true
var wonLottery = true;
if(androidPrice < budget || wonLottery){
    console.log("We can buy the phone!")
}
else{
    console.log("No phone for you!")
};
^ //Exclusive or (XOR)
! //Not operator flips a value makes TRUE into FALSE and vice versa
a!=b //the same as !(a===b)
a<b //the same as !(a<b)
a === b && b === c //to figure out if a, b, and c are all the same value

//Ternary Operators
var gpa = 48;

/* if(gpa >2.0){
    console.log("You can graduate!")
}else{
    console.log("GPA is too low!")
}; */
//Code above is same as the one below
(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA is too low!");

var age = 11;
var book;

book = (age <10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);

