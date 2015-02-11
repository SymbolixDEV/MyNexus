var apiKey = "api_key=34b3ac69-7cb3-4c45-9238-9f88195f3312";

//API URLS
// Champ by ID (apiChamp.concat(ID).concat("?").concat(apiKey))
var apiChamp = "https://na.api.pvp.net/api/lol/na/v1.2/champion/"

//Function for handing HTTP Requests
function httpGet(apiUrl)
{
  var xmlHttp = null;

  xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", apiUrl, false );
  xmlHttp.send( null );
  return xmlHttp.responseText;
}

var champID = 1;

var champJSON = httpGet(apiChamp.concat(champID).concat("?").concat(apiKey))

var champObject = JSON.parse(champJSON);

(function() {
  console.log(champJSON)
  alert(champObject.id);
})()
