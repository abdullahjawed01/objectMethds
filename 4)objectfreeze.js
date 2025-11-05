// 4. Object.freeze()
/*
you cannot add, remove , or change properties
 
it makes the object  complete immutable

*/



let users = {
    fname: "suhail",
    age:20,
    city: "hyd"
}

Object.freeze(users)
console.log(users);

