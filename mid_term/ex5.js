/**
 * 
 * @param {Array} numbers 
 */
function findSingleOccurrenceNumbers(numbers) {
    let num = {};
    let result = []
    for(let x of numbers){
        if(num[x]){
            num[x] += 1
        }else{
            num[x] = 1
        }
    }
    Object.keys(num).forEach(n =>{
        if(num[n] === 1){
            result.push(n)         
        }
    })
  return result;
  
}

console.log(findSingleOccurrenceNumbers([4, 5, 6, 4, 7, 5, 8]));
console.log(findSingleOccurrenceNumbers([1, 2, 2, 3, 3, 4, 4]));
console.log(findSingleOccurrenceNumbers([1, 1, 1, 1, 1]));
