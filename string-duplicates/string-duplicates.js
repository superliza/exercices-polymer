const countDuplicates = characters => {
    let counter = 0;
    let emptyString = ``;
    for (let index = 0; index <= characters.length; index++) {
        const element = characters[index];
        // console.log(element, characters[index + 1]);
        if (characters[index - 1] === element) {
            counter++;
            // console.log(counter);
        } else {
            
            if (counter > 1) {
                // console.log(characters[index - 1]);
                emptyString += `${counter}${characters[index - 1]}`;
                // console.log(emptyString);
            } else if(counter === 1) {
                emptyString += characters[index - 1];
                // console.log(emptyString);
            }
            counter = 1;
        }
    }
    console.log(emptyString);   
    return emptyString;                                                                                                                                                          
}

countDuplicates(`abcde`);