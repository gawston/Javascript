function isValidIP(str) {
    let newstr = str.split('.');
    let isIP = 0;
    if(newstr.length == 4) {
        for(let i = 0; i < newstr.length; i++) {
            if(newstr[i].length < 4 && parseInt(newstr[i]) <= 255) {
                isIP++;
            }
        }
    }
    if(isIP == 4) {
        return true;
    } else {
        return false;
    }
}

console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));