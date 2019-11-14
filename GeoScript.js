
if(navigator.geolocation == undefined){
  alert("Geolocation undefined");
}else{
  alert("Geolocation Available");
  navigator.geolocation.getCurrentPosition(userLocated,locationError);
  function userLocated(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    alert("Lat:"+ latitude +",Long:"+ longitude);
    var searchLayer = L.layerGroup().addTo(map);
//... adding data in searchLayer ...
map.addControl( new L.Control.Search({layer: searchLayer}) );

var mymap = L.map('map').setView([-20.16527900, 57.4963800], 16);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
maxZoom: 19,
attribution: 'Map data &copy;'+
'<a href="https://www.openstreetmap.org/">OpenStreetMap</a>'+
'contributors,<a href="https://creativecommons.org/licenses'+
'/by-sa/2.0/">CC-BY-SA</a>,Imagery © <a href="https://'+
'www.mapbox.com/">Mapbox</a>',
id: 'mapbox.streets',
accessToken:'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYyc'+
'XBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'

}).addTo(mymap);
var marker = L.marker([-20.16527900, 57.4963800]).addTo(mymap);
