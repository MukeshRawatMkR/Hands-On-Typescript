//types for objects
//two ways -> classes, interface.


//interface: contract, we don't do implementation of member functions in interface, as we do in classes.
interface Person {
    name: string;
    age: number;
    isMarried: boolean;
    behaviour(): void;
}

let p1: Person = {
    age: 25,
    name: "Mukesh",
    isMarried: false,
    behaviour: () => {
        console.log("Display!");
    }
}
console.log(p1);
p1.behaviour();
console.log(p1.name);



