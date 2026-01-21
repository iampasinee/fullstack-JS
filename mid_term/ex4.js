function wordFrequency(text) {
    let num_word = {};
    let new_txt = text.replace(/[!,.]/g, "").toLocaleLowerCase()
    new_txt = new_txt.split(" ")
    for (let x of new_txt) {
        if (num_word[x]) {
                num_word[x] = num_word[x] + 1;
            } else {
                num_word[x] = 1;
            }
    }
    return num_word;
}

console.log(wordFrequency("Hello world! Hello everyone.")); 
console.log(wordFrequency("This is a test. This test is easy."));
console.log(wordFrequency("Python is fun. Fun fun fun!"));
console.log(wordFrequency("One word, one word."));

/* OUTPUT
{ hello: 2, world: 1, everyone: 1 }
{ this: 2, is: 2, a: 1, test: 2, easy: 1 }
{ python: 1, is: 1, fun: 4 }
{ one: 2, word: 2 }
*/