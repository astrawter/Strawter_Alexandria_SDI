/*
 Alexandria Strawter
 SDI Section #1
 Conditionals Assignment
 9-16-2015
 */

//Some type of math is used an a calculation and includes at least 2 factors as variables, not hard-coded values. Prompted user for values also checked to make sure a value was entered.
var num1 = prompt("We are going to calculate if the total of 3 random numbers is even or odd after being multiplied by 3. \nEnter the first number");
if(num1 === ""){
    num1 = prompt("Please enter a value")
};
var num2 = prompt("Now for the second number.");
if(num2 === ""){
    num2 = prompt("Please enter a value")
};
var num3 = prompt("Finally your last number.");
if(num3 === ""){
    num3 = prompt("Please enter a value")
};
var add = [Number(num1) + Number(num2)+ Number(num3)];//added the totals of the entered values
alert("Your three numbers equal " + add);//alerted the user of the total of the entered values

var total = add *3;//multiplied the total by 3
alert("After being multiplied by three the total is " + total);//alerted user of the total




//2 Conditional Statements that are NOT part of prompt validation are present in code and work correctly.

//At least 1 Else If Statement is present in code and works correctly.

//At least 1 Ternary Statement is present in code and works correctly.

//At least 1 Logical Operator is present in code and works correctly.

//3 user prompts are correctly used in the code.

//All prompts are validated and checked to verify values using conditionals

//Each line of code has a meaningful comment.

//Test values are present in a comment at the end of code and are correct.

