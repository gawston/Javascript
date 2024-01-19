function totalVolume(...arr) {
    let sumArray = arr.map( array => array.reduce((total, value) => total * value)); // คูณทุกตัวใน array
    let sum = sumArray.reduce((total, value) => total + value); // เอาแต่ละ array มาบวกกัน
    return sum;
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));   // 63
console.log(totalVolume([2, 2, 2], [2, 1, 1])); // 10
console.log(totalVolume([1, 1, 1]));    // 1