let arr1 = ["A", true, 2];

//Push เพิ่ม and pop ลด ด้านหลัง
console.log("\n********Push and pop********\n");
console.log(arr1.push("new value")); // 4
console.log(arr1); // A, true, 2, new value
console.log(arr1.pop()); // new value 
console.log(arr1); // A, true, 2

//Shift ลบ and unshift เพิ่ม ด้านหน้า
console.log("\n********Shift and unshift********\n");
console.log(arr1.unshift("new value")); // 4
console.log(arr1); // new value, A, true, 2
console.log(arr1.shift()); // new value 
console.log(arr1); // A, true, 2

//Concat ต่อ Array
console.log("\n********Concat********\n");
let arr2 = ["B", false, 3];
let newArr = arr1.concat(arr2); // A, true, 2, B, false, 3
let newArr2 = arr2.concat([1,2,3]); // B, false, 3, 1, 2, 3
console.log(newArr);
console.log(newArr2);