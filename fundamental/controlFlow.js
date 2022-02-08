/**
 * Control Flow
 *
 * MDN Web Docs
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
 */

/**
 * The control flow is the order in which the computer executes statements in a
 * script.
 *
 * A typical script in JavaScript includes many control structures, including
 * conditionals, loops and functions. Parts of a script may also be set to
 * execute when events occur.
 */
var field="";
// If Else statement
if(field=="empty") {
  // do something
} else {
  // do something else
}

// Switch Case statement
switch(field) {
  case "case 1":
    break;
  case "case 2":
    break;
  default: //default
}

// Exception handling statement
try {
  // try something that may cause an error
}
catch (e) {
  // handle that error
}
finally {
  //
}