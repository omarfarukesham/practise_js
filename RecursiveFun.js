function factorial(n){
    if(n == 0 || n == 1){
        return 1
    }else{
        return n*factorial(n-1)
    }
}

const result =  factorial(6)
console.log(result)

//Sum of Digits:
// Write a recursive function to find the sum of digits of a positive integer.

function sumDigits(n){
    if(n < 10){
        return n
    }else{
        return (n%10) + sumDigits(Math.floor(n/10))
    }
}

let sumResult = sumDigits(12345)
console.log(sumResult)