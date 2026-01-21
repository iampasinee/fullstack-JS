function updateInventory(currentInventory, newInventory) {
  // 1. นำข้อมูลเก่ามาใส่ใน Map เพื่อให้ค้นหาและอัปเดตได้ง่าย
  const inventoryMap = new Map();
  currentInventory.forEach(item => {
    inventoryMap.set(item.name, item.quantity); // ใส่ของเก่าลงไปก่อน
  });
  // 2. วนลูปของใหม่เพื่ออัปเดตหรือเพิ่ม
  newInventory.forEach(newItem => {
    if (inventoryMap.has(newItem.name)) {
      // ถ้ามีชื่อนี้อยู่แล้ว ให้บวกจำนวนเพิ่มเข้าไป
      const currentQty = inventoryMap.get(newItem.name);
      inventoryMap.set(newItem.name, currentQty + newItem.quantity);
    } else {
      // ถ้ายังไม่มี ให้เพิ่มเข้าไปใหม่
      inventoryMap.set(newItem.name, newItem.quantity);
    }
  });
  // 3. แปลง Map กลับเป็น Array of Objects และเรียงตามชื่อ (A-Z)
  const result = [];
  inventoryMap.forEach((quantity, name) => {
    result.push({ name: name, quantity: quantity });
  });
  return result.sort((a, b) => a.name.localeCompare(b.name));
}

const currentInv = [
  { name: 'item1', quantity: 10 },
  { name: 'item2', quantity: 5 },
  { name: 'item3', quantity: 8 }
];
const newInv = [
  { name: 'item1', quantity: 5 },
  { name: 'item4', quantity: 7 },
  { name: 'item2', quantity: 10 }
];
console.log(updateInventory(currentInv, newInv));
/** OUTPUT : [
  { name: 'item1', quantity: 15 },
  { name: 'item2', quantity: 15 },
  { name: 'item3', quantity: 8 },
  { name: 'item4', quantity: 7 }
]*/