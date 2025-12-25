const message = "Hello World";
const txt = ['a','e','i','o','u'];

for(let name of message.toLowerCase()){
    if(name == 'a' || name == 'e' || name == 'i' || name == 'o' || name == 'u'){
        //console.log(name);
    }
    if(txt.includes(name) === true){
        console.log(name);
    }
}