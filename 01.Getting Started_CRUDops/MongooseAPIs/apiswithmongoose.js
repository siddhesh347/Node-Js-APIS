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

// GET API 
// we use async await because productmodel.find returns a promise
app.get("/listUsers",async(req,res)=>{
let data=await productmodel.find();
res.send(data);
})

// GET API END

// DELETE API START
app.delete("/deleteUsers",async(req,res)=>{
    let data=await productmodel.deleteOne(req.body);
    console.log(data);
    res.send(data);
    })
 // DELETE API END

 // UPDATE API START
app.put("/editUser/:name",async(req,res)=>{
    let data=await productmodel.updateOne(
        req.params,
        req.body,{
            $set:req.body
        });
    console.log(data);
    res.send(data);
    })
 // UPDATE API END


//  SEARCH API WITH SINGLE AND MULTIPLE FIELDS

app.get("/search/:key", async (req, res) => {
    debugger;
    const reqData = req.params.key;
    try {
        let data;

        // Check if the search key is numeric
        if (!isNaN(reqData)) {
            // If numeric, perform an exact match
            data = await productmodel.find({
                "$or": [
                    { "age": reqData },
                ]
            });
        } else {
            // If not numeric, perform a case-insensitive search with regex
            data = await productmodel.find({
                "$or": [
                    { "name": { $regex: reqData, $options: "i" } },
                    { "gender": { $regex: reqData, $options: "i" } }
                ]
            });
        }

        console.log(data);
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});





// 

app.listen(PORT,()=>{
   console.log(`Listening to port ${PORT}`);
})
