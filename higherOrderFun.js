//higher order function example ... 



//higher order function example..
function higherOrderFun(x,y, operation){
    return operation(x,y)
}


//function as parameter to the main function

function add(x,y){
    return x + y
}

function multiply(x,y){
    return x*y
}


//executing the HOC function 


console.log(higherOrderFun(12,12, add))
console.log(higherOrderFun(12,12, multiply))



//higher order function example two 

function mainFun(numbers, filterFun){
    const newArray = []
   numbers.forEach(element => {
        if(filterFun(element)){
            newArray.push(element)
        }
   });
   return newArray;
}

function isEven(num){
        return num%2 == 0
}

const numbers = [1,2,3,4,5,6,7,8,9,10]

//executing the HOC function
console.log(mainFun(numbers, isEven))