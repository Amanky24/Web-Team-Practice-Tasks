/*
Basic Javascript Concepts: Operators

Task:
	Mention the output of the following in the comments below:
*/

let out;

// Arithmetic Operations
out = 3 + 3;
// Value: 6
out = 3 + '3';
// Value: 33
out = '3' + 3;
// Value: 33
out = '3' + '3';
// Value: 33
out = [1, 5] + [2, 3];
// Value: 1,52,3
out = { a : 3 } + { b : 2 };
// Value: [object object][object object]
out = 3 - '3';
// Value: 0
out = 'A' - 5;
// Value: NaN
out = '6' - '5';
// Value: 1
out = '153' * '3';
// Value: 459
out = ['123'] * '15';
// Value: 1865
out = 7 / 5;
// Value: 1.40
out = 413 / [['7']];
// Value: 59
out = 265 % 13;
// Value: 5

// Logical Operations
out = undefined || 0;
// Value: 0
out = 0 || undefined;
// Value: undefined
out = undefined || 1;
// Value: 1
out = 15 || undefined;
// Value: 15
out = undefined && 0;
// Value: undefined
out = 0 && undefined;
// Value: 0
out = undefined && 1;
// Value: 
out = 15 && undefined;
// Value: undefined
out = ['1'] || 1;
// Value: 1
out = [] || 1;
// Value: []
out = { a : 1 } || 1;
// Value: {a:1}
out = {} || 1;
// Value: {}
out = (1 || false) && 'Error';
// Value: Error
out = (0 || false) && 'Error'
// Value: False
