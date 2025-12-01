const startTime = Date.now();

function someHeavytask(){
    for (i = 0; i < 100; i++){
        console.log(i);
    }
}

const endTime = Date.now();

const duration = endTime - startTime;

console.log(`function timer: ${duration} milisecon.`)