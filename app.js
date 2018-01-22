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
bodyParser = require('body-parser');

global.ObjectID = require('mongodb').ObjectID;
app.use(bodyParser.json());
app.use(allowCrossDomain);

global.MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
// Connection URL using npm mongo n
global.url = 'mongodb://localhost:27017/';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
global.db = db.db("mongoNode");
});



// global.userRoute = require('./routes/userRoute.js');
// app.use('/user', userRoute);


app.post('/adduser',function(req,res){
  // console.log(req.body);
  // res.send(req.body)
    db.collection('user').save(req.body,function(error,data){
    if(error){
      res.send({ status: false});
    }else{
      res.send({ status: true, messages:"login ."});
    }
  });
})



app.get('/getUser',function(req,res){
  db.collection('user').find({status:true}).toArray(function(err,result){
  if(err){
    res.send({status:false});
  }else{
    res.send(result)
  }

  console.log(res);
})
})


app.listen(3000)