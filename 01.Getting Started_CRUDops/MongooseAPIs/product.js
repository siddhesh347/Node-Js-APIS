const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    name:String,
    age:Number,
    gender:String
})

module.exports=mongoose.model('testcollections',productSchema);