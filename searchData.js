

// function removeDuplicate(names){
//     let selected = []
//     for(var i = 0; i < names.length; i++){
//         var name = names[i]
//         if(selected.indexOf(name) == -1){
//             selected.push(name)
//         } 
//     return selected;
// }
// let numbers = [1,2,2,3,3,4,5,5,6]


// console.log(numbers.indexOf(5))
// let fruitItems = ["apple", "banana", "orange", "apple", "grapefruit", "mango", "banana", "pineapple", "orange", "grapefruit"]
// console.log(removeDuplicate(fruitItems))
// console.log(removeDuplicate(numbers))

let products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 },
    { name: "Headphones", price: 100 }
];

// let affordableProducts = products.filter(product => product.price < 500);
let affordAble =  products.filter(p => p.price < 500)
console.log(affordAble)
