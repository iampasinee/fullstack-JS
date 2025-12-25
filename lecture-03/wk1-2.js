let values1 = ['Apple', 1 ,false];
let values2 = ['Fries', 2, true, 'Apple'];
let values3 = ['Mars', 9, 'Apple'];

for (item of values1){
    for(item2 of values2){
        if(item === item2){
            for(item3 of values3){
                if(item === item3){
                    console.log(item)
                }
            }
        }
    }
}



console.log();


items = values1.filter(item =>values2.includes(item) && values3.includes(item));
console.log(items);

