function findWords(words, chars) {
    let foundword = [];
    let chartostring = chars.toString().replaceAll(",", "");
    for(let i = 0; i < words.length; i++) {
        let foundchar = '';
        let cutword = words[i].split('');
        for(let j = 0; j < cutword.length; j++) {
            if(chartostring.includes(cutword[j])) {
                foundchar += cutword[j];
            }
        }
        if(foundchar.length === cutword.length) {
            foundword.push(foundchar);
        }
    }
    let wordobj = foundword.map(e => {
        let sum = 0;
        for(let i = 0; i < e.length; i++) {
            sum += e.charCodeAt(0);
        }
        return {index:e, ascii:sum}
    });
    let sortascii = wordobj.sort((a, b) => b.ascii - a.ascii);
    let sortword = sortascii.map(e => e.index);

    return sortword;
}

const words = ["cherry", "date",  "honeydew",   "orange", "papaya"];
const characters = ['o', 'r', 'a', 'n', 'g', 'e', 'h', 'y', 'd', 'w', 't'];

const result = findWords(words, characters);
console.log(result);

const words2 = ["date","fig","mango"];
const characters2 = ['a', 't', 'e', 'm', 'n', 'g', 'o', 'f', 'i'];

const result2 = findWords(words2, characters2);
console.log(result2);


const words3 = ["apple", "banana", "orange","kiwi"];
const characters3 = ['a', 'p', 'l', 'e', 'o', 'r', 'n', 'g'];

const result3 = findWords(words3, characters3);
console.log(result3);

// Output :
// [ 'honeydew', 'orange', 'date' ]
// [ 'mango', 'fig' ]
// [ 'orange', 'apple' ]