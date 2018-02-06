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
function getListOfRepos(){
  return new Promise(function(resolve,reject){
    var url="https://api.github.com/users/Sravanthipenti/repos?per_page=100";
    axios.get(url,{json:true}).then(function(response){
      console.log(response.data);
      
      for(var i=0;i<=response.data.length;i++)
      {
      console.log("Repository Name:",response.data[i].name);
      console.log("Respository FullName:",response.data[i].full_name);
      console.log("-----------");
      }
      resolve(response.data);
    },function(error){
      reject(error);
    });
  });
}

module.exports = {
  getListOfCommits,
  getListOfRepos
}