//array in TS

let naames :  string[] = ["Mukesh", "Rawat", "Murat", "MKR", "MSR"];//homogeneous arrray.

let hetro :  any[] = ["Mukesh", "Rawat", "Murat", "MKR", "MSR",25];//hetrogeneous array using 'any' keyword.


//'any' can be used while creating variable as well:
let firstName : any = "Mukesh";
firstName = 25;
console.log(firstName);// 25



//union of types in array:
let arr : (string | number | boolean)[] = ["Mukesh", 25, true];
let arr2  = ["Mukesh", 25, true]; //or we can do this as well.
console.log(arr, arr2);


//arrays in form of typed tuple
let data1 : [number, string, boolean] = [25, "Mukesh", true];//orders do matter otherwise error.