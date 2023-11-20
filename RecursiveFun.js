/*Power Function:
Implement a recursive function to calculate the power of a number (x^n) */

function powerFun(x,n){
    if(n === 0){
        return 1
    }else{
        return x*powerFun(x, n-1)
    }
}

let getResult = powerFun(3,4)
// console.log(getResult)

//factorial of recursive function

function factorial(n){
    if(n == 0 || n == 1){
        return 1
    }else{
        return n * factorial(n-1)
    }
}

const getResult2 = factorial(5)
// console.log(getResult2)

//sum this nested array by using recursive


// Example of recursively traversing a nested array
function sumArray(arr) {
   let sum = 0;
   for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            sum += sumArray(arr[i])
        }else{
            sum += arr[i]
        }
   }
   return sum 
  }
  
  let numbers = [1, 2, [3, 4], [5, [6, 7]]];
  let result = sumArray(numbers);
  console.log(result); // Output: 28