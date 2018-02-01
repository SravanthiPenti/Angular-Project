

var allowCrossDomain = function (req, res, next) {
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
var multer=require("multer");
var fs=require('fs');
global.objectID = require('mongodb').ObjectID;
app.use(bodyParser.json());
app.use(allowCrossDomain);


var lowercase=require('lower-case');

global.MongoClient = require('mongodb').MongoClient
	, assert = require('assert');
// Connection URL using npm mongo n
global.url = 'mongodb://localhost:27017/';
// Use connect method to connect to the Server
// global.upload=multer({dest:'public/'});
MongoClient.connect(url, function (err, db) {

	assert.equal(null, err);
	console.log("Connected correctly to server");
	global.db = db.db("mongoNode");
});



app.post('/adduser',upload.any(), function (req, res) {
	var insertdata = {
		fullname: lowercase(req.body.fullname),
		email: lowercase(req.body.email),
		hobbies: lowercase(req.body.hobbies),
		dateofBirth:req.body.dateofBirth,
		file:req.files.file.path,
		status:true
		
	}
	db.collection('user').insertOne(insertdata, function (error, data) {
		if (error) {
			res.send({ status: false });
		} else {
			res.send({ status: true, messages: "login ." });
		}
	});
})



app.get('/getUser', function (req, res) {
	db.collection('user').find({ status: true }).toArray(function (err, result) {
		if (err) {
			res.send({ status: false });
		} else {
			res.send(result)
		}

		console.log(res);
	})
})
app.get('/home/:id', function (req, res) {
	var id = req.param('id');
	console.log(id);
	db.collection('user').findOne({ '_id': objectID(id) }, function (err, result) {
		if (err) {
			res.send({ status: false });
		}
		else {
			res.send(result);
		}
	})

})
app.put('/home/:id', function (req, res) {
	var updatedata = {
		fullname: lowercase(req.body.fullname),
		email: lowercase(req.body.email),
		hobbies: lowercase(req.body.hobbies),
		dateofBirth:req.body.dateofBirth
	}
	var id = req.params.id;
	console.log(id);
	db.collection('user').updateOne({ '_id': objectID(id) }, { $set: updatedata }, {}, function (err, result) {
		if (err) {
			res.send({ status: false });
		}
		else {
			res.send(result);
		}


	})
})
app.delete('/deleteUser/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	db.collection('user').deleteOne({ '_id': objectID(id) }, function (err, result) {
		if (err) {
			res.send({ status: false });
		} else {
			res.send(result);
		}

	})
})


app.listen(3000)