//API URLS
// Champ by ID (apiChamp.concat(ID).concat("?").concat(apiKey))
var apiChamp = "https://na.api.pvp.net/api/lol/na/v1.2/champion/";

//Function for handing HTTP Requests
function httpGet(apiUrl) {
  var xmlHttp = null;

  xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", apiUrl, false );
  xmlHttp.send( null );
  return xmlHttp.responseText;
}

function getURLParams() {
  var params = location.search;
  var array = params.split("&");
  return array;
}

function getChampID(IDNum) {
  var ID = IDNum.split("=");
  return ID[1];
}

//var champJSON = httpGet(apiChamp.concat(champID).concat("?api_key=").concat(apiKey))

//var champObject = JSON.parse(champJSON);

(function() {
  //console.log(champJSON);
  //alert(champObject.id);
  var params = getURLParams();
  var apiKey = params[0];
  //var apiKey = key.replace('\?','');
  var champID = getChampID(params[1]);
  //alert(apiChamp.concat(champID).concat(apiKey));
  var champJSON = httpGet(apiChamp.concat(champID).concat(apiKey));
  var champObject = JSON.parse(champJSON);
  alert(champObject.id);
})()
