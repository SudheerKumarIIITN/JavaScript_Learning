//author : - dheer 
//This program is used to know bacis about strings in javascript

//declaring strings and initializing
var firstName = "Sudheer";
var middleName = "Kumar";
var lastName = "Daram";

//concatination of strings using "+"
var fullName = firstName + " " + middleName + " " + lastName

//finding length of string using .lenght 
var firstNameLength = firstName.length;

//finding first letter in firstname
var firstLetterOfFirstName = firstName[0];

//finding last letter of firstname using .length
var lastLeteOfFirstName = firstName[firstName.length-1];


//printing results
console.log("First Name :- " + firstName);
console.log("Middle Name :- " + middleName);
console.log("Last Name : - " + lastName);
console.log("Concation of all fristname,middlename and last name to create full name : - "+fullName);
console.log("The length of firstname :- " + firstNameLength);
console.log("First letter of First Name : - "+ firstLetterOfFirstName);
console.log("Last letter of First Name : - " + lastLeteOfFirstName);