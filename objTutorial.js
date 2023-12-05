//definition of object in Javascript
/**
 Javascript object is a fundamental data structure where primitives data store as a key values 
 paired. 
 */


//how to declared Object
// let user =  new Object() //object constructor syntax 

let user1 = {
    name: 'Isham',
    age: 7,
    myHome: 'I live in a apartment',
    bio: function(){
      return  `I am ${this.age} years old and ${user1.myHome}`
    }
    
}

// user1.age = 10
// delete user1.myHome
// console.log(user1)

//key values 

//access to object
// dot notation.. 
// console.log(user1.name) 
//bracket notation..
// console.log(user1['age'])


// console.log(typeof(newUser))

//create new object

//delete operation

//for .. in loops

// for(let key in user1){
//     console.log(key)
//     console.log(user1[key])
// }

//object.keys()

//method of object


//prototype, inherited 
let animal = {
    eats: 'Trees and Fruits'
}

let rabbits = {
    lives: 'tree hole',
    __proto__: animal
}

let forest ={
    trees: 'A lot of diverse trees',
    __proto__: rabbits
}

console.log(forest.eats)