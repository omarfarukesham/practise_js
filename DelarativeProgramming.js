//declarative programming...
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

