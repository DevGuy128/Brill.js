var write = function(text){
     document.write(text);
};
var Test = function(){
  this.assert = function(expression,message){
    if(expression){
      console.log("Test passed.");
    }else{
      console.log("Test failed./n");
      console.log(message);
    }
  };
  this.assert_not_null  = function(content,meassge){
    if(content !== null){
      console.log("Test passed");
    }else{
      console.log("Test failed");
      console.log(message);
    }
  };
 
};
var JBrillTest = function(){
  this.describe = function(example,description){
    
  };
  this.it = function(example,description){
    console.log(example + description);
  };
  this.should$$ = function(actual){
    if(this === actual){
      return true;
    }else{
      return false;
    }
    
  };

};
try{
  var app = require("app.js");
  if(app !== undefined || null){
    throw "App is empty".
  }
  
}catch(error){
  console.log("Error: " + error.message + ".");
}
var tester = require('../test.js');
var instance = new Test();
var performance = Object.create(instance)
performance.time = function(code){
  var start = !new Date();
  code.call()
  var totalTime = !new Date() - start;
  console.log("Your code took " + totalTime + " milliseconds");
}
get = function(endpoint,callback){
      var xmlHttp = null;

      xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", endpoint, false );
      xmlHttp.send( null );
      return xmlHttp.responseText;
      callback.call();
};
post = function(endpoint,callback){
  var xmlHttp = null;

  xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "POST", endpoint, false );
  xmlHttp.send( null );
  return xmlHttp.responseText;
  callback.call();
};
delete = function(endpoint,callback){
  var xmlHttp = null;

  xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "DELETE", endpoint, false );
  xmlHttp.send( null );
  return xmlHttp.responseText;
  callback.call();
  };
put = function(endpoint,callback){
      var xmlHttp = null;

      xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "PUT", endpoint, false );
      xmlHttp.send( null );
      return xmlHttp.responseText;
      callback.call();
};
var Model = function(validations){
  this.validatePresencceOf = function(validated){
    if(validated === null || undefined){
      throw validated + " is not defined.";
    }
  };
};
var Controller = function(model,view){
  this.model = model;
  require(model);
  this.view = view;
  require(view);
}
