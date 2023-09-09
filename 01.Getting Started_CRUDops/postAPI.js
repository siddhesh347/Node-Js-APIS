const express=require('express');
const app=express();
const PORT=3000;
app.use(express.json());
app.post('/v1/api/savePeopleData/',(req,res)=>{
    debugger;
    const body=req.body;
    console.log(body);
    res.status(200).json({status:true,data:body});
})

app.listen(PORT,()=>{`Listening to port {PORT}`
})