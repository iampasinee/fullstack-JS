longRunningOperation(() =>{
    anotherLogRunningOperation(() =>{
        yetAnother(() => {
            oneMore(() => {
                lastOne(() => {
                    console.log('Where are we?');
                    
                })
            })
        })
    })
})