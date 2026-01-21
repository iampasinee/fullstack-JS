const names = ['Justin','Sarah','Christopher'];

for (let i = 0;i < names.length; i++){
    console.log(names[i]);
}
names.forEach(name => {
    console.log(name);
})
names.forEach(myfuction);

function myfuction(val){
    console.log(val);
}
for(let name of names){
    console.log(name);
}
/*OUTPUT : 
Justin
Sarah
Christopher
*/