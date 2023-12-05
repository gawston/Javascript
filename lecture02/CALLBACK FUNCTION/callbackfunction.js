function createQuote(Quote, callback) {
    let myQoute = "Like I always say, " + Quote;
    callback(myQoute); // 2
}

function logQuote(quote) {
    console.log(quote + ' Yes..');
}

createQuote(" you will getting better!", logQuote); // 1
