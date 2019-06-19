const array = ['3', '5', '1', '8', '2'];
function numbersArray(numbers) {
    return numbers.map(function(element) {
        return parseInt(element);
    }).sort();
} 

console.log(numbersArray(array));

const numberOne = '42';
const numberTwo = '18';

function numbersSum(numberOne, numberTwo) {
    return parseInt(numberOne) + parseInt(numberTwo);
}

console.log(numbersSum(numberOne, numberTwo));