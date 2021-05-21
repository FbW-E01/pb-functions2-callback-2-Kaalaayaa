// Number Sqaure
// Write a function which will return sqaure of given number
// Write a function which will return sqaure of every number in array
const array = [1, 2, 3, 4, 5, 6];
//     sqaure(array,squareNumber)  // return [1,4,9,16,25]

function squareNumber(num){
    return num*num;
}
console.log(squareNumber(2));

function square(array, func){
    return array.map(func);
}

console.log(square(array, squareNumber));