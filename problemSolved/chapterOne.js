let story = 'One day we aree working.The forest! suddenly a tiger ? All the people was so.'

let countWords = 0;
let inWord = false;



// for(let i = 0; i <story.length; i++){
//     if(story[i] === ' ' || story[i] === '\t' || story[i] === '\n'){
//         inWord =  false;
//     }else{
//         if(!inWord){
//             countWords++;
//             inWord = true;
//         }
//     }
// }


// for(let i = 0; i < story.length; i++){
//     if(story[i] === '.' || story[i] === '?' || story[i] === '!'){
//         countWords++
//     }
// }


// function vowelCount(stn){
//     let lowerStn =  stn.toLowerCase()
//     let vowels = ['a','e','i','o','u']
//     let totalVowels = 0
//     for(let i = 0; i < lowerStn.length; i++){
//         let getResult =  vowels.includes(lowerStn[i])
//         if(getResult){
//                 totalVowels++
//         }

//     }

//     return totalVowels;

// }

// let getResult =  vowelCount(story)
// console.log(getResult)

// for(let i = 0; i < story.length; i++){
//     if(story[i] === 'e'){
//         countWords++
//     }
// }

// console.log(countWords);


function filterUniqueValues(names){
    let uniqueValue = []
    for(let i = 0; i < names.length; i++){
       if(names[i]%2 !== 0){
            if(uniqueValue.indexOf(names[i]) == -1){
                uniqueValue.push(names[i])
            }
       }
    }
    return uniqueValue;
}

  
  const numbers = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 9, 10, 1];
  const uniqueNumbers = filterUniqueValues(numbers);
  
  console.log(uniqueNumbers);
  