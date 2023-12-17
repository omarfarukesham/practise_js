//definition of object 
//  simple the set of primitives value that keep in a key values pair 


//object declare
// let user1 = new Object()

let student = {
    name: 'Abdullah bin Salam',
    age: 12,
    city: 'Dhaka',
    phone: 1234555,
    bio: function(){
        return `I live in ${this.city} at the age of  ${this.age}`
    }
}

// console.log(student['bio']())

// for(let key  in student){
//     console.log(key)
// }

//add value, remove, edit or modify 
/**
 * 1. Create an empty object user.
2. Add the property name with the value John.
3. Add the property surname with the value Smith.
4. Change the value of the name to Pete.
5. Remove the property name from the object.

 */

// solve: 1 

let fruits = {}

//solve: 2 
fruits.name =  'Banana'
fruits.test =  'Sweet' 

//solve: 3 
// fruits.name =  'Pets'
// console.log(fruits)

//remove the property 

// delete fruits.name


// console.log(typeof(Object.keys(fruits)))

// const myObj = {
//     name: "John",
//     age: 30,
//     cars: [
//       {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//       {name:"BMW", models:["320", "X3", "X5"]},
//       {name:"Fiat", models:["500", "Panda"]}
//     ]
//   }

// for(let car of myObj.cars){
//     for(let model of car.models){
//         console.log(model)
//     }
// }

const user = {
    name : 'Abdullah',
    role: 2 ,
    class: 3,
    home: 'Shantinogor', 
    city: 'Dhaka'
}

// let propertyName =  Object.keys(user)
// let propertyName =  Object.values(user)
// let result =  Object.entries(user)
// let result =  Object.assign({}, user, {b: 'newBook'})
// let result = Object.freeze(user)
// delete result.name

// let result = Object.seal(user)
//edit the object -> done
// result.name = 'Omar'

//remove the object value -> not possible
// delete result.city

//new property add -> not possible
// result.favoriteFood = 'Pasta'


let result = Object.getOwnPropertyNames(user)
console.log(result)

// let getResult = result.map(([key, value])=>{
//     return ` ${key}: ${value}`
// })

// console.log(getResult)





