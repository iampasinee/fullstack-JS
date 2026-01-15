const promise = new Promise((resolve, reject) => {
    const res = false;

    if(res){
        resolve("Resolved!");
    }else{
        reject("Fatal Error");
    }
});

promise.then(
    (res) => console.log(res),
    (err) => console.log(err)
);

