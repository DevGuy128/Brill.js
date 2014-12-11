try{
  var app = require("app.js");
  if(app == undefined || null){
    throw "App is empty".
  }
  
}catch(error){
  console.log("Error: " + error.message + ".");
}
