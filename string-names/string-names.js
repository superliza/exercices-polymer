function list(names){
    //your code here
    let myString = ``;
    names.forEach((element) => {
       myString += `${element.name} `;
    })
    let arrayNames = myString.slice(0, -1).split(" ");
    //  console.log(arrayNames);

    let finalString = "";

    for(let i=0; i<arrayNames.length; i++) {
        // console.log(arrayNames.length-1);
        if ( i === arrayNames.length-1) { // i < 4-1 => i == 3? 
            finalString +=  "& " + arrayNames[i];
        } else if(i === arrayNames.length-2) {
            finalString += arrayNames[i] + " ";
        } else {
            finalString += arrayNames[i] + ", ";
        }
    }
    console.log(finalString);

    // arrayNames.forEach(name => {
    //     console.log(name + ", ");
    // })
  }

  list([ {name: 'Bart'}, {name: 'Lisa'} ]);