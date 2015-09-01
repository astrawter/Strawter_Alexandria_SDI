/*
Alexandria Strawter
08/31/15
Expressions Worksheet
 */


//Dog Years : Calculate Sparky’s age in dog years
var humanYears = 1;
var dogYears = 7;
//Multiply his 1 human year by 7 dog years
var age = humanYears * dogYears;
//print out Sparky’s age
console.log("Sparky is " + humanYears + " human year old which is "+ age + " in dog years.");


//Slice of Pie part 1: Determine the number of slices per person if the following is true:
//Number of slices per pizza: 12
var slicesPizza = 12;
//Number of people at the party: 15
var people = 15;
//Number of pizzas ordered: 5
var wholePizza = 5;
//Multiply the slices per pizza by the amount of pizza ordered
var whole =slicesPizza * wholePizza;
// Divide the total by number of people at party to get number of slices per person
var slices = whole / people;
//Print out how many slices each person will receive //“Each person ate X slices of pizza at the party.”
console.log("Each person ate " + slices + " slices of pizza at the party.");


//Slice of Pie part 2: Determine the number of leftover slices Sparky will have
//Number of slices per pizza: 12
//Number of people at the party: 15
//Number of pizzas ordered: 5
//Number of slices Sparky gets to eat.
var leftovers = (slicesPizza * wholePizza) % people;
//Print out how many slices Sparky will eat
console.log("Sparky got " + leftovers + " slices of pizza.");

//Average shopping bill: Store the past five grocery totals as a list in an array
var groceryCost = [125, 100, 142, 112, 178];
//Add up to arrive at the total amount spent on groceries.
var total = groceryCost[0] + groceryCost[1] + groceryCost[2] + groceryCost[3]+ groceryCost[4];
//Calculate the average weekly grocery spending
var average = total / 5;
//Print out the result for both the total and average of groceries
console.log("You have spent a total of $" + total + " on groceries over 5 weeks." + " That is an average of $" + average+ " per week.");


//Discounts: Calculate the discounted price for an item

//Original price $25
var original = 25;
//Discount percentage 10%
var off = 20;
//Description of item jacket
var item = "jacket";
//Sales tax percentage 8.25%
var salesTax = 8.25/100;
//Determine the price of the item without tax
var discount = original- (original * (off/100));
//Determine the price of the item with tax
var addTax = discount * salesTax;
var withTax = discount + addTax;
//Print out the findings
console.log("Your " + item + " was originally $" + original + ", but after a " + off + "% discount, it is now $" + discount
    + " without tax, and $" + withTax +" with tax.");
