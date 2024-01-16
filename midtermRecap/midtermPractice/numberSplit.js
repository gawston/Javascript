function numberSplit(num) {
    let rtnum = [];
    rtnum.push(parseInt(num / 2));
    rtnum.push(num - rtnum[0]);
    console.log(rtnum);
}

numberSplit(4);
numberSplit(10);
numberSplit(11);
numberSplit(-9);