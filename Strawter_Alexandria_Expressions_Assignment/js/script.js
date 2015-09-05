/*
Alexandria Strawter
SDI Section #1
Expressions Assignment
9-01-2015
 */


//Alert user of the calculations we will be doing
var end ="Thank you for testing my calculator!"
alert("We are going to figure out the total price of the last 4 items you recently purchased. \nWe will then calculate the average price of these items.");
//The user is prompted to enter 4 price values
var priceOne = prompt("Enter the price of your first item.");
var priceTwo = prompt("Enter the price of your second item.");
var priceThree = prompt("Enter the price of your third item.");
var priceFour = prompt("Enter the price of your fourth item.");
/* For test values I entered 10,10,10,& 10*/
//place the items into an array to store the values
var items = [priceOne, priceTwo, priceThree, priceFour];
//print to console the prices entereed
console.log("Your items are priced at " + items + " individually.");
//calculate the total price of the 4 items entered
var total= Number(items[0]) + Number(items [1]) + Number(items [2]) + Number(items [3]);
/* For the test values I entered I was given a total of 40 which is correct*/
//print to console and alert the user of the total
console.log("The total of the four items combined is $" + total);
alert("The total of the four items combined is $" + total);
//create a variable for the number of items to divide by
var divide= 4;
//calculate the average of the items
/* For the test values I entered I was given an average of 10 which is also correct*/
var Average = total /=divide;
//print to console and alert the user of the average
console.log("The average of the items is $" + Average);
alert("The average of the items is $" + Average);
alert(end);
