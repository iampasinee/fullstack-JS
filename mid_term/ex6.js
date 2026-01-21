// การหาชุดอักขระย่อยที่ซ้ำกัน ความยาวตั้งแต่ 2 ตัวอักษรขึ้นไป 
function findRepeatedSubstrings(s) {
    let num_w = {};
    let result = [];
    for (let i = 0; i <= s.length; i++) {
        for (let j = i + 2; j <= s.length; j++) {
            let word = s.slice(i, j)

            if (num_w[word]) {
                num_w[word] += 1
            } else {
                num_w[word] = 1
            }
        }
    }
    for (let key in num_w) {
        if (num_w[key] >= 2) {
            result.push([key,num_w[key]]);
        }
    }
    return result;
}

console.log(findRepeatedSubstrings("banana"));  // ["an", "ana", "na"]
console.log(findRepeatedSubstrings("abcdefg")); // []
console.log(findRepeatedSubstrings("aaaa"));    // ["aa", "aaa"]
console.log(findRepeatedSubstrings("abcabcabc"));
//['ab', 'abc', 'abca', 'abcab', 'abcabc', 'bc', 'bca', 'bcab', 'bcabc', 'ca', 'cab', 'cabc']


