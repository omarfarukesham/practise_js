/**
 * Object Basics:
    Create an object representing a car with properties like
    make, model, and year. Print these properties.
 */

    // let car = {
    //     make: 'BMW',
    //     model: 'x-Trill',
    //     year: 1919
    // }

    // for(let key in car){
    //     console.log(key)
    // }

 /**
  * 
  * Object Methods:
        Create an object representing a person with properties name 
        and age.Add a method that introduces the person.
  * 
  */

        // let person ={
        //     name: 'Isham',
        //     age: 7,
        //     study: 'SCC'
        // }
        // console.log(person.age)

 /**
  * 
  * Object Constructor:
        Create a constructor function for a Book object
        with properties like title, author, and pages.
  */

    // function Book(title, author, pages){
    //     this.title = title,
    //     this.author = author,
    //     this.pages = pages
    // }

//  let newBook = new Book('Programming Boss','Isham Abdullah', 230)
//  let newBook2 = new Book('Programming Master','Ilham ', 400)
//  console.log(newBook2.pages)


 /**
  * Prototypes and Inheritance:
        Create a prototype for the Book object to add a method 
        that displays information about the book.
  * 
  */
        function Book(title, author, pages){
            this.title = title,
            this.author = author,
            this.pages = pages
        }

// let authorBio = {
//     bio: function(){
//         console.log(`Hello i am ${this.author} and my book name is ${this.title}`)
//     },
//     __proto__: Book,
// }


Book.prototype.displayBio = function(){
    console.log(`Hello i am ${this.author} and my book name is ${this.title}`)
}
let newBook2 = new Book('Programming Master','Ilham ', 400)

// console.log(newBook2.displayBio())



 /**
  * Iterating Through Objects:
        Create an object with various properties. 
        Use a loop to print each property and its value.
  * 
  */
 let user = {
    name: 'Luna',
    age: 37,
    profession: 'House wife',
    hobbies: 'Learning Islam'
 }

//  for(let key in user){
//     console.log(key, ' -> ', user[key])
//  }




 /**
  * 
  * JSON and Objects:
        Convert a JavaScript object to a JSON string and then parse 
        it back to an object.
  */

        // let user1 = JSON.stringify(user)
        // let parseUser1 =  JSON.parse(user1)

        // console.log(user1)
        // console.log(parseUser1)

 /**
  *  Combining Objects:
   
 Create two objects representing different 
 aspects of a product (e.g., details and price). Combine them into a single object.
  * 
  */
let product1 = {
    name: 'iPhone pro max 13',
    brand: 'Apple',
}
let product2 = {
    price: '$600'
}

let newProductObj =  {...product1, ...product2}

console.log(newProductObj)

 /**
  * Object Best Practices:
    Create an object with intentionally inconsistent property naming.
    Refactor it to follow best naming practices.
  * 
  */