function simplePair(arr, sum) {
    let pair = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[0] * arr[i] == sum) {
            pair.push([arr[0], arr[i]]);
        } else if(arr[i] * arr[i + 1] == sum) {
            pair.push([arr[i], arr[i + 1]]);
        }
    }
    if(pair.length > 0) {
        return pair;
    } else {
        return null;
    }
}

console.log(simplePair([1, 2, 3, 6], 3));
console.log(simplePair([1, 2, 3, 6], 6));
console.log(simplePair([1, 2, 3], 9));
