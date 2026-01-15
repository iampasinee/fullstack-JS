function promiseTimeout(ms){
    return new Promise((resolve, reject) =>{
        setTimeout(resolve, ms);
    });
}

async function longRunningOperater(){
    return 42;
}

async function run(){
    //logic
    console.log("Start!!");

    // try take of await and compare
    await promiseTimeout(4000);
    const response = await longRunningOperater();
    console.log('Response: ',response);

    console.log("Stop!!");
    
}
console.log("Before run()");
run();
console.log("After run()");

