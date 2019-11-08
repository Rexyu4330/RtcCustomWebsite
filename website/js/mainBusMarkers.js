axios.post("/busListJson").then(function(response) {
    busListJson = response.data;
    ////console.log("Bus list", busListJson);
    getBusPositionFromServer();
}).catch(function (error) {console.log(error)});

var listMarkersBus = [];

function getBusPositionFromServer() {
    axios.post("/busPosition").then(function(response) {
        console.log("get: ", response.data);
        updateMarkers(response.data)
    }).catch(function (error) {console.log(error)});
}


function findMarkerById(id) {
    return listMarkersBus.filter(marker => marker.idAutobus == id)[0]
}


function updateMarkers(data) {
    for (x in data) {
        for (y in data[x].listBus) {
            let bus = data[x].listBus[y];
            let markerToMove = findMarkerById(bus.idAutobus);
            if (markerToMove == undefined) {
                //MAKE NEW MARKER
                for (v in busListJson) {
                    if (busListJson[v].noParcours == data[x].bus) { //Trouver le busListJson correspondant
                        var busInformations = busListJson[v];
                    }
                }
                if (data[x].dir == busInformations.codeDirectionPrincipale) { //Quelle direction est la bonne
                    var descriptionDirection = busInformations.descriptionDirectionPrincipale;
                } else {
                    var descriptionDirection = busInformations.descriptionDirectionRetour;
                }
                let a = L.marker([bus.latitude, bus.longitude], {
                    title: `${data[x].bus} vers ${descriptionDirection}`,
                    icon: Icons[busInformations.codeTypeService][data[x].dir]
                });
                //POPUP **************************************************
                a.bindPopup(`${data[x].bus} ${busInformations.description} vers ${descriptionDirection}<br>
                    ID: ${bus.idAutobus}<br>
                    <br>
                    Direction Principale: ${busInformations.descriptionDirectionPrincipale}<br>
                    Direction de Retour: ${busInformations.descriptionDirectionRetour}<br>
                    <a onclick="showRoute(${data[x].bus},${data[x].dir},${busInformations.codeTypeService})" href="#">Montrer la route</a><br>
                    <a onclick="followBus(${bus.idAutobus})" href="#">Suivre la bus</a>`);
                a.idAutobus = bus.idAutobus;
                a.busNbr = data[x].bus;
                a.busDir = data[x].dir;
                a.codeType = busInformations.codeTypeService;
                a.markerType = 'bus';
                a.toDelete = 0;
                a.polyline = L.layerGroup();
                a.addTo(mymap);
                listMarkersBus.push(a);
                console.log("New Marker", a);
            } else {
                //Move marker
                let oldLatLng = markerToMove.getLatLng();
                let newLatLng = [bus.latitude,bus.longitude];

                let latlngs = [oldLatLng,newLatLng];
                if (oldLatLng.lat != newLatLng[0] || oldLatLng.lng != newLatLng[1]) { //If bus has moved
                    let c = L.polyline(latlngs, {color: polylineColors[markerToMove.codeType], opacity: 0.8}).addTo(mymap);
                    markerToMove.polyline.addLayer(c);
                }
                if (markerToMove.polyline.getLayers().length > 10) { //LINE LENGTH
                    //Remove oldest line
                    markerToMove.polyline.getLayers()[0].remove();
                    markerToMove.polyline.removeLayer(markerToMove.polyline.getLayers()[0]);
                }

                markerToMove.setOpacity(0.5);
                markerToMove.setLatLng(newLatLng);
                //Move map view if follow is active
                if (follow) {
                    mymap.setView(markerToFollow.getLatLng());
                }
            }
        }
    }
    ////console.log(listMarkersBus);
    removeUselessMarkers(data);
}

function removeUselessMarkers(data) {
    //Find bus to delete
    for (x in listMarkersBus) { //For each marker
        var found = false;
        for (z in data) { //Search in all bus for the id of the marker
            for (y in data[z].listBus) {
                if (data[z].listBus[y].idAutobus == listMarkersBus[x].idAutobus) { //If the bus exist
                    ////console.log("Found");
                    var found = true;
                }
            }
        }
        //After search in all buses, if the marker is not linked to a bus anymore, delete
        if (found == false) {
            ////console.log("Not found")
            if (listMarkersBus[x].toDelete > 2) { //Time to delete this marker
                console.log("Removed Marker", listMarkersBus[x])
                listMarkersBus[x].polyline.eachLayer(layer => layer.remove()); //Remove Polylines
                listMarkersBus[x].remove(); //Remove bus marker from map
                listMarkersBus.splice(x, 1); //Remove bus marker from array list
            } else {
                listMarkersBus[x].toDelete += 1;
                ////console.log(listMarkersBus[x].toDelete, listMarkersBus[x].idAutobus);
            }
        }
    }
}

//getBusPositionFromServer(); Moved inside getBusListJson
setInterval(getBusPositionFromServer,1500);