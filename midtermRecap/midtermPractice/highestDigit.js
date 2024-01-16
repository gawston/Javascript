function highestDigit(num) {
    let arrnum = num.toString().split('');
    let highest = 0;
    for(let i = 0; i < arrnum.length; i++) {
        if(arrnum[i] > highest) {
            highest = parseInt(arrnum[i]);
        }
    }
    console.log(highest);
}

highestDigit(379);
highestDigit(2);
highestDigit(377401);