function highestDigit(num) {
    let arrnum = num.toString().split('');
    let highest = 0;
    for(let i = 0; i < arrnum.length; i++) {
        if(arrnum[i] > highest) {
            highest = parseInt(arrnum[i]);
        }
    }
    return highest;
}

// Phuwadon city version
function highestDigit(num) {
    let splitnum = num.toString().split("");
    let newarr = splitnum.map(e => {
        return(parseInt(e));
    }).sort((a, b) => a - b);
    return(newarr[newarr.length-1]);
}

console.log(highestDigit(379)); // 9
console.log(highestDigit(2));   // 2
console.log(highestDigit(377401));  // 7
