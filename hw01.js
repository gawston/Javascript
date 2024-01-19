const numStr1 = "123456789";
const numStr2 = "53657687691428890";
const numStr3 = "1981023568910";

function missingDigits(numStr) {
    let digit = "1234567890".split('');
    let missing = [];
    for(let i = 0; i < digit.length; i++) {
        if(!numStr.includes(digit[i])) {
            missing.push(digit[i]);
        }
    }
    if(missing.length > 0) {
        return `${numStr} Missing Digit = ${missing.join(', ')}`;
    }
    else {
        return `${numStr} has no missing digits`;
    }
}

console.log(missingDigits(numStr1));    // 123456789 Missing Digit = 0
console.log(missingDigits(numStr2));    // 53657687691428890 has no missing digits
console.log(missingDigits(numStr3));    // 1981023568910 Missing Digit = 4, 7