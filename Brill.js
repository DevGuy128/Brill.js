var doc = window.document;
window.append = function(tag,content,appendee){
    var el = document.createElement(tag);
    var node = document.createTextNode(content);
    el.appendChild(node);
    var appended = doc.querySelectorAll(appendee);
    appended[0].appendChild(el);
};
window.$ = function(selector){
  return doc.querySelectorAll(selector);
};

window.click = function(selector,callback){
  selector.addEventListener('click', selector);
};
