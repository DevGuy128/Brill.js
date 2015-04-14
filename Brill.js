var doc = window.document;
window.brill = {
  getEls: function(selector){
    return doc.querySelectorAll(selector);
  },
  append:function(tag,content,appendee){
    var el = document.createElement(tag);
    var node = document.createTextNode(content);
    el.appendChild(node);
    var appended = doc.querySelectorAll(appendee);
    appended[0].appendChild(el);
  }
};
