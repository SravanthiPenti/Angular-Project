
var express=require("express");
var multer=require("multer");
var app = express();
var server = require('http').createServer(app);


var upload = multer({ dest: 'public/' });
console.log(upload);

app.use(function (req, res, next) {
  //console.log(req.files); // JSON Object
  next();
});



app.get('/', function(req, res) {
  res.sendFile(__dirname + '/file.html');
})

app.post('/upload', upload.any(),  function(req, res) {
  // console.log(req.files);
  var 
});
app.listen(4400);