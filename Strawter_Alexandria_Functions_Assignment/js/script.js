/* Alexandria Strawter
   SDI Section 1
   9/24/15
   Functions Assignment
 */

/*a. At	least	2	functions	– 1	Normal	and	1	Anonymous
b. Each	function	must	use	arguments	and	parameters
c. 1	function	must	contain	3	parameters
d. A	value	must	be	returned	for	each	function and	saved	in	a	variable	in	the	main
code.
    e. You	must	not	use	“main	code”	variable	inside	of	a	function,	you	must	pass	them
in	as	arguments.
    f. All	user	prompts	must	be	validated	using	a	while	loop. */
//entering starting number
var start = prompt("What is your starting score?");
//making sure it is not blank
while(start ==="" || isNaN(start) || start > 50) {

    if (start === "") {
        start = prompt("Please enter a number. \nWhat is your starting score?");
    } else if (isNaN(start)) {
        start = prompt("Please only use numbers. \nWhat is your starting score?");
    }
    else if (start > 50) {
        start = prompt("Please enter a number less than 50. \nWhat is your starting score?");
    }
}
console.log(start);