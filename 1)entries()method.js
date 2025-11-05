// objects method

// 1. entries method

/**
 

object.entries() in js is a built in method that returns an array
of key-value pairs from an object





 */
let person ={
    dname: "suhail",
    age:20,
    isAlive: true,
}

let output = Object.entries(person)
console.log(output);

let person1 =[
    ["dname", "suhail"],//0
  //  00         01
    ["age",20],
    //10   11
    ["isAlive", true],
    //20          21
]

console.log(person1[2][0]);
console.log(person1.at(1));