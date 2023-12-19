let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];

for(let i = 0 ; i < values1.length; i++) {
    for(let j = 0; j < values2.length; j++) {
        if(values1[i] === values2[j]) {
            console.log(`values1 and values2 have the same value is ${values1[i]}`);
            break;
        }
        else if(values1[i] === values3[j]) {
            console.log(`values1 and values3 have the same value is ${values1[i]}`);
            break;
        }
        else if(values2[j] === values3[j]) {
            console.log(`values2 and values3 have the same value is ${values2[j]}`);
            break;
        }
    }
}
