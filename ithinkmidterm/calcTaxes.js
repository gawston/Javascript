function calcTaxes(salary, tax, expenses) {
    let salaryPerYear = salary * 12;
    let earn = salaryPerYear - tax - expenses;
    let message = `เงินเดือน: ${salary}\nค่าลดหย่อนภาษี/ปี: ${tax}\nค่าใช้จ่าย/ปี: ${expenses}\nเงินที่ได้สุทธิ: ${earn}\n`;
    if(earn <= 150000) {
        message += 'ภาษี: ได้รับการยกเว้น\n';
    } else if(earn > 150000 && earn <= 300000) {
        message += `ภาษี: ${earn * 5/100}\n`;
    } else if( earn > 300000 && earn <= 500000) {
        message += `ภาษี: ${earn * 10/100}\n`;
    } else if( earn > 500000 && earn <= 750000) {
        message += `ภาษี: ${earn * 15/100}\n`;
    } else if( earn > 750000 && earn <= 1000000) {
        message += `ภาษี: ${earn * 20/100}\n`;
    } else if( earn > 1000000 && earn <= 2000000) {
        message += `ภาษี: ${earn * 25/100}\n`;
    } else if( earn > 2000000 && earn <= 5000000) {
        message += `ภาษี: ${earn * 30/100}\n`;
    } else if( earn > 5000000) {
        message += `ภาษี: ${earn * 35/100}\n`;
    }
    return message;
}

// input เงินเดือน, ค่าลดหย่อนภาษี/ปี, ค่าใช้จ่าย/ปี
console.log(calcTaxes(12000, 10000, 10));
console.log(calcTaxes(9000, 5000, 20));
console.log(calcTaxes(50000, 4700, 20));
