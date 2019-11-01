//GroupPointsVente-------------------------------------
var layerGroupPointsVente = L.layerGroup();
axios.get("https://wsmobile.rtcquebec.ca/api/v3/pointsVente/ListePointsVente?source=sitemobile").then(function(response) {
    callback(response.data);
}).catch(function (error) {console.log(error)});
function callback(data) {
    for (x in data) {
        let a = L.marker([data[x].latitude, data[x].longitude], {title: data[x].adresse});
        a.bindPopup(data[x].nom);
        //a.addTo(mymap);
        layerGroupPointsVente.addLayer(a);
    }
}
function showPointsVente() {
    layerGroupPointsVente.addTo(mymap);
}
function hidePointsVente() {
    layerGroupPointsVente.remove();
}

document.getElementById("show").addEventListener("click", showPointsVente);
document.getElementById("hide").addEventListener("click", hidePointsVente);
//GroupPointsVente-------------------------------------