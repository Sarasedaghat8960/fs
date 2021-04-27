var express = require('express');
var router = express.Router();
const fs=require("fs");

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  fs.readFile("users.json",(err,data)=>{
   if(err){
     console.log(err);
   }
   const users=JSON.parse(data);
   res.send(users)
   return;
  });

});
router.get('/add', function(req, res, next) {
  
  fs.readFile("users.json",(err,data)=>{
   if(err){
     console.log(err);
   }
   const users=JSON.parse(data);
let newUser={"userName":"Herbert","userEmail":"herbert@mail.com"};
users.push(newUser);
fs.writeFile("users.json",JSON.stringify(users,null,2),(err)=>{
  if(err){
    console.log(err);
  }
})

   res.send(users)
   return;
  });

});
module.exports = router;
