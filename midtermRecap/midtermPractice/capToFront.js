function capToFront(str) {
    let newstr = "";
    for(let i = 0; i < str.length; i++) {
        if(str[i] == str[i].toUpperCase()) {
            newstr += str[i];
        }
    }
    for(let i = 0; i < str.length; i++) {
        if(str[i] == str[i].toLowerCase()) {
            newstr += str[i];
        }
    }
    return newstr;

    // return str.split('').sort().toString().replaceAll(',', '');
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));
