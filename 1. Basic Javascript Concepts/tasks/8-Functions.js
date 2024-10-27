/*
Basic Javascript Concepts: Functions

Task:
	1. Define a function `titleCase` which takes in a string and converts into title-case.
	Title case refers to only the first letter being capitalized. Example: "Deez nuts"

	2. Define a function `factorial` which operates using recursion to calculate the factorial of a natural numcber.

	3. Define a function `logger` which takes in arguments and displays them one by one. 
	Implement this using both the `function ()` notation and the ` => ` notation

Note: Your submission may use normal `function ()` definitions but it is advised 
that you use the arrow function notation generally.
*/

// Write your code over here. Make sure to comment before each part.

//1. 
s="deez nuts";
function titleCase(s){
    let s1=s.slice(0,1).toUpperCase()+s.slice(1).toLowerCase();
    return s1;
}
console.log(titleCase(s));


// 2.
let n=10;
factorial(n,1);
function factorial(n,fact){
    if(n==0){
        console.log(fact);
        return;
    }
    fact=fact*n;
    factorial(n-1,fact);
}

//3.
// using function()
function logger(arg){
	for(let i=0;i<arg.length;i++){
		console.log(arg[i]);
	}
}

// using => notation
let logger=(arg)=>{
	for(let i=0;i<arg.length;i++){
		console.log(arg[i]);
	}
}
