export var message = 'hello';

export let greeting = 'Yo!';

export const saying = 'What up';


/*  CRITERION LONG DESCRIPTION
 ("comment block comments")
 create and load a JavaScript file into an execution environment such as Node or a browser
 turn on strict mode and explain why it is better for scope reasons
 find their way around proper (e.g. MDN) documentation  (for example!: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
 demonstrate how to output results using alert() and console.log() to assist with debugging
 declare and initialize variables
 demonstrate understanding of "operators" concept
 */


"use strict";

// Strict Mode prevents ... me from accidentally declaring variables (mistyping or being sloppy, such as "x = 5" without the var/let/const variable name.)

let person = "Maxwell";
console.log(person);
//("comment individual comments")  perform simple tasks using operators and assign the results to variables
let x = 15;
let y = 714;
let multiply = x * y;
let modulus = y % x;
console.log("Multiplying x and y =" +multiply + "; the Modulus of y % x is " +modulus);

if (x === "15") {
  console.log("BWAhahaha.  x was a STRING!");
}
else if (x === 15) {
  console.log("Thank the stars.  There IS some order to the Universe.");
}
else {
  console.log("Abandon hope.  You are doomed.")
}
