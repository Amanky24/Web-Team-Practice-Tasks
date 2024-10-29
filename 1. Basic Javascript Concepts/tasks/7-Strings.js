/*
Basic Javascript Concepts: Strings

Task:
	1. Use string methods to check if the following strings are a part of the string `message`
		a. Hello
		b. aa
		c. Goo

	2. Write a program which counts the number of words in the array `words` that
		a. start with 're'
		b. end with 'ent'
	Note: For task 2, make sure that the string checking is done irrespective of the case (lowercase or uppercase)

	3. Perform the following operations on the string `joke` (case insensitive)
		a. For each letter in the English alphabet, display the first instance of its appearance in the string
		b. If there is no instance of the letter, do not display the same
	Ex: 
		If joke = 'Goose'
		Output:
			e: 4
			g: 0
			o: 1
			s: 3

Note: Your submissions must use string methods
*/

// Do not edit the code until mentioned
const message = 'Hello, World! This is Goose. Get your treats from Ankan when he goes "Aa..."';
const words = [
	...['Reject', 'Resent', 'Indent', 'Rent'],
	...['Right', 'Moment', 'Print', 'Reinvent'],
	...['Koala', 'Accent', 'Reprimand']
];
const joke = 'I spent hours looking far and wide for something which was right under my nose.';

// Write your code over here. Make sure to comment before each part.

// 1.

console.log(message.includes("Hello"))
console.log(message.includes("aa"))
console.log(message.includes("Goo"))

// 2.
for(let i=0;i<words.length;i++){
    //console.log(words[i].substring(0,2).toLowerCase());
    if((words[i].substring(0,2).toLowerCase())=="re"){
        if((words[i].substring((words[i].length-3)).toLowerCase())=="ent"){
        console.log(words[i]);
        }
    }
}

//3. 
let str="aaa";
console.log(str.indexOf('a'));

let jokes=joke.toLowerCase();
for(let i=97;i<=122;i++){
    let char=String.fromCharCode(i);
    let n=jokes.indexOf(char);
    if(n!=-1){
        console.log(char," : ",n);
    }
}


