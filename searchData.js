

function removeDuplicate(names){
    let selected = []
    for(var i = 0; i < names.length; i++){
        var name = names[i]
        if(selected.indexOf(name) == -1){
            selected.push(name)
        }
    }
    
    return selected;
}
let numbers = [1,2,2,3,3,4,5,5,6]

console.log(numbers.indexOf(5))
// let fruitItems = ["apple", "banana", "orange", "apple", "grapefruit", "mango", "banana", "pineapple", "orange", "grapefruit"]
// console.log(removeDuplicate(fruitItems))
// console.log(removeDuplicate(numbers))