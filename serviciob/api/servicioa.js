const axios = require("axios")

function getService(){

  let url = `http://servicioa:5000`;

  let result  = axios.get(url)
  .then(response =>{
    console.log(response);
    return response
  })
  .catch(error => {
    console.log(error);
  });
}

let data =  getService();

module.exports = data