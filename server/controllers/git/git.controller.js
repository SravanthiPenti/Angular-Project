'use strict';
var gitService = require('../../services/git/git.service');


function getCommitsList(req, res) {
  gitService.getListOfCommits().then(function (result) {
    res.status(200).send(result);
  }, function (error) {
    res.status(400).send(error);
  });
};
function getRepositoryList(req,res){
  gitService.getListOfRepos().then(function(result){
  res.status(200).send(result);
  }),function(error){
    res.status(400).send(err);
  }
}
module.exports = {
  getCommitsList,
  getRepositoryList
};