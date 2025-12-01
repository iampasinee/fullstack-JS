/*
Math.random()
.toString(36) แปลงสตริงฐาน 36 0-9, a-z
.substring(2, 8) ตัด 0. ข้างหน้าออก และเอามา 6 ตัวอักษร
*/

function generateTempID() {
  const randomPart = Math.random().toString(36).substring(2, 8);
  return randomPart.toUpperCase();
}

const orderID = generateTempID();
console.log(`ID : ${orderID}`);
