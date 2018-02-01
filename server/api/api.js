// var MongoClient=require("mongodb").MongoClient;
// var bodyparser=require("body-parser");
// var lw=require("lower-case");
// app.use(bodyparser,{encodeURI:true});
// var url="mongodb://localhost:27017/";

// MongoClient.connect(url,function(req,res){
// var dbo=db.db("mongoNode");
// })
const api = express.Router();
var callback = function(req, res, next){
    if(req.count) {
        req.count+=1
    } else {
        req.count = 1
    }
    next();
};
api.get('/',callback,callback,callback,callback,callback,callback,callback, function(req, res){
    console.log("final count: ", req.count);
})
module.exports = api;
