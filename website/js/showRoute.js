function showRoute(bus, dir) {
    axios.get(`https://wsmobile.rtcquebec.ca/api/v3/horaire/ListeArret_Parcours?source=sitemobile&noParcours=${bus}&codeDirection=${dir}`).then(response => {
        makeStopsMarkers(response.data);
    }).catch(error => {});
}

var listMarkersArrets = [];

function makeStopsMarkers(listeArret) {
    console.log(listeArret);
    for (x in listeArret) {
        listeArret[x]
        let m = L.marker([listeArret[x].latitude, listeArret[x].longitude], {
            title: `${listeArret[x].nom}`,
            icon: iconArret
        });
        m.bindPopup(`${listeArret[x].description}, ${listeArret[x].noArret}`);
        
        m.addTo(mymap);
        listMarkersArrets.push(m);
    }
}

function hideRoute() {
    for (y in listMarkersArrets) {
        listMarkersArrets[y].remove();
    }
    listMarkersArrets = [];
}