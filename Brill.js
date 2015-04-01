var doc = window.document;
window.brill = {
  getEls: function(element,success){
    var els = doc.getElementsByTagName(element);
    success.call(els);
  }  
};
