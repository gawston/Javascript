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

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));
