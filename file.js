var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With', 'Content-Type', 'Authorization');

    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
}


global.express = require('express')
global.app = express()
// global.randomstring = require("randomstring");
var multipart = require('connect-multiparty');
bodyParser = require('body-parser');
global.path = require("path");
app.use(bodyParser.json());
app.use(allowCrossDomain);
app.use(multipart({
   uploadDir: path.join(__dirname, './public/uploads')
}));
global.MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
global.url = 'mongodb://localhost:27017/';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
global.db = db.db("myproject");
  // db.close();
});

// global.nodemailer = require('nodemailer');

global.ObjectID = require('mongodb').ObjectID;
// global.emailTemplate = require('swig-email-templates');

// global.emailTemp = {root: path.join(__dirname, "emailTemplates")
//     }




app.post('/api/uploadFile', function(req, res, next) {
    var data = {};
     data['filename'] = req.files;
    db.collection('file').save(data, function(err, result) {
    //     if (result.length > 0) {
            res.send({
                'success': true,
            });
    

})
  });


// app.post('/getUserInformation',function(req,res){
//   db.collection("userAttendance").find({
//     'email':req.body.email,
//     }).toArray(function (err,result){
//     if(err){
//       res.send({status:false});
//     }else{
//       res.send({status:true,data:result});
//     }
//   })
// })


app.listen(3003, function () {
  console.log('Example app listening on port 3003!')
})