/*Write a program that takes two numbers as input,
 representing the width and height of a rectangle, 
 and use nested loops to print a rectangle made 
of asterisks (*). 
like:
****
****
****
*/

// solutions: 
// function makeTriangle(h, w){
//    for(let i = 0; i < h; i++){
//       row = ''
//       for(let j = 0; j < w; j++){
//          row += "*"
//       }
//       console.log(row)
//    }
// }
// makeTriangle(3, 4)


/*
Create a multiplication table using nested loops.
Ask the user for a number and print the multiplication table
for that number from 1 to 10.
like 
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
...
5 x 10 = 50
*/

// function printMultiply(n){
//    for(let i = 1; i < 11; i ++){
//       console.log(`${n} x ${i} = ${n * i}` )
//    }
// }

// printMultiply(6)

/*
Write a program to print the following pattern using nested loops:
1
22
333
4444
55555
*/

// function printPattern(x){

// for(let i = 1; i < x; i++){
//    if(i == 1){
//       console.log(`${i}`)
//    }
//    if(i == 2){
//       console.log(`${i}${i}`)
//    }
//    if(i == 3){
//       console.log(`${i}${i}${i}`)
//    }
//    if(i == 4){
//       console.log(`${i}${i}${i}${i}`)
//    }
//    if(i == 5){
//       console.log(`${i}${i}${i}${i}${i}`)
//    }
  
// }

// }

// printPattern(6)

// function printPattern(x) {
//    for (let i = 1; i <= x; i++) {
//      let row = '';
//      for (let j = 0; j < i; j++) {
//        row += i;
//      }
//      console.log(row);
//    }
//  }
 
//  printPattern(5);
 
//closer ........ 
// function createIncrement(){
//    let count = 0 // private variable

//    return function(){
//       return ++count;
//    }
// }
// const counter = createIncrement()

// console.log(counter()) 
// console.log(counter()) 
// console.log(counter()) 

// alert('Hi')

//callback 

function buttonClick(){
   alert('Thanks for Click me !')
}


const button = document.getElementById('myButton')
button.addEventListener('click', buttonClick)