/*
More Javascript Concepts: Callbacks, Timeouts and Intervals

Task:
	1. Define a function `comapreStrings` which compares two strings in an alphabetical order (case insensitive)
	The function should return a promise which is rejected when the given inputs are not strings.
	The promise will be resolved with a value of 
		* `-1` if the first string is before the second in alphabetical order.
		* `0` if both strings are equivalent.
		* `-1` if the second string is before the first in alphabetical order.

	2. `randomPromise` generates a pseudorandom promise which either ends up being rejected or ends in a Heads/Tails output.
	Generate a randomPromise, and using then and catch, console log
	whether the promise is resolved or rejected, while also logging the output.

	3. `timedPromise` generates a promise which is resolved after `n` seconds with the value `n`
	Using `timedPromise`, generate 5 Promises for n = 1, 2, 3, 4, 5. 
	All 5 of them must be called at the same time (i.e., second promise not after the first one ends)
	Once all five of them are resolved, display an output "Done"
	
	NOTE: No use of async methods is permitted in this part.
*/

// Do not edit the code until mentioned

const randomPromise = () => new Promise((resolve, reject) => {
	if (Math.random() < 0.5) return reject('It was found lacking.');
	return resolve(Math.random() >= 0.5 ? 'Heads' : 'Tails');
});

const timedPromise = n => new Promise(r => setTimeout(() => {
	console.log(n);
	r(n);
}), n * 1_000);

// Write your code over here. Make sure to comment before each part.

// 1...

function comapreStrings(string1,string2){
    return new Promise((resolve,regret)=>{
        let arr=[string1,string2];
        arr.sort();
        if(arr[0]===string1){
            resolve(-1)
        }
        else if(string1===string2){
            resolve(0);
        }
        else if(arr[0]===string2){
            resolve(1);
        }
        else{
            regret("not strings");
        }
    })
}
comapreStrings("Aman","Virat")

// 2...

function randomPromise(){
     new Promise((resolve,regret)=>{
        if(Math.random()>0.5){
            if(Math.random>0.75){
                return resolve("heads")
            }
            else{
                return resolve("tails");
            }
        }
        else{
            return regret("It was found lacking");
        }
    })
}
randomPromise()
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })


//3...
const timedPromise=(n)=> new Promise((resolve,regret)=>{
    setTimeout(()=>{
        resolve(n);
    },n*1000)
})

for(let i=1;i<=5;i++){
    timedPromise(i);
}

timedPromise(5).then(()=>{
    console.log("done");
})
