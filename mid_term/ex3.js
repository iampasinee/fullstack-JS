function findLongestRepeatedSubstring(inputStr) {
  let longest = "";
  const n = inputStr.length;

  // 1. วนลูปหาจุดเริ่มต้น (i) และความยาวของซับสตริง (len)
  for (let i = 0; i < n; i++) {
    for (let len = 1; i + len <= n; len++) {
      // ตัดข้อความย่อยออกมา
      let sub = inputStr.substring(i, i + len);
      
      // 2. เช็คว่าซับสตริงนี้ปรากฏที่ "ตำแหน่งอื่น" ในข้อความหรือไม่
      // โดยเริ่มหาหลังจากตำแหน่งปัจจุบัน (i + 1)
      if (inputStr.indexOf(sub, i + 1) !== -1) {
        
        // 3. ถ้าเจอซ้ำ และยาวกว่าตัวที่เคยเก็บไว้ ให้บันทึกเป็นตัวใหม่
        if (sub.length > longest.length) {
          longest = sub;
        }
      }
    }
  }
  return longest;
}

console.log(findLongestRepeatedSubstring("banana")); // "ana"
console.log(findLongestRepeatedSubstring("abcd"));   // ""
console.log(findLongestRepeatedSubstring("ababa"));  // "aba"