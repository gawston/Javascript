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

console.log(capToFront("hApPy"));   // APhpy
console.log(capToFront("moveMENT"));    // MENTmove
console.log(capToFront("shOrtCAKE"));   // OCAKEshrt
