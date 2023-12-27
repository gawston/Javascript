let myPromise = new Promise(function(myResolve, myReject) {

    myResolve(); // when successful
    myReject(); // when error
});

myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
);

// promise มี 3 state
// ช่วงกำลังทำงานเรียก Pending state
// หลังทำเสร็จมี 2 state successfull และ error