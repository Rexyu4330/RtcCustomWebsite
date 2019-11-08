function showRoute(bus, dir, codeType) {
    //Remove old route
    hideRoute();
    //Get json list of stops from website
    axios.get(`https://wsmobile.rtcquebec.ca/api/v3/horaire/ListeArret_Parcours?source=sitemobile&noParcours=${bus}&codeDirection=${dir}`).then(response => {
        makeStopsMarkers(bus, dir, codeType, response.data);
    }).catch(error => {});
}

var markersArretsLayerGroup = L.layerGroup();

function makeStopsMarkers(bus, dir, codeType, listeArret) {
    ////console.log(listeArret);
    for (x in listeArret) {
        let arret = listeArret[x];

        let m = L.marker([arret.latitude, arret.longitude], {
            title: `${arret.nom}`,
            icon: iconArret[codeType]
        });
        m.popupText = `${arret.description}, ${arret.noArret}`;
        m.bindPopup(m.popupText);
        m.bus = bus;
        m.dir = dir;
        m.codeType = codeType;
        m.noArret = arret.noArret;
        m.markerType = 'arret';

        markersArretsLayerGroup.addLayer(m);
    }
    markersArretsLayerGroup.addTo(mymap);
    ////console.log(markersArretsLayerGroup.getLayers());
}

function hideRoute() {
    markersArretsLayerGroup.remove();
    markersArretsLayerGroup.eachLayer((layer) => {
        markersArretsLayerGroup.removeLayer(layer);
    })
    ////console.log(markersArretsLayerGroup.getLayers());
}


//A METTRE DANS UN AUTRE FICHIER DE SCRIPT************************************************
function getWaitingTime(popup) {
    //console.log(popup)
    if (popup.isOpen()) {
        axios.get(`https://wsmobile.rtcquebec.ca/api/v3/horaire/BorneVirtuelle_ArretParcours?source=sitemobile&noArret=${popup._source.noArret}&noParcours=${popup._source.bus}&codeDirection=${popup._source.dir}`).then(response => {
            printWaitingTime(popup, response.data);
        }).catch(error => {});
        setTimeout(() => {getWaitingTime(popup)}, 10000);
    }
}

function printWaitingTime(popup, arret) {
    //console.log(arret);
    popup.setContent(popup._source.popupText);
    for (w in arret.horaires) { //For each bus or time, add departure minutes
        popup.setContent(popup.getContent() + '<br>' + arret.horaires[w].departMinutes + ' min');
    }
}
//A METTRE DANS UN AUTRE FICHIER DE SCRIPT************************************************