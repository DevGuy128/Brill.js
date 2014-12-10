var Test = function(){
  this.assert = function(expression,message){
    if(expression){
      console.log("Test passed.");
    }else{
      console.log("Test failed./n");
      console.log(message);
    }
  }
}
