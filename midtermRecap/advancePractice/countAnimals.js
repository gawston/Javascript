function count_animals(txt) {
    let count = 0;
    let check = 0;
    let newtxt = txt.split('');
    let animals = ["dog", "cat", "bat", "cock", "cow", "pig",
    "fox", "ant", "bird", "lion", "wolf", "deer", "bear",
    "frog", "hen", "mole", "duck", "goat"];

    for(let i = 0; i < newtxt.length; i++) {
        for(let j = 0; j < animals.length; j++) {
            for(let k = 0; k < animals[j].length; k++) {
                if(newtxt[i] == animals[j].charAt(k)) {
                    check++;
                }
            }
            if(check == 3) {
                count++;
                check = 0;
            }
        }
    }

    return count;
}

console.log(count_animals("goatcode"));