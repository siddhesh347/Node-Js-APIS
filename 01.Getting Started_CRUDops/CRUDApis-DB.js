const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/testdata");
const testSchema=new mongoose.Schema({
    name:String,
    age:Number,
    gender:String
})
const saveInDB=async()=>{
    const testModel=mongoose.model('testcollection',testSchema);
    let data=new testModel({
        name:"mohan",
        age:28,
        gender:"Male"
    })
    let result=await data.save();
    console.log(result);
}
// saveInDB() :-> to save data in DB

const updateInDB=async()=>{ 
    const testModel=mongoose.model('testcollection',testSchema);
  let dataupdate=await testModel.updateOne(
    {name:"Samruddhi"},
    {
        $set:{
            age:27,
            name:"Meenakshi"
        }
    })
    console.log(dataupdate);
}  
// updateInDB() 
// :-> 
// TO update the data present in DB

// Delete Records function
const deleteInDB=async()=>{
    const testModel=mongoose.model('testcollection',testSchema);
  let datadelete=await testModel.deleteOne({name:'mohan'})
    console.log(datadelete);
}

//deleteInDB()

// Find records from DB
const searchInDB=async()=>{
    const testModel=mongoose.model('testcollection',testSchema);
    let searchdata=await testModel.find();
    console.log(searchdata);
}
searchInDB();
