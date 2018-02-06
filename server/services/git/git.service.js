'use strict';

function getListOfCommits(){
  return new Promise(function(resolve, reject){
    var url = "https://api.github.com/repos/SravanthiPenti/Angular-Project/commits?sha=2028e692cf3906d02dcb2706db828ca0429f4d9d";
    axios.get(url,{json:true}).then(function(response){
      resolve(response.data);
    }, function(error){
      reject(error);
    })
  });
}

module.exports = {
  getListOfCommits
}