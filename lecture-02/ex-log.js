function createLogEntry(message){
    const now = new Date();
    const timestamp = now.toLocaleTimeString('th-TH');
    const evenID = Math.random().toString(16).substring(2, 10);
    const logMessage = message.toUpperCase();
    return `[${timestamp}] [${evenID}] - ${logMessage}`;
}

const log = createLogEntry("User login successful");
console.log(log);
// OUTPUT :  [23:33:26] [02c9f014] - USER LOGIN SUCCESSFUL
