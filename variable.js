// there are three types of process of declaring variable they are : var , let and const
// reserved word can't be used as a variable name. For eg :- var var = 10; is a faulty declaration

// In var the variable can be declared twice and can be re-assigned
var a = 10; // a is identifier , "=" is assignment operator , "10" is literal and this process is called declaring variable.
var a = 'hello';
console.log( a + a);

// In let variable can't be declared twice but can be re-assigned 
let b = 20;
 b = 5; // re-assigned variable
console.log(b);

// const is a bit different neither we can declare variable twice nor we can re-assign it 
const pulsar = 200;
console.log(pulsar)