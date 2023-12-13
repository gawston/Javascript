const names = ['Justin', 'Sarah', 'Christophere'];

//while loop
console.log('-- while --');
let index = 0;
while (index < names.length) {
    const name = names[index];
    console.log(name);
    index++;
}

//for loop
console.log('--for--');
for (let index = 0; index < names.length; index++){
    const name = names[index];
    console.log(name);
}

//for of
console.log('-- for of --');
for (let name of names){
    console.log(name);
}

//do while loop **sniplet
console.log('-- do while --');
index = 0; // reset index = 0 เพราะ loop ก่อนหน้าทำให้ index ไม่ใช่ 0
// let i = 0; // หรือสร้างตัวแปรใหม่ก็ได้
do {
    console.log(names[index]);
    index++;
} while (index < names.length);