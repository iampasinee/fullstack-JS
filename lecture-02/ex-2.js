// desition
const y_status = 200;

console.log("if else:");
if (y_status === 200){
    console.log("OK");
}else if (y_status === 400){
    console.log("ERROR!");
}else{
    console.log("Unknow");
}
console.log("");

console.log("switch case :");
switch (y_status){
    case 200:
        console.log("OK");
        break;
    case 400:
        console.log("ERROR!");
        break;
    default:
        console.log("Unknow");
}

console.log("");

console.log("Ternary operator :");
const message = (y_status === 200) ? "OK!" : "Error!";
console.log(message);