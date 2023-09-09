const express=require('express');
const app=express();
const PORT=3000;
const data =require("./data");
app.use(express.json())

app.put('/v1/api/updateData/:id/:location',(req,res)=>{

   const id=req.params.id;
   const location=req.params.location;
   const name=req.body;
   const personData=data.person.filter(
     (x)=> x.id == Number(id) && x.location !=location);

   console.log("Testdata",personData);
   const editedData=[...personData];
   editedData[0].location="Pune";
   res.send({message:"Request completed successfully",data:editedData})
})
app.listen(PORT,()=>{`Listening to port {PORT}`
})