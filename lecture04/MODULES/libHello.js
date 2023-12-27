// libHello.js
const person = {
    name: 'Anirach',
    weight: 85
}

function sayHello() {
    console.log("Hello World!")
}

function cube(x) {
    return x*x*x;
}

function wh(w,h) {
    return w*h;
}

const add =(a,b,c,d) => a+b+c+d;

const status = true;

module.exports = {person, sayHello,cube,wh,add,status}