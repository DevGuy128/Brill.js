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
