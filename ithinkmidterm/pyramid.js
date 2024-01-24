function pyramid(num) {
    let result = '';
    let space = ' ';
    let star = '*';
    let spaceCount = num - 1; //reversed spaceCount = 0;
    let starCount = 1;      //reversed starCount = num * 2 - 1; 
    
    for (var i = 0; i < num; i++) {
        for (var j = 0; j < spaceCount; j++) {
            result += space;
        }
        for (var k = 0; k < starCount; k++) {
            result += star;
        }
        for (var l = 0; l < spaceCount; l++) {
            result += space;
        }
        result += '\n'; 
        spaceCount--; //reversed spaceCount++;
        starCount += 2; //reversed starCount -= 2;
    }
    return result;
}

console.log(pyramid(5));
console.log(pyramid(3));