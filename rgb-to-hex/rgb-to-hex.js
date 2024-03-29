const rgb = (...args) => {
    let hex = ``;
    args.forEach(element => {
        let hexadecimalValue = element.toString(16);
        hex += hexadecimalValue.length === 1 ? `0${hexadecimalValue}` : hexadecimalValue;
    });
    return `#${hex}`;
}

console.log(rgb(0, 3, 5));