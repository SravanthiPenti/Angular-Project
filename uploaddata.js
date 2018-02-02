var express=require("express");
var bodyparser=require("body-parser");
var mongoose=require('mongoose');
var app=express();
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost:27017/mongoose-demo");
var nameschema=new mongoose.Schema({
    firstname:String,
    lastname:String
})
var User=mongoose.model("User",nameschema);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html")
})

app.post("/addname", (req, res) => {
    var myData=new User(req.body);
    myData.save().then(item=>{
        res.send("iten saved to database");
    })
    .catch(err=>{
        res.status(400).send("unable to save database");
    })
 
});
app.listen(8000);