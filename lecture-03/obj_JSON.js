const bookObj = {
    title: "Becomimg",
    author: "Michelle Obama",
    isAvailable: false,
}

const bookJSON = JSON.stringify(bookObj);
console.log(bookJSON);
console.log(typeof bookJSON);

const receiveBookObj = JSON.parse(bookJSON);
console.log(receiveBookObj.author);
console.log(typeof receiveBookObj);
/* OUTPUT : 
{"title":"Becomimg","author":"Michelle Obama","isAvailable":false}
string
Michelle Obama
object
*/