const person =  {
  name : 'Omar',
  age : 38,
  address: {
    street: '144/ property estate',
    building: '5b',
    Floor: '3F'
  }
}

console.log(person.address['Floor'])

//in object we are getting key:value pair type data
//keyName = property, value
//primitive type data -> string, number, boolean, undefine, null, bigInt, symbol
let user = new Object(); // "object constructor" syntax
let user1 = {};  // "object literal" syntax

let obj =  new Object()
user.name = 'omar'
user.age = 38

delete user.age
user.name = ''

console.log(user)
const user3 =  new Object() // constructor syntax
let user4 = {}

console.log(typeof(user3))



