
var express=require("express");
var multer=require("multer");
var app = express();
var server = require('http').createServer(app);


var upload = multer({ dest: 'public/' });


app.use(function (req, res, next) {
  //console.log(req.files); // JSON Object
  next();
});

// server.listen(port, function () {
//   console.log('Server listening at port %d', port);
// });

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/file.html');
})

app.post('/upload', upload.any(),  function(req, res) {
  console.log(req.files);
});
app.listen(4400);