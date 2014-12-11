var Test = function(){
  this.assert = function(expression,message){
    if(expression){
      console.log("Test passed.");
    }else{
      console.log("Test failed./n");
      console.log(message);
    }
  }
  this.assert_not_null  = function(content){
    if(content !== null){
      console.log("Test passed");
    }else{
      console.log("Test failed");
    }
  }
};
