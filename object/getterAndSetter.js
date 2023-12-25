//getter and setter concept

let calc = {
    a : 10,

    get b(){
        return this.a  + 5
    },

    set c(x){
        return this.a = x/2
    }
}

console.log(calc.a) // output - 10

console.log(calc.b) // output - 15

//we are setting value with the c property ... 
calc.c = 50
console.log(calc.a)