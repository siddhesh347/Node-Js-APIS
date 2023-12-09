// Info:

//  1 .Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. 
//  2. It is written on top of busboy for maximum efficiency.
//  3. Multer will not process any form which is not multipart (multipart/form-data).

const express=require("express");
const PORT=5000;
const multer=require("multer")
const app=express();

const fileUpload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"E:/CodingMaterials/Node-Js-APIS/assets/images/")
        },
        filename:function(req,file,cb){
            cb(null,file.originalname+"-"+Date.now()+ "."+ file.originalname.split('.').pop())
        }
    })
}).single("upload_file")

app.post("/upload",fileUpload,(req,res)=>{
    res.send("File Uploaded successfully");
})

app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
 })
 