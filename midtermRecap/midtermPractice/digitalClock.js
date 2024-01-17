function digitalClock(sec) {
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

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));