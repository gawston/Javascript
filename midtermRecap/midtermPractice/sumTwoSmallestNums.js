function sumTwoSmallestNums(num) {
    let sum = num.sort((a, b) => a - b);
    for(let i = 0; i < sum.length; i++) {
        if(sum[i] > 0) {
            return sum[i] + sum[i + 1];
        }
    }
}

console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]));    //7
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]));   // 3453455
console.log(sumTwoSmallestNums([2, 9, 6, -1]));     // 8
console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]));     // 563
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]));     // 4519