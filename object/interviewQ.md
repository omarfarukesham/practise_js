What is an object in JavaScript?
# Object in JS is a simple data structure system that can keep primitives data like key value paired.

How can you create an empty object in JavaScript?
# let user = {}

What is the difference between dot notation and bracket notation when accessing object properties?
# dot notation - easy, reliable, faster 
# array notation - dynamically access, debugging
 

Explain the concept of properties and methods in JavaScript objects.
# properties actually the key of object, like name: 'omar', this is name property.
# methods simple a anonymous function when we define it inside the object that call as a method.


What is a constructor function, and how is it used to create objects?
# constructor function is an blue print to create or initialized the objects, if want to create constructor function, we a create a lot of instance to as required.

How do you add a new property to an existing object in JavaScript?
# let user = {}
# user.name = 'Isham'

Explain the purpose of the this keyword in the context of a constructor function.
# this actually work it inside the constructor function to create the reference of this particular function. 

What is prototypal inheritance in JavaScript? How does it work with objects?
# Prototypal inheritance is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects. 

How can you check if an object has a specific property?
# let checkProperty =  Object.hasOwnProperty('name')

What is the purpose of the Object.keys() method?
# we can find the all property name easily by using the Object.keys()

What is the hasOwnProperty method, and why is it important when iterating over object properties?
# to know the any special property is exsiting or not on that particular object. 

How do you iterate over the properties of an object?
# we use for ... of loop or Object.keys() method to iterate the property from an object.

What is the purpose of the Object.create() method?
# to create a new object from one object this method is worked

Explain the difference between object literals and constructor functions when creating objects.
# let userInfo = {} , this is call object literals
# let userInfo2 = new Object() // constructor syntax

How can you clone an object in JavaScript?
# inherit the object from another object like, first object is  animal, if we want to inherit into the cat object, that all property and method will be clone the cat object
<!-- let animal = {
    live: 'forest',
    sleep: true
}

let cat = {
    eat: 'Fish'
    __proto__: animal
}

console.log(cat.live) -->

What is object destructuring, and how is it used?
# we can clone one object to another object by using destructuring
<!-- 
let obj1 =  {name: 'omar', id: 12, age: 38, city: 'Dhaka'}

{name, age, city} = obj1

console.log(age) -->

What are getter and setter methods in JavaScript objects?
# getter and setter both are the property of object that can manipulate the objects data. Getter method can not be modified from the outside of object, when it need to access it dose not need to call like method, setter value can be change from the outer

lets have an example
    let cale = {
        a : 10,
        get b(){
            return this.a + 5
        }

        set c(x){
            return this.a = x/2
        }
    }

console.log(cale.a)
console.log(cale.b)
cale.c = 20;
console.log(cale.c)


How can you prevent modification of object properties in JavaScript?
# we can freeze the object like Object.freeze() by using, if we do it that can not modifies from out side, althought it is a shallow prevent of modification if the object is nested that can be modifiable,
# if we writeable only define property can prevent the modification.
# Object.seal() can help us to prevent modification of object property like new property add or delete existing property as well.
# getters without setters, property also can prevent to modify the object property.

Explain the concept of JSON and its relationship with JavaScript objects.
# JSON means Javascript object notion which is a special formatting data that can interchange the data server to web application which is very ease to human read. More importantly this is object literal syntax is very common for javascript object. 
# Javascript object is easily transfer JSON object simple we can use a method like JSON.stringify(), and we can parse json to object like JSON.parse(). 

What is the purpose of the Object.freeze() method, and how does it work?
# shallowly we can prevent the object data access. 