const myStack = []

myStack.push('a')
myStack.push('b')
myStack.push('c')
myStack.push('d')

console.log(myStack)
// myStack.pop()
// myStack.pop()
// console.log(myStack)

Array.prototype.peek = function(){
    if(this.length == 0){
        return 'Stack value is empty '
    }
}

myStack.peek()
console.log(myStack)
