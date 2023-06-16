const express=require("express");
const app=express();
const PORT=4001;
var bodyParser = require('body-parser');
const cors=require("cors")

app.listen(PORT,(req,res)=>{
console.log(`Server  Running as ${PORT}`); 
})
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({"Access-Control-Allow-Origin":"*"}))
app.post("/login",(req,res)=>{
   console.log(req.body)
   res.status(400).json({
    success:true
   })

})
 


