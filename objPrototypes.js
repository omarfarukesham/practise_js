// let animal = {
//     eats: true
// }

// let rabbits = {
//     lives: 'Jungle',
// __proto__: animal
// } 

// for(let prop in rabbits){
//     if(rabbits.hasOwnProperty(prop)){
//         console.log(`Yes it's has own property of ${prop}`)
//     }else{
//         console.log(`inherited property of rabbits is ${prop}`)
//     }
// }

// console.log(Object.keys(rabbits))
// let head = {
//     glasses: 1
//   };
  
//   let table = {
//     pen: 3,
//     __proto__: head
//   };
  
//   let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__:table
    
//   };
  
//   let pockets = {
//     money: 2000,
//     __proto__: bed
//   };

//   console.log(pockets.glasses)

//   let animal = {
//      eat() {
//       this.full = true;
//     }
//   }
//   let rabbit = {
//     __proto__: animal
//   };
  
//  console.log( rabbit.eat())


const boss ={
    eat(food){
        this.stomach.push(food)
    }  
}

const speedy = {
    stomach : [],
    __proto__: boss,
}

const lazy = {
    stomach : [],
    __proto__: boss
}

lazy.eat('banana')
console.log(speedy.stomach)
console.log(lazy.stomach)