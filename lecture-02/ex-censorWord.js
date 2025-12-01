// censor string

function censorWord(sentence, word){
    const regex = new RegExp(word, 'gi');
    const censorText = sentence.replace(regex, '****');
    return censorText;
}

const original = "JavaScript is fun, but sometimes javascript can be tricky."

const cleanPost = censorWord(original, "javascript");

console.log(cleanPost)