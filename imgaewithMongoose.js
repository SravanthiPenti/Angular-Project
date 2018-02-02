var express=require("express");
var bodyparser=require("body-parser");
var mongoose=require("mongoose");
var app=express();
var fs=require("fs");
// var path=require("path");
var schema=mongoose.Schema;
var multer=require("multer");
mongoose.connect("mongodb://localhost:27017/mongoose-image");
mongoose.Promise=global.Promise;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(multer);
multer({dest:'.public/',
rename:function(fieldname,filename){
    return filename;
}
});  

var itemSchema = new mongoose.Schema(
    { img: 
        { data: Buffer, contentType: String }
    }
  );
  var Item=mongoose.model("Item",itemSchema);


app.get('/',function(req,res){
    res.sendFile(__dirname+"/file.html");
})
app.post("/upload",function(req,res){
    console.log(req.files);
    // var data={};
    // data['images']=req.files;

    var newItem = new Item();
    newItem.img.data = fs.readFileSync(req.files.path)
    newItem.img.contentType = "image/png";
    newItem.save();
   });
app.listen(8080)