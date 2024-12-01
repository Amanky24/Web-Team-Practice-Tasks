/*
More Javascript Concepts: Error Handling

Task:
	1. Define a function `squareRootCalculator` which accepts an argument `n`.
	If `n` is not a number, throw an Error for the same.
	If `n` is negative, throw an Error, since the calculator only calculates real roots.
	Use `Math.sqrt` to calculate and return the square root of `n`.

	2. Define a function `asyncResponseHandler` which sends a fetch request (see 3-async-await.js)
	There are chances that the response might end in an error. Therefore, you'll have to take care of that.
	If there is no error, proceed as you did in the previous part.
	If there is an error, display an output "The request ended in an error."
*/

// Do not edit the code until mentioned

//1...
function squareRootCalculator(n){
    if(isNaN(n)){
        throw Error("Please enter a number");
    }
    else if(n<0){
        throw Error("Enter a positive value");
    }
    else{
        console.log(Math.sqrt(n));
    }
}
let num=prompt("Enter a number");
squareRootCalculator(num);

