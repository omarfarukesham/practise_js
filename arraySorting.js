const numbers = [1,2,3,4,5,6,7]
const maxNum = numbers.filter((num)=>{
   if(num> 5){
    return num
   }
})

console.log(maxNum)

// Example: Complex Filtering of an Array of Objects
let people = [
    { name: 'Alice', age: 25, gender: 'female', city: 'New York' },
    { name: 'Bob', age: 30, gender: 'male', city: 'Los Angeles' },
    { name: 'Charlie', age: 26, gender: 'male', city: 'Chicago' },
    { name: 'Diana', age: 35, gender: 'female', city: 'New York' },
    { name: 'Eva', age: 28, gender: 'female', city: 'Los Angeles' },
  ];
  
  // Filter out males older than 25 from New York
  let filteredPeople = people.filter( (person) =>{
    return person.gender === 'male' && person.age > 25 ;
  });
  
  console.log(filteredPeople);
  // Output: [ { name: 'Bob', age: 30, gender: 'male', city: 'Los Angeles' } ]
  

  //find the max and min value from the array

function maxMinValue(arr){
  if(arr.length === 0){
    return {max: undefined, min: undefined}
  }
   return arr.reduce((acc, current)=>{

      return {
        max: Math.max(acc.max, current),
        min: Math.min(acc.min, current)
      }
    
    },{ max: -Infinity, min: Infinity })
}

  let numbers1 = [3, 1, 4, 1, 5, 9, 2, 6, 5];

  const getResult3 =  maxMinValue(numbers1)
  console.log(getResult3)

  /*
  

Problem 1: Array Manipulation
Write a function that takes an array of numbers as input and returns
a new array where each element is multiplied by 2.
  */

function arrayManipulation(arr){
  let newArray= []
  arr.map(element => {
    newArray.push(element * 2 ) 
  })
  return newArray
}

const numbersArray = [12,13,14,15]
console.log(arrayManipulation(numbersArray))



/*
Problem 2: Object Manipulation
Create an object representing a shopping cart. It should have properties for items 
and their prices. Write a function 
that takes the cart object and calculates the total price of all items in the cart.
*/

// function calculateCartPrice(cartValue){
//  return cartValue.reduce((total, item) => total + item.qty*item.price, 0 )

// }


// let cartObject = [{
//   name: "Iphone Pro 15",
//   qty: 1,
//   price: 125000
// },
// {
//   name: "Apple Watch",
//   qty: 3, 
//   price: 50000
// } ]

// const getResult4 =  calculateCartPrice(cartObject)
// console.log(getResult4)

/**
 * Problem 3: Array Filtering
Given an array of numbers, 
write a function that filters out all the even numbers and returns a new array with only the odd numbers.
 * 
 * 
 */

function findOddNumbers(arr){
  let newArray = []
  arr.map(element => {
    if(element%2 !== 0){
      newArray.push(element)
    }
  })

  return newArray
}

let arrNumbers = [1,2,3,4,5,6,7,8,9,10]

let getArray = findOddNumbers(arrNumbers)
console.log(getArray)

/**
 * Problem 4: Object Iteration
Create an object representing a book with properties like title, author, and publication year. 
Write a function that takes the book object and prints out each property and its value.
 * 
 */

function printObjectProperty(book){
  Object.entries(book).forEach(([property, values])=>{
    console.log(`${property}:${values}`)
  })
}

let booksObject = {
  title: "Deep Work",
  author: "Karlket",
  publicationYear: 2016
}
printObjectProperty(booksObject)


/**
 * Write a function that takes an array of 
 * strings representing names and returns a new array with the names sorted alphabetically.
 */

function sortArray(arr){
  return arr.sort()
}

let nameArray = ['Omar', 'Isham', 'Apple','Boss']
console.log(sortArray(nameArray))