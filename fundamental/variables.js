/**
 * Variables (LET, VAR, and CONST)
 *
 * Roadsidecoder
 * https://youtu.be/oUWRxJ19gfE
 */

/// RE-Declaration
var a = 1;
var a = 2; // this won't invoke an error

let b = 1;
let b = 2; // this will invoke an error

const c = 1;
const c = 1; // this will invoke an error

/// RE-Assignment
var p = 1;
p = 2; // this won't invoke an error

let q = 1;
q = 2; // this won't invoke an error

const r = 1;
r = 2; // this will invoke an error

/// Declare without initialization
var m; // Okay
let n; // Okay
const o; // this will invoke an error