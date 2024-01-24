function reversePyramid(num) {
    let result = '';
    let space = ' ';
    let star = '*';
    let spaceCount = 0;
    let starCount = num * 2 - 1;
    
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
        spaceCount++;
        starCount -= 2;
    }
    return result;
}

console.log(reversePyramid(5));
console.log(reversePyramid(3));