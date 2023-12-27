function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function longRunningOperation() {
    return 42;
}

async function run() {
    // logic
    console.log("Start!!");
    // try take of await and compare
    await promiseTimeout(2000);
    // ไม่ใส่ await จะส่ง promise 
    // const response = await longRunningOperation();
    const response = longRunningOperation();
    console.log(response);
    console.log("Stop!!");
}

console.log("Begin");
run();
console.log("End");