//callback function ... 
// function buttonClick(){
//     alert('hi thank you for hitting .... ')
// }


// const button = document.getElementById('myBtn')
// button.addEventListener('click', buttonClick )


function delayExecution(callback){
    console.log('Hi i am faster Execution function ...')
    setTimeout(() => {
        console.log('I am executing after 2 seconds')
        callback()
    }, 2000)

}


function callBackFun(){
    console.log('Hello i  call back function')
}

delayExecution(callBackFun)