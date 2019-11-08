//GroupPointsVente-------------------------------------
var layerGroupPointsVente = L.layerGroup();

axios.get("https://wsmobile.rtcquebec.ca/api/v3/pointsVente/ListePointsVente?source=sitemobile").then(function(response) {
    callback(response.data);
}).catch(function (error) {console.log(error)});

function callback(data) {
    for (x in data) {
        let a = L.marker([data[x].latitude, data[x].longitude], {title: data[x].adresse});
        a.bindPopup(data[x].nom);
        layerGroupPointsVente.addLayer(a);
    }
}


document.getElementById("showPointsVente").addEventListener("click", () => {layerGroupPointsVente.addTo(mymap)});
document.getElementById("hidePointsVente").addEventListener("click", () => {layerGroupPointsVente.remove()});
//GroupPointsVente-------------------------------------