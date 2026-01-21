const names = ['Tayler','Donald','Natasha'];

const announcement = names.map(member => {
    return member + ' joind the contest.';
});
console.log(announcement);
/* OUTPUT : 
[
  'Tayler joind the contest.',
  'Donald joind the contest.',
  'Natasha joind the contest.'
]
*/