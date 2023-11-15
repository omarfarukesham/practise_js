const numbers = [1,2,3,4,8,5]

const sum = numbers.reduce((acc, preValue)=>{
    return acc + preValue
},0)


console.log(sum)


const maxNum = numbers.reduce((acc, currentValue)=>{
        return Math.max(acc, currentValue)
},-1)

console.log(maxNum)