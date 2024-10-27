/*
Basic Javascript Concepts: Conditional Statements

Task:
	1. Fill the if condition to check if the balance is greater than or equal to 50
	2. If the condition fails, check if the balance is less than 15. 
		a. If the condition is satisfied, send an output `${name} is broke AF.`
		b. If the condition is not satisfied, display the balance as an output.
*/

// Do not edit the code until mentioned

const accountSheet = [
	{ name: 'Goose', balance: 53 },
	{ name: 'Panda', balance: 94 },
	{ name: 'Quack', balance: 4 },
	{ name: 'Ozone', balance: 20 }
];

accountSheet.forEach(({ name, balance }) => {
	// Edit the code over here
	if (balance>=50) {
	// Do not edit the code until mentioned
		console.log(name);
	} 
	// Continue editing the code after this
	 else if(balance<15){
        console.log(`$(name) is broke AF`);
    	}
    	else{
        	console.log(balance);
   	 }
	// Do not edit the code beyond this point.
});
