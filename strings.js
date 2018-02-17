/* Strings */

// these are series of characters enclosed in double or single quotes

var myName = 'Tobi';

// adding a quote inside your string
var sentence = "He said \"Hi!\""; // He said Hi!

var sentence = 'He said "Hi!"'; // He said Hi!
console.log(sentence);
/*

Code Output
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed

*/


// concatenate two strings together with a plus operator
var fullName = "Tobi " + "Omotayo"; // 'Tobi Omotayo'
// concatenation doesn't add space between concatenated strings

// concatenate variables
var sentence2 = 'My name is ' + fullName; // 'My name is Tobi Omotayo'

fullName += ' is my name.'; // 'Tobi Omotayou is my name'

// NB: JS string values are immutable
