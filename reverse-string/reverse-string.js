const initialString = `The greatest victory is that which requires no battle`;
const reverseWords = initialString => {
    let array = initialString.split(" ");
    let reverseString = array.reverse();
    let resultString = "";

    reverseString.forEach(element => {
        resultString += element + " ";
    });
    
    return resultString.slice(0, -1);
}

reverseWords(initialString);