const pairsCharacters = (characters) => {
    pairsString = '';
    pairsArray = [];
        
        for (let index = 0; index < characters.length; index += 2) {
            const element = characters[index];
            pairsString += element + characters[index + 1];
            if (pairsString.length === 2){
                pairsArray.push(pairsString);
                continue;
            } 
            pairsArray.push(element + (characters[index + 1] === undefined ? '_' : characters[index + 1]));
    }
    return pairsArray;
}

console.log(pairsCharacters('abcd'));

// const newArray = [];
    // let item = '';
    // for(letter of characters) {
    //     if (item.length < 2){
    //         item += letter;
    //     } else {
            
    //         newArray.push(item);
    //         item = letter;
            
    //     }
    // }
    // newArray.push(item);
    // console.log(newArray);