function getBudgets(obj) {
    let allbudget = 0;
    for(let i = 0; i < obj.length; i++) {
        allbudget += obj[i].budget;
    }
    return allbudget;
}

console.log(getBudgets([
    {name: "John", age: 21, budget: 23000},
    {name: "Steve", age: 32, budget: 40000},
    {name: "Martin", age: 16, budget: 2700}
]));    // 65700

console.log(getBudgets([
    {name: "John", age: 21, budget: 29000},
    {name: "Steve", age: 32, budget: 32000},
    {name: "Martin", age: 16, budget: 1600}
]));    // 62600
