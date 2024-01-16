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
    console.log(newstr);
}

capToFront("hApPy");
capToFront("moveMENT");
capToFront("shOrtCAKE");
