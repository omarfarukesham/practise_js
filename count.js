const getDOMvalue =  document.getElementById('count')

getDOMvalue.addEventListener('click', increaseCount)

function increaseCount(){
    alert('Count ++')
}