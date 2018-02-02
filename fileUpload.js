var express=require("express")
var app=express();
var multipart=require("connect-multiparty");
var fs=require("fs");
var path=require("path");
app.use(multipart({
    uploadDir:path.join(__dirname,'./public')
}));
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db){
    global.db=db.db("images");
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/file.html');
  })
  
app.post('/upload',function(req,res){
var  data={};
console.log(req.files)
console.log(req.files.images.path);
data['images']=req.files;
       db.collection('myimages')
           .insert(data, function(err, result){
               if (err) { console.log(err); }
           });
})
// app.get('/getFile',function(req,res){
//     db.collection('myimages').findOne( {"_id":ObjectId("5a731ad5c02f13331dda15cc")},function(err,result){
//         res.send(result);
//     })
    
// })
app.listen(5000);
    
