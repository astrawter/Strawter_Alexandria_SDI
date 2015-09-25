/*
 Circumference

 Calculate the circumference of a circle.

 Parameter(s) for function:
 Radius of the circle
 Return:
 Circumference of the circle
 Result to print to the console:
 “The circumference of the circle is X”;
 */
circumference()
function circumference() {
    var radius = 12
    var answer = 2 * Math.PI * radius;
    console.log("The circumference of the circle is "+answer)
//used the link at http://www.w3schools.com/jsref/jsref_pi.asp to find how to use Pi!

}



/*
Stung!

    It takes 8.666666667 bee stings per pound to kill an animal.
    Calculate how many bee stings are needed to kill an animal in a function

Given:
Victim’s weight (in pounds)
Parameter(s) for function:
Victim’s weight (in pounds)
Return:
    Number of Bee stings
Result to print to the console:
    “It takes X bee stings to kill this animal.

 */
sting(120)

function sting(weight){
    var stings = weight / 8.666666667;
    console.log("It takes " + stings +" bee stings to kill this animal.");
}
