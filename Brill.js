var doc = window.document;
window.queryObject.prototype.append = function(){
    var el = document.createElement(tag);
    var node = document.createTextNode(content);
    el.appendChild(node);
    var appended = doc.querySelectorAll(appendee);
    appended[0].appendChild(el);
};
window.queryObject = function(selector){
    this.contents = doc.querySelectorAll(selector);
};
window.$ = function(selector){
  return new queryObject(selector);
};

window.queryObject.prototype.click = function(selector,callback){
  selector.addEventListener('click', selector);
};
