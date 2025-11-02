/*
TS doenst support dynamic typing.
Primitives Types supported in TS:
string, number, boolean, undefined, null, bigint, symbol

Syntax: 
var<varible-name>:DT = <value>; //type annotation or type signature.
*/

let id : number = 25;
let firstNamee = "Mukesh";//still works, internally uses DT. but check out below line.
// firstName = 5;//type 'number' is not assignable to type 'string'., happens with 'var' as well.
console.log(id, firstNamee);



//union of types : to store any DTs value, either-or
let fullName : number | string = "Mukesh Rawat";//supports both value.
fullName = 25;
console.log(fullName);