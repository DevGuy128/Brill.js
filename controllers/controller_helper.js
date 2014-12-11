var Controller = function(model,view){
  this.model = model;
  require(model);
  this.view = view;
  require(view);
}
