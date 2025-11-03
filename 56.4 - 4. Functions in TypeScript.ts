//Function with strict type of pararmeters and also return type is already defined. 
function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(25, 25));


//to make one of a parameter optional: we use -> ?
function sum2(a: number, b: number, c?: number): number {
    return a + (b || 0) + (c || 0);
}
console.log(sum2(25, 25));
console.log(sum2(25, 25, 25));

