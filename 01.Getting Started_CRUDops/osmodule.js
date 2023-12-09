const express=require("express");
const PORT=5000;
const os=require("os");
const app=express();

console.log("Architecture:",os.arch())
console.log("HostName:",os.hostname())
console.log("Free Memory:",os.freemem()/(1024*1024*1024))
console.log("Total Memory:",os.totalmem()/(1024*1024*1024))


console.log("Platform:",os.platform())
console.log("User Memory:",os.userInfo())

app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
 })