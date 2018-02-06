'use strict';

var express = require('express');
var userController=require('./user.controller');

var router = express.Router();

router.get('/getuser',userController.getUserList);
router.get('/home/:id',userController.userUpdate);
router.post('/adduser',userController.addUserList);
router.put('/update/:id',userController.updateUser);
router.delete('/deleteUser/:id',userController.getDeleteUser);

module.exports = router;