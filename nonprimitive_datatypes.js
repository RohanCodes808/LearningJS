/* non primitive data types are those data types that are not directly represented as a single value , are more complex than the primitive data 
types and are used for storing certain data or information*/ 

// 1. OBJECTS
// objects are collection of key-value pairs, non primitive data types that are used to store data and sometimes objects aswell

const info = {
    name: "shyam",
    employeeid: 1002,
    address: {
        street: "shreebahal",
        city: "lalitpur"
    }
};

console.log(info['address']);

// 2. ARRAYS
// Arrays are the non primitive data types that are used to store values. They can store different types of data types including arrays and objects


const color = ['red','green','purple','white','magenta'];
console.log(color);


// 3. FUNCTION
// Functions are the block of code that are designed to perform a particular task

function name(firstName,lastName){
    return (`hello my name is ${firstName} and my last name is ${lastName}`);
};

function add(a,b){
    return (a+b);
};
console.log(add(8,8));
console.log(name("hero","hira"));


let a = 1;
let b = "harry"
console.log(a+b);
console.log(typeof(a+b));

const information = {
    size: 10,
    price: 500,
    location: "bagmati"
};
information['size'] = 509;
information['height'] = "tall";
console.log(information);