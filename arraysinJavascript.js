//author : - dheer 
//This program is used to practice and learn about arrays in javascript

//creating an array
var ourArray=["Sudheer","Hello",9898];
//printing an array
console.log(ourArray);
console.log(ourArray.length);


var myArray = ["sudheer","kumar","daram"];
//printing array
console.log("Before changing first element of array : -" + myArray);
//modifying array first element using index
myArray[0]="Anil";
//printing array after modification
console.log("After changing first element of array : - " + myArray);

//multidimensional arrays
//3 x 3 matrix
var matrix = [[1,2,3,4,5],[4,5,6],[7,8,9]];
//priting matrix
console.log(matrix);
console.log(matrix[0].length);
//printing first element of matrix using double index like c
console.log(matrix[0][0]);

//push and pop in arrays
//creating new array for performing push and pop
var newArray = [1,2,3,4,5,6,7,8,9,0];
console.log(newArray);
console.log(newArray.length);
//push will take input as element and insert at the end of array
newArray.push(10);
console.log(newArray);
//pushing 11 in the new array
newArray.push(11);
console.log(newArray);
//pop will remove last element from the array
newArray.pop();
console.log(newArray);
//again poping element
newArray.pop();
console.log(newArray);
//testing
newArray[15]=12;
console.log(newArray);
//undefined
console.log(newArray[13]);
console.log(newArray[14]);


//using shift and unshift 
//shift will remove first element from array
//unshift will insert element at the begining
console.log(newArray);
//applying shift in array
newArray.shift();
//printing array after applying shift operating
console.log(newArray)
//applying shift in array
newArray.shift();
//printing array after applying shift operating
console.log(newArray)
//applying unshift on array
newArray.unshift("100");
//printing array after unshifing with 100
console.log(newArray);
//applying unshift on array
newArray.unshift("200");
//printing array after unshifing with 200
console.log(newArray);
//sorting array
newArray = newArray.sort();
console.log(newArray);