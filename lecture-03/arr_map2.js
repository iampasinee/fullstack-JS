const kvArr = [
    {key: 1, value:10},
    {key: 2, value:20},
];

const reformatted = kvArr.map(
    ({key, value}) => ({[key]: value})
);
console.log(reformatted);
// OUTPUT : [ { '1': 10 }, { '2': 20 } ]