// one use for Date object is to time processes - one theoretically could develop a timeclock for employees, or need speed data for runtimes, etc.

// Time generates a human-readable return of milliseconds since midnight 1 Jan 1970 (rounded up to seconds).
const timeNow = new Date();


// to develop human-readable date for components, use Date.toString

var d = new Date()

alert( d.toString() )
//d.getHours() or d.getDate(), etc will parse details out.

// new Date(2011, 0, 1, 2, 3, 4, 567) will convert back to human-readable:
new Date(2011, 0, 1, 2, 3, 4, 567) //returns "Sat Jan 01 2011 02:03:04 GMT-0700 (MST)"


//NUMBER OBJECT can convert number strings to numbers!  This is useful if a form has generated strings where it should have numbers instead:
// for example, cost or written times can be converted to numbers, for mathematical purposes.

Number("123") // converts to the value 123.

//this conversion (theoretically) is useful for converting other types of "value", such as binary, hexadecimal, etc
//finally,
Number('') // converts to false, which is extremely useful for authentication purposes - an empty string value can
// flag an alert, etc. for developer's notice


// the Math Object is NOT a constructor.  All properties and methods of Math are static.

const p = Math.PI // provides a javascript equivalent for geometry equations.  Math Object also gives formula results for algebra standards (sin, cos, tan, etc.)
//Math.random and .round operations, square roots. NOTE: javascript is notorious for rounding errors in math, and care must be taken to preserve specificity when needed!

