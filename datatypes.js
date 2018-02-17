/* Data Types */

// There are 7 Data types

// Boolean

var data = false;

if (data) {
    console.log("Booleans rule!");
} else {
    console.log("Booleans are lame");
}

// null: 
// Assigment value that means no value

var n = null;
console.log(n * 32);


// undefined
// a variable has not be declared on has been declared but hasn't been assigned a value

var a;
console.log(a + 2);


// Number
// any number
var num = 3.6;
var ber = 6.4;
console.log(num + ber);


// String. "Howdy"
// anything that's a word

var name = "Israel";
console.log("Hi! My name is " + name);



// Symbol
// new in ES6
// Data types whose instances are unique and immutable

var sym1 = Symbol("foo");
var sym2 = Symbol("foo");
console.log(sym1 === sym2);
console.log(String(sym1) === String(sym2));


// Object
// an object is just a collection of properties.
// property is an association between a name or a key and a value
var myCar = new Object(); 
// var myCar = {}; // same as above
myCar.make = "Ford";
myCar.model = "Mustang";

console.log(myCar.make);


