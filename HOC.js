/** 
 * Create a HOC called operateOnArray that
 *  takes a binary operation function and returns a new function. 
 * This new function should take an array of numbers and apply the binary 
 * operation to each element of the array. For example,
 *  if the binary operation is addition, 
 * calling operateOnArray(add)([1, 2, 3]) should return [2, 4, 6]
 * 
 * 
 * 
 */

// function operateOnArray(x, operation){
//     return operation(x)
// }

// function add(x){
//    let result =  x.map(y=>y+y)
//     return result
// }

// console.log(operateOnArray([1,2,3], add))


// function operateOnArray(operation){
//     return function(array){
//         array.map(element => operation(element))
//     }

// }

// function add(x){
//     return x + x
// }

// const getResult = operateOnArray(add)
// console.log(getResult([1,2,3,4]))


// function operateOnArray(operation){
//     return function(array) {
//         return array.map(element => operation(element));
//     }
// }

// function add(x){
//     return x + x;
// }

// // Example usage:
// const addToArray = operateOnArray(add);
// console.log(addToArray([1, 2, 3])); // Output: [2, 4, 6]

//Filters of HOC

// function filterArray(arrayValue, operation){
//     const arrayFilters = []
//     arrayValue.forEach(element => {
//         if(operation(element)){
//             arrayFilters.push(element)
//         }
//     });
//     return arrayFilters;

// }


// function isEven(numbers){
//         return numbers%2 == 0
// }


// const numbersArray = [1,2,3,4,5,6,7,8,9,10]

// const getResult =  filterArray(numbersArray, isEven)
// console.log(getResult )



//HOC functional example .. 

function filterNumbers(numbers, operation){
            const newArray = []
            numbers.forEach(element => {
                if(operation(element)){
                    newArray.push(element)
                }
            });

            return newArray;
}


function isEven(x){
    return x%2 == 0
}

const numb = [1,2,3,4,5,6,7,8,9,10]
const getResult =  filterNumbers(numb, isEven)
console.log(getResult)