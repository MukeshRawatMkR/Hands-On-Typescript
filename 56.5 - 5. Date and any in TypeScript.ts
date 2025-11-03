//date object in TS
const dob = new Date(2000, 9, 4);
console.log(dob);
console.log(dob.getDate());
// console.log(dob.getDay());
// console.log(dob.getFullYear());
// console.log(dob.getMonth());
// console.log(dob.getHours());
// console.log(dob.getMinutes());
// console.log(dob.getSeconds());
// console.log(dob.getMilliseconds());
// console.log(dob.getTime());
// console.log(dob.toString());
// console.log(dob.toDateString());
// console.log(dob.toTimeString());

/*
'any' type -> to get reid of TS type checking.
if we wanna define a variable with type 'any', then either mention ':any' while declaring the variable or don't assign a value while declaring a variable.
for ex:
*/

let x;//this var x is of type any.
x='10';
x=10;
console.log(x);


