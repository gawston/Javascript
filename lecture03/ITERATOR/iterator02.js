let str = "Hello";

//does the sam as
//for (let char of str) console.log(char);

let iterator = str[Symbol.iterator]();

while (true){
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);//output charactr one by one
}