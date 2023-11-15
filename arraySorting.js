const numbers = [1,2,3,4,5,6,7]
const maxNum = numbers.filter((num)=>{
   if(num> 5){
    return num
   }
})

console.log(maxNum)

// Example: Complex Filtering of an Array of Objects
let people = [
    { name: 'Alice', age: 25, gender: 'female', city: 'New York' },
    { name: 'Bob', age: 30, gender: 'male', city: 'Los Angeles' },
    { name: 'Charlie', age: 26, gender: 'male', city: 'Chicago' },
    { name: 'Diana', age: 35, gender: 'female', city: 'New York' },
    { name: 'Eva', age: 28, gender: 'female', city: 'Los Angeles' },
  ];
  
  // Filter out males older than 25 from New York
  let filteredPeople = people.filter( (person) =>{
    return person.gender === 'male' && person.age > 25 ;
  });
  
  console.log(filteredPeople);
  // Output: [ { name: 'Bob', age: 30, gender: 'male', city: 'Los Angeles' } ]
  