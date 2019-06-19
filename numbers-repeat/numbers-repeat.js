const repeatNumbers = (numbers) => {
    let repeatNumbers = '';
    let arr = [];
    const arrayNumbers = numbers.forEach(element => {
        repeatNumbers += element.toString().repeat(element) + ',';
    });
    arr.push(repeatNumbers);
    console.log(arr);
}

repeatNumbers([1, 2, 3]);