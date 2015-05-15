var doc = window.document;
window.$ = (function(){
  function queryObject(){
    this.contents = doc.querySelectorAll(selector);
    this.length = contents.length;
  }
  queryObject.prototype.text = function(){
    
  };
  queryObject.prototype.append = function(){
    var el = document.createElement(tag);
    var node = document.createTextNode(content);
    el.appendChild(node);
    var appended = doc.querySelectorAll(appendee);
    appended[0].appendChild(el);
  };
  queryObject.prototype.click = function(callback){
    this.addEventListener('click', callback);
  };
  var $ = function(selector){
    return new queryObject(selector);
  };
  return (function(){
    
  });
});
