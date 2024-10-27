/*
Basic Javascript Concepts: Loops

Task:
	1. Using a for loop, display the squares of numbers from 1 to 10 (both included)
	2. Using a while loop, display the number and its corresponding factorial while the factorial is less than 2023.
	3. 
		a. Define a variable 'v' with the value 0. 
		b. Define a loop such that the loop runs at least once and as long as the value of v is positive after that.
		c. The loop should display the value of 'v' and then decrease the value of v by 1.
*/

// Write your code over here. Make sure to comment before each part.
// 1. 
for(let i=1;i<=10;i++){
    console.log(i**2);
}

// 2.
let i=1,fact=1;
while(fact<2023){
    fact*=i;
    if(fact<2023){
        console.log(i,"-",fact);
    }
    i++;
}

// 3.
let v=0;
do{
    console.log(v);
    v-=1;
}while(v>0); 

	
