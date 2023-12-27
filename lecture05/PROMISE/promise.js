function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}
// console.log("start");
promiseTimeout(2000)
    .then(() => {
        console.log("Done!!");
        return promiseTimeout(1000);
    })
    .then(() => {
        console.log("Also done!!");
        return Promise.resolve(42);
    })
    .then((resolve) => {
        console.log(resolve);
    })
    .catch(() => {
        console.log("error");
    });
    // console.log("stop");