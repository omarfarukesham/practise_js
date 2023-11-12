//closer means close over

function createIncrement(n){
    let count = n; //private variable ... 
    return function(){
        return ++count
    }
}

const counter = createIncrement()

console.log(counter(2))