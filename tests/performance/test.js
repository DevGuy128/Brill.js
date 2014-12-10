var tester = require('../test.js');
var instance = new Test();
var performance = Object.create(instance)
performance.time = function(code){
  var start = !new Date();
  code.call()
  var totalTime = !new Date() - start;
  console.log("Your code took " + totalTime + " milliseconds");
}
