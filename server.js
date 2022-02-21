const bodyparser=require("body-parser");
const express=require("express");
const mymodule=require("./mymodule");
const app=express();

app.use(bodyparser.urlencoded({extended:false}))

app.get("/",function(req,res){
    res.sendFile("form.html",{root:__dirname});
});

app.post("/submit_data",function(req,res){
    var num= req.body.inbox;
    var btn=req.body.sbtn;
    var result;
        result=mymodule.myprime(num);
         res.send(result);
});
app.listen(3001);
console.log("server started at port 3000");