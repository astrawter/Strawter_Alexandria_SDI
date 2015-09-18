/*
 Alexandria Strawter
 SDI Section #1
 Conditionals Assignment
 9-16-2015
 */

//Some type of math is used an a calculation and includes at least 2 factors as variables, not hard-coded values. Prompted user for values also checked to make sure a value was entered.
var num1 = prompt("We are going to calculate if the total of 3 random numbers is even or odd before and after being multiplied by 3. \nEnter the first number");
if(num1 === ""){
    num1 = prompt("Please enter a value")
};
if (isNaN(num1)){
    num1 = prompt("Only enter numbers! Type one in now")
}
var num2 = prompt("Now for the second number.");
if(num2 === ""){
    num2 = prompt("Please enter a value")
};
if (isNaN(num2)){
    num2 = prompt("Only enter numbers! Type one in now")
}
var num3 = prompt("Finally your last number.");
if(num3 === ""){
    num3 = prompt("Please enter a value")
};
if (isNaN(num3)){
    num3 = prompt("Only enter numbers! Type one in now")
}

var add = [Number(num1) + Number(num2)+ Number(num3)];//added the totals of the entered values
alert("Your three numbers equal " + add);//alerted the user of the total of the entered values

//Discover if the addition of the three numbers is even or odd
var total = add *3;//multiplied the total by 3
if(add % 2 == 0)
{
    alert ('The total '+ add +' is even. \nAfter being multiplied by three the total is ' + total);}
else if (!(add % 2==0)) //used the logical operator ! to show that the remainder is not equal to 0
    {
        alert('The total ' + add + ' is odd. \n After being multiplied by three the total is ' + total);
    }//alerted user of the total and the what the new total is after multiplied by 3


//2 Conditional Statements that are NOT part of prompt validation are present in code and work correctly.


//At least 1 Ternary Statement is present in code and works correctly.


//Test values are present in a comment at the end of code and are correct.

