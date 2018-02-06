'use strict';
app.use(bodyParser.json());
app.use(allowCrossDomain);
function getUser() {
  return new Promise(function (resolve, reject) {
    db.collection('user').find({ status: true }).toArray(function (err, result) {
      if (err) {
        reject({ status: false });
      } else {
        resolve(result)
      }
    });
  });
};


function addUser(params) {
  return new Promise(function (resolve, reject) {

    db.collection('user').insertOne(params, function (error, data) {
      if (error) {
        reject({ status: false });
      } else {
        resolve({ status: true });
      }
    });
  });
};
function updateUserData(id, data) {
  return new Promise(function (resolve, reject) {
    db.collection('user').updateOne({ '_id': objectID(id) }, { $set: data }, {}, function (err, result) {
      if (err) {
        reject({ status: false });
      }
      else {
        resolve(result);
      }
    });
  });
}
function getUpdateUser(id) {
  return new Promise(function (resolve, reject) {
    db.collection('user').findOne({ '_id': objectID(id) }, function (err, result) {
      if (err) {
        reject({ status: false });
      }
      else {
        resolve(result);
      }
    })
  });
}
function deleteUser(id){
  return new Promise(function(resolve,reject){
    db.collection('user').deleteOne({'_id':objectID(id)},function(err,result){
      if(err){
        reject({status:false});
      }
      else{
        resolve(result);
      }
    })
  })
}

module.exports = {
  getUser,
  addUser,
  updateUserData,
  getUpdateUser,
  deleteUser
}