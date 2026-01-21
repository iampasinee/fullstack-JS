function processAndCombineStrings(strings, lengthThreshold) {
  // 1. แปลงเป็นตัวพิมพ์ใหญ่ และ กรองความยาว
  let result = strings
    .map(item => item.toUpperCase())
    .filter(item => item.length >= lengthThreshold);

  // 2. จัดเรียงข้อมูล (Sort)
  result.sort((a, b) => {
    // ฟังก์ชันช่วยนับสระ
    const countV = (s) => (s.match(/[AEIOU]/g) || []).length;
    const vA = countV(a); // จำนวนสระของคำแรก
    const vB = countV(b); // จำนวนสระของคำที่สอง
    if (vA !== vB) {
      return vB - vA; // ถ้าสระไม่เท่ากัน เอาตัวที่สระเยอะกว่าขึ้นก่อน
    }
    return a.localeCompare(b); // ถ้าสระเท่ากัน เรียงตามตัวอักษร A-Z
  });
  // 3. รวมร่างเป็น String เดียวกัน
  return result.join(" ");
}

// --- ทดสอบตามตัวอย่างในโจทย์ ---
const strings = ["apple", "banana", "cherry", "date", "fig", "grape"];

console.log(processAndCombineStrings(strings, 5)); 
// ผลลัพธ์: "BANANA APPLE GRAPE CHERRY"

console.log(processAndCombineStrings(strings, 6)); 
// ผลลัพธ์: "BANANA CHERRY"

console.log(processAndCombineStrings(["hi", "hello", "world"], 2)); 
// ผลลัพธ์: "HELLO WORLD HI"