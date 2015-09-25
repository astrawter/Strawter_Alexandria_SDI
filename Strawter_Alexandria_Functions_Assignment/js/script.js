/* Alexandria Strawter
   SDI Section 1
   9/24/15
   Functions Assignment
 */

//Explaining to the user about what is about to take place
alert("Welcome to my fake game score calulcator! We Will take your starting score which is less than 50. \nWe will add the points gained from three games. \nFinally we will enter the points gained during the double points round.\nLet's get started!")
//entering starting number
var start = prompt("What is your starting score?");
//making sure it is not blank
while(start ==="" || isNaN(start) || start > 50) {
//making sure the starting number is not blank
    if (start === "") {
        start = prompt("Please enter a number. \nWhat is your starting score?");
    } else if (isNaN(start)) { //making sure the starting number is a number
        start = prompt("Please only use numbers. \nWhat is your starting score?");
    }
    else if (start > 50) { //making sure the starting number is less then 50
        start = prompt("Please enter a number less than 50. \nWhat is your starting score?");
    }
}
console.log(start);



//We will then ask for the points to be deducted. No more than 10 points
var first= prompt("How many points were added in the first game? \n(No number greater than 10");
while(first ==="" || isNaN(first) || first > 10) { //validating
        first = prompt("Please enter a number. \nWhat is your first score?");
}

var second= prompt("How many points were added in the second game? \n(No number greater than 10");
while(second ==="" || isNaN(second) || second > 10) { //validating
    second= prompt("How many points were added in the second game? \n(No number greater than 10");
}



var third= prompt("How many points were added in the third game? \n(No number greater than 10");
while(third ==="" || isNaN(third) || third > 10) { //validating
        third = prompt("Please enter a number. \nWhat is your third score?");
}

//define anonymous function first
var add= function(one , two , three){
    var score = Number(one) + Number(two) + Number(three);
    return score;
}

var a = add(first, second, third);
var total = a + Number(start);

console.log(total);
var multiple = prompt("How many points where earned in the double points round?");
while(multiple ==="" || isNaN(multiple) || multiple > 10) { //validating
   multiple= prompt("How many points were added in the second game? \n(No number greater than 10");
}

var double = multiple * 2


var final =Number(double)+Number(total);
console.log(final);
alert("Your score is " + final + " points!");