var Model = function(validations){
  this.validatePresencceOf = function(validated){
    if(validated === null || undefined){
      throw validated + " is not defined.";
    }
  };
};
