const express=require('express');
const app=express();
const port=3000;
const data =require("./data");
app.get('/',(req,res)=>{
    res.send("<h2>Getting started with Node Js</h2>")
    console.log("Getting started with Node Js");
})

app.listen(port,()=>{`Listening to port {port}`
})