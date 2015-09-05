/*
Alexandria Strawter
SDI Section #1
Expressions Assignment
9-01-2015
 */



//least 2 factors as variables add total and multiply, not hard-coded values, and at least 2 arithmetic operators (total, not in one place).

//at least one array, string, number
//Console.log & alerts that include calculate values with descriptive text and catenation
// one of the following (+=, -=,*=,/=, ++, --)
//test values in the comments


//Alert user of the calculations we will be doing
alert("We are going to figure out the total price of the last 4 items you recently purchased. \nWe will then calculate the average price of these items.");
//The user is prompted to enter 4 price values
var priceOne = prompt("Enter the price of your first item.");
var priceTwo = prompt("Enter the price of your second item.");
var priceThree = prompt("Enter the price of your third item.");
var priceFour = prompt("Enter the price of your fourth item.");
//place the items into an array to store the values
var items = [priceOne, priceTwo, priceThree, priceFour];
console.log("Your items are priced at " + items + " individually.");
//calculate the total price of the 4 items entered
var total= Number(items[0]) + Number(items [1]) + Number(items [2]) + Number(items [3]);
console.log(total);
//calculate the average of the items as well
var Average = total /=4;
console.log(Average);
