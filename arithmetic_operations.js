//author : - dheer 
//This program is used to test all the basic arithmetic operations in java script
var num1 = 6;
var num2 = 5;

//creating variables to save results of addition,subtraction,multiplication,division, and reminder
var add;
var diff;
var mul;
var divi;
var reminder;

//addition
add = num1 + num2;
//subtraction
diff = num1 - num2;
//multipliction
mul = num1 * num2;
//division
divi = num1/num2;
//remider
reminder = num1%num2;

//printing numbers as well as results
console.log("number 1: - " + num1 );
console.log("number 2: - " + num2 );
console.log("Addition of number 1 and number 2 = " + add );
console.log("Subtraction of number 1 and number 2 = " + diff);
console.log("multiplication of number 1 and number 2 = " + mul);
console.log("Division of number 1 when divides with number 2 = " + divi);
console.log("Reminder when number 2 divides number 1 = " + reminder);