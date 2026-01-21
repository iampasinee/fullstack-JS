function countString(input, type) {
    if (typeof input !== 'string') {
        throw new Error("Invalid parameter");
    }
    if(input.trim() === ""){
        return 0;
    }
    const word = input.trim().split(" ");

    if(type.toLowerCase() == 'w'){
            return word.length;

    }else if(type.toLowerCase() == 'c'){
        let sum_txt = 0
        word.forEach(txt => {
            sum_txt += txt.length
        })
        return sum_txt;
        
    }else if(type.toLowerCase() == 'v'){
        let vol_sum = 0;
        const txt_vowel = ['a', 'e', 'i', 'o','u'];
        word.forEach(meassge =>{
            for(let letter of meassge.toLowerCase()){
                if(txt_vowel.includes(letter) === true){
                    vol_sum += 1;
                }
            }
        })
        return vol_sum;
    }else{
        throw new Error("Invalid parameter");
    }
}

// Example usage
console.log("Word count:", countString("Hello world, how are you?", "w")); // Output: 5
console.log("Character count:", countString("Hello world, how are you?", "c")); // Output: 21
console.log("Vowel count:", countString("Hello world, how are you?", "v")); // Output: 8

