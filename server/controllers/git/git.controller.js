'use strict';
var gitService = require('../../services/git/git.service');


function getCommitsList(req, res) {
  gitService.getListOfCommits().then(function(result){
    res.status(200).send(result);
  }, function(error){
    res.status(400).send(error);
  });
};

module.exports= {
  getCommitsList,
};