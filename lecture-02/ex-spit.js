const fullname = "  Phasinee  Kengklang  "

const cleaneName = fullname.trim();
console.log(`Cleane Name: '${cleaneName}'`);

const nameParts = cleaneName.split(" ");
console.log("Name Parts: ",nameParts);

const finalParts = nameParts.filter(Boolean);
console.log("Final Parts:",finalParts);

const firstname = finalParts[0];

console.log("Fisrt Name", firstname);