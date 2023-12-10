function equation(str) {
    let arr = str.split("");
    let result = Number(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === "+") {
            result += Number(arr[i + 1]);
        } else if (arr[i] === "-") {
            result -= Number(arr[i + 1]);
        } else if (arr[i] === "*") {
            result *= Number(arr[i + 1]);
        } else if (arr[i] === "/") {
            result /= Number(arr[i + 1]);
        }
    }
    return result;
}

console.log(equation("1+1"));
console.log(equation("7*4-2"));
console.log(equation("1+1+1+1+1"));
console.log(equation("9/3+2-4"));
