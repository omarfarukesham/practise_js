class Animal {
    constructor(name){
        this.name = name
    }


    makeSound(){
        console.log('Mewo Mewo ....')
    }
}


class Dog extends Animal{
    makeSound(){
        console.log('Woof, woof ...')
    }
}

let myDog =  new Dog('Cat')
console.log(myDog.name)
console.log(myDog.makeSound())

const arrFunctionContext = ()=>{
    console.log('hi', this)
}

console.log(arrFunctionContext)