const registionDate = new Date('2025-12-01T10:00:00');
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Bangkok'
};
const formattedDate = registionDate.toLocaleDateString('th-TH', options);
console.log(`Member Register Date: ${formattedDate}`)
/*OUTPUT : 
Member Register Date: 1 ธันวาคม 2568
*/