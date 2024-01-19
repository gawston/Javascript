function removeDups(arr) {
    let removedups = [];
    removedups.push(arr[0]);
    for(let i = 0; i < arr.length; i++) {
        if(!removedups.includes(arr[i])) {
            removedups.push(arr[i]);
        }
    }
    return removedups;
}

console.log(removeDups([1, 0, 1, 0]));          // [ 1, 0 ]
console.log(removeDups(["The", "big", "cat"]));     // [ 'The', 'big', 'cat' ]
console.log(removeDups(["John", "Taylor", "John"]));    // [ 'John', 'Taylor' ]
