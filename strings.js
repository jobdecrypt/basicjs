var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// or with single qoute
var myStr = "<a href=http://www.example.com target=_blank>Link</a>";

// or with
var myStr = "<a href=http://www.example.com target=_blank>Link</a>";

/* 
CODE OUTPUT

\' single qoute
\" double qoute
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed

*/

var myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine";

console.log(myStr2);

// concatenation WITH +=
var ourStr = "I come first. "; // put space after .
ourStr += "I come second.";

console.log(ourStr);

var myStr3 = "This is my first sentence. "; // put space after .
myStr3 += "This is my second sentence.";

console.log(myStr3);
