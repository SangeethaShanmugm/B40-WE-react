// var -> we can  redeclare and reassign
// let -> we cannot redeclare but can reassign
// const -> we cannot redeclare nor reassign

var a = 10;
// var a -> declaration
// a = 10 -> assigment

var a = 10;
console.log(a); // 10

// reassign
var a = 11;
a = 12;
console.log(a); // 12

//redeclare
var a = 11;
var a = 12;
console.log(a); // 12

//let -> we cannot redeclare
//-----------------------------
// let b = 20;
// let b = 21;
// console.log(b); //Uncaught SyntaxError: Identifier 'b' has already been declared

//let reassign
let c = 20;
c = 21;
console.log(c);

// const x = 10;
// const x = 11;
// console.log(x); // Uncaught SyntaxError: Identifier 'x' has already been declared

const y = 10;
y = 11;
console.log(y); //Uncaught TypeError: Assignment to constant variable.
