function totalVolume(...arr) {
    let sumArray = arr.map( array => array.reduce((total, value) => total * value)); // คูณทุกตัวใน array
    let sum = sumArray.reduce((total, value) => total + value); // เอาแต่ละ array มาบวกกัน
    return sum;
}

// Plug version
function totalVolume(...arr) {
    let arrResult = 0;
    let inArrResult = 1;
    for (let i = 0 ; i < arr.length ; i++) {
        inArrResult = 1;
        for (let j = 0 ; j < arr[i].length ; j++) {
            inArrResult *= arr[i][j];
        }
        arrResult += inArrResult;
    }
    return(arrResult);
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));   // 63
console.log(totalVolume([2, 2, 2], [2, 1, 1])); // 10
console.log(totalVolume([1, 1, 1]));    // 1