get = function(endpoint,callback){
      var xmlHttp = null;

      xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", endpoint, false );
      xmlHttp.send( null );
      return xmlHttp.responseText;
      callback.call();
};
post = function(endpoint,callback){
  var xmlHttp = null;

  xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "POST", endpoint, false );
  xmlHttp.send( null );
  return xmlHttp.responseText;
  callback.call();
};
delete = function(endpoint,callback){
  var xmlHttp = null;

  xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "DELETE", endpoint, false );
  xmlHttp.send( null );
  return xmlHttp.responseText;
  callback.call();
  };
put = function(endpoint,callback){
      var xmlHttp = null;

      xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "PUT", endpoint, false );
      xmlHttp.send( null );
      return xmlHttp.responseText;
      callback.call();
    };
