//Functions - Basic Structure

/*
function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}

calcArea();

//Functions - Parameters and Arguments

function dogYears(age){
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears +" years old.");
}

dogYears(4);
dogYears(5);


//Functions - Returning Values
var total =calcArea(30,20);
function calcArea(w,h){
    var area = width * height;
    return area;//sends the answer to calcArea()
}

console.log(total);


//Functions - Function vs Procedure

//this is a function
function calcAreaF(Width, height){
    var area = width * height;
    return area;
}

//This is a procedure
function calcAreaP(width, height){
    var rea = width * height;
    console.log(area); //no return
}
 */

//Anonymous Function

//define first
var calcArea= function(w , h){
    var area = w * h;
    return area;
}
//then use it (inovke)
var a = calcArea(20,30);

console.log(a);