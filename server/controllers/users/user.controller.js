'use strict';
app.use(bodyParser.json());
app.use(allowCrossDomain);
var userService = require('../../services/users/user.service');
function getUserList(req, res) {
  userService.getUser().then(function (result) {
    res.status(200).send(result);
  }, function (error) {
    res.status(400).send(error);
  });
};

function addUserList(req, res) {
  var insertdata = {
    fullname: lowercase(req.body.fullname),
    email: lowercase(req.body.email),
    hobbies: lowercase(req.body.hobbies),
    dateofBirth: req.body.dateofBirth,
    file: imagePath,
    status: true
  }
  userService.addUser(insertdata).then(function (response) {
    res.status(200).send(response);
  }, function (error) {
    res.status(400).send(error);
  });
};
function updateUser(req, res) {
  var updatedata = {
    fullname: lowercase(req.body.fullname),
    email: lowercase(req.body.email),
    hobbies: lowercase(req.body.hobbies),
    dateofBirth: req.body.dateofBirth
  }
  var id = req.params.id;
  userService.updateUserData(id, updatedata).then(function (response) {
    res.status(200).send(response);
  }, function (error) {
    res.status(400).send(error);
  })
}
function userUpdate(req, res) {
  userService.getUpdateUser(req.params.id).then(function (response) {
    res.status(200).send(response)
  }, function (error) {
    res.status(400).send(error);
  });
}
function getDeleteUser(req, res) {
  userService.deleteUser(req.params.id).then(function (response) {
    res.status(200).send(response)
  }, function (err) {
    res.status(400).send(error);
  })
}


module.exports = {
  getUserList,
  addUserList,
  updateUser,
  userUpdate,
  getDeleteUser,


};