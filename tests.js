try{
  var app = require("app.js");
  if(app.forEach){
    throw "forEach has been deprecated. Please use map.";
  }
}catch(error){
  console.log("Error: " + error.message + ".");
}
