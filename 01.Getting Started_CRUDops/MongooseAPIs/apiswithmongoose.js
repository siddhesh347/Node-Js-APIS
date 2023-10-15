const express=require('express');
require("./config");
const PORT=5000;
const productmodel=require("./product");

// You create an instance of the Express application using const app = express();
const app=express();

// You use app.use(express.json()) to enable parsing of JSON data from incoming requests. This middleware is used to parse JSON request bodies.
app.use(express.json());

// You define a POST route at the path '/insertData'. When a POST request is made to this endpoint
// POST API 
app.post('/insertData',async(req,res)=>{
    let data=new productmodel(req.body);
    let result=await data.save();
    console.log(result);
//     console.log(req.body)
res.send("Insert API call in DB")
})
// POST API END


app.listen(PORT,()=>{
   console.log(`Listening to port ${PORT}`);
})
