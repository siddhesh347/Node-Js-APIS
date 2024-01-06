var express = require('express');
var router = express.Router();
var userModel=require("./users");
var passport=require('passport');
var localStrategy=require('passport-local');
/* GET home page. */

passport.use(new localStrategy(userModel.authenticate()))
router.get('/', function(req, res, next) {
  res.render('index');
});

// Note: For passport package info and steps refer file docs.txt

router.get('/failed', function(req, res, next) {
  const testobj={
    name:"Siddhesh",
    age:25,
    location:"Mumbai"
  }
  req.flash("data",testobj)
  res.send("data send kiya hai, Backend Termimnal pe check karo")
  // res.render('index');
});

router.get('/checkdata', function(req, res, next) {
  let user=[];
  user=(req.flash("data")[0]);
  console.log(user)
  console.log(user.name)
  console.log(user.age)
  res.send('Data check karo Set ho jana chahiye');
});

// // Code for checking insensitive cases (ex: username in our case i.e siddhesh and 
// Siddhesh should be treated the same)

router.get("/getData",async(req,res)=>{
let regex= new RegExp("^Manish$","i")
  let data=await userModel.find({username:regex})
  res.send(data)
})

// Show only those records which has specified categories(ex: angular) using $all operator
router.get("/fetchCategories", async(req,res)=>{
let regex= new RegExp("^ANGULAR$","i")
let data= await userModel.find({categories:{$all:[regex]}})
res.send(data);

})
// For filtering the records based on Date
router.get("/fetchDate", async(req,res)=>{
  let date1= new Date("2024-01-06");
  let date2= new Date("2024-01-07");
  let data= await userModel.find({datecreated:{ $gte:date1, $lte:date2}})
  res.send(data);
  
  })

  // For filtering the records based on existence of a field
router.get("/fetch", async(req,res)=>{
  let data= await userModel.find({categories:{ $exists:true}})
  res.send(data);
  })
 
    // For filtering the records based on length of a field
router.get("/fetchLen", async(req,res)=>{
  let data= await userModel.find({
    $expr:{
      $and:[
        {$gte:[{$strLenCP:'$nickname'},0]},
        {$lte:[{$strLenCP:'$nickname'},3]}
      ]
    }
   } )
  res.send(data);
  })


// For creating users in the Database
router.get("/create",async(req,res)=>{
let user=await userModel.create({
  username:"manish",
  nickname:"mana",
  description:"manish is a Front End Web Developer",
categories:['cognito','Angular','CSS','javascript','dynmaodb']
})

res.send("Data save hona chahiye")
})


module.exports = router;
 