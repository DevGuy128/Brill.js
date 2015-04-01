var doc = window.document;
window.brill = {
  getEls: function(element,success){
    var els = doc.getElementsByName(element);
    for(var i = 0; i< doc.getElementsByName(element).length; i++){
      console.log(els[i].toString());
    }
    doc.getElementsByName(element);
    success.call(els.toString());
  }  
};
brill.getEls('h1',function(data){
  console.log(data); 
  document.write(data);
});
