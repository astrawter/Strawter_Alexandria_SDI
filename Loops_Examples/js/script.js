/*
//While loops
var b = 10; //sets up the index

while(b > 0){ //Checks the condition
    console.log(b + ' kegs on the wall');
    b--; //increments or decrements the index
}

//Do while loops

var c =10;

do { //do this condition
    console.log(c + " kegs on the wall");
    c--;
} //it will run until the while is proven true even if false at least the first one will run
while(c > 10);

//For Loops

for (var i=10; i > 0; i--){
    console.log(i +" bottles")
}
*/
//Break
for (var a = 1; a < 10; a++){
    if (a == 5){
        break;//stops the loop immediately
    }
    console.log(a)
}
console.log("surprise");

//Continue
for (var d = 1; d < 20; d++){
    if (d % 5  == 0){
        continue;//just stops the value that matches these conditions
    }
    console.log(d)
}
