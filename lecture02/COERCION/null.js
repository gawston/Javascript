function getVowels(str) {
    const m = str.match(/[aeiou]/gi);    // gi จะหาตัวพิมพ์ใหญ่ด้วย
    if (m === null) {
        return 0;
    }
    return m.length;
}

console.log(getVowels("seeing"));
