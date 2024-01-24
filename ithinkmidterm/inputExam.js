// ตัวอย่างการใช้งาน input ใน command line

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name: ', (name) => {  //output: What is your name: Peter
    console.log(`Hello ${name}`);   //output: Hello Peter
    rl.close();
});

console.log(
    '%c Demo status: %c Passed',
    `background: #222; color: #bada55`,
    `background: #bada55; color: #222`
);