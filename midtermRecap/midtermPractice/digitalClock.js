function digitalClock(sec) {
    // ใช้ได้เหมือนกัน
    // let hour = Math.floor(num / 60 / 60 % 24);
    // let min = Math.floor((num / 60) % 60);
    // let sec = num % 60;

    let hours = Math.floor((sec / 3600) % 24).toString();
    let minutes = Math.floor((sec % 3600) / 60).toString();
    let seconds = Math.floor(sec % 60).toString();
    if(hours.length == 1) {
        hours = "0" + hours;
    }
    if(minutes.length == 1) {
        minutes = "0" + minutes;
    }
    if(seconds.length == 1) {
        seconds = "0" + seconds;
    }

    return `${hours}:${minutes}:${seconds}`;
}

console.log(digitalClock(5025));    // 01:23:45
console.log(digitalClock(61201));   // 17:00:01
console.log(digitalClock(87000));   // 00:10:00