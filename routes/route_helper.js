 brill.prototype.get = function(endpoint,callback){
      var xmlHttp = null;

      xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", endpoint, false );
      xmlHttp.send( null );
      return xmlHttp.responseText;
      callback.call();
};
brill.prototype.post = function(endpoint,callback){
  var xmlHttp = null;

  xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "POST", endpoint, false );
  xmlHttp.send( null );
  return xmlHttp.responseText;
  callback.call();
};
brill.prototype.delete = function(endpoint,callback){
  var xmlHttp = null;

  xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "DELETE", endpoint, false );
  xmlHttp.send( null );
  return xmlHttp.responseText;
  callback.call();
  };
brill.prototype.put = function(endpoint,callback){
      var xmlHttp = null;

      xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "PUT", endpoint, false );
      xmlHttp.send( null );
      return xmlHttp.responseText;
      callback.call();
    };
