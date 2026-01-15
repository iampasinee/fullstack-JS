function yayOrNay(){
    return new Promise((resolve, reject) =>{
        const val = Math.round(Math.random() * 1);
        console.log('Genarated: ',val);
        
        val ? resolve("Lucky!!") : reject("Nope 😠");
    });
}

async function msg(){
    try{
        const msg = await yayOrNay();
        console.log(msg);
    }catch(err){
        console.log(err);
    }
}

msg();
msg();
msg();
msg();