//variable
//good camel case for variable and function
let userName = 'Omar'

// constructor function name =  Pascal case

function Person(name, age){
    this.Name =  name;
    this.Age =  age
}

//class - pascal case

class SoftwareDeveloper{
    constructor(firstName, lastName){
        this.firstName =  firstName;
        this.lastName =  lastName;
    }
}

let me =  new SoftwareDeveloper('Omar', 'faruk')
console.log(me.firstName)