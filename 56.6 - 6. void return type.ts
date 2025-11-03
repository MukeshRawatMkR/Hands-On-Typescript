//if you wanna return nothing -> (returns undefined)
function fun(): void {

}
console.log(fun());


//for a function to return only particular values:
function fun1(): (number | string) {
    // return 10;
    return "10";
}

console.log(fun1());
