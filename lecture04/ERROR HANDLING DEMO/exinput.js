// Program to calculat BMI
// BMI = weight (kg) / (height (m) * height (m))

const { copyFileSync } = require('fs');

const rl = require('readline').creatInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt user for name, weight, and height
rl.question('Enter your name: ', (name) => {
    rl.question('Enter your weight (in kg): ', (weight) => {
        rl.question('Enter your height (in m): ', (height) => {

            // Calculate BMI
            let bmi =weight / (height * height);

            // display the result in 2 decimal places
            console.log(`${name}, your BMI is ${bmi.toFixed(2)}`);

            rl.close();
        })
    })
})