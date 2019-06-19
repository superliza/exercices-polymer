const multiSplit = (str, delimiter = []) => {
    let hashSet = new Set(delimiter);
    let lastIndex = 0;
    let result = [];
    for(let i = 0; i < str.length; i++){
        if (hashSet.has(str[i])){
            result.push(str.substring(lastIndex, i));
            lastIndex = i+1; 
            console.log(lastIndex);
            
        }
    }
    result.push(str.substring(lastIndex));
    const filterArray = result.filter(Boolean);
    return filterArray;
}

console.log(multiSplit('1+2-3',['+', '-']) + 'otra línea');


