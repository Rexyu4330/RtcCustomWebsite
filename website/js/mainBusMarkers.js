axios.post("/busListJson").then(function(response) {
    busListJson = response.data;
    ////console.log("Bus pos", busListJson);
}).catch(function (error) {console.log(error)});

var listMarkersBus = [];
var polyline = [];

function getBusPositionFromServer() {
    axios.post("/busPosition").then(function(response) {
        console.log("get: ", response.data);
        updateMarkers(response.data)
    }).catch(function (error) {console.log(error)});
}


function findMarkerById(id) {
    for (z in listMarkersBus) {
        if (listMarkersBus[z].idAutobus == id) {
            ////console.log(listMarkersBus[z], id);
            return listMarkersBus[z]
        }
    }
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
                a.polyline = [];
                a.addTo(mymap);
                listMarkersBus.push(a);
                console.log("New Marker", a);
            } else {
                let oldLatLng = markerToMove.getLatLng();
                let newLatLng = [bus.latitude,bus.longitude];

                let latlngs = [oldLatLng,newLatLng];
                if (oldLatLng.lat != newLatLng[0] || oldLatLng.lng != newLatLng[1]) { //Si il y a des nouvelles coordonnees
                    let c = L.polyline(latlngs, {color: colorLines[markerToMove.codeType], opacity: 0.8}).addTo(mymap);
                    markerToMove.polyline.push(c);
                }
                if (markerToMove.polyline.length > 10) { //LINE LENGTH
                    markerToMove.polyline[0].remove();
                    markerToMove.polyline.shift();
                }

                markerToMove.setOpacity(0.5);
                markerToMove.setLatLng(newLatLng);
            }
        }
    }
    ////console.log(listMarkersBus);
    removeUselessMarkers(data);
}

var listMarkerToDelete = [];
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
            if (listMarkersBus[x].toDelete > 1) {
                listMarkerToDelete.push(listMarkersBus[x].idAutobus); //Push the position of the marker in the list to delete
            } else {
                listMarkersBus[x].toDelete += 1;
                ////console.log(listMarkersBus[x].toDelete, listMarkersBus[x].idAutobus);
            }
        }
    }
    //For each id in the listMarkerToDelete
    for (q in listMarkerToDelete) { //ex: listMarkerToDelete[q] == 11560, it's the id of the markerToDelete
        for (z in listMarkersBus) { //find the marker to delete
            if (listMarkersBus[z].idAutobus == listMarkerToDelete[q]) {
                console.log("Removed Marker", listMarkersBus[z])
                for (y in listMarkersBus[z].polyline) {
                    listMarkersBus[z].polyline[y].remove();
                }
                listMarkersBus[z].remove();
                listMarkersBus.splice(z, 1);
            }
        }
    }
    ////console.log(listMarkerToDelete);
    listMarkerToDelete = [];
}

function removePolyline() {
    for (x in listMarkersBus) {
        for (y in listMarkersBus[x].polyline) {
            listMarkersBus[x].polyline[y].remove();
        }
    }
}

function removeMarkers() {
    for (x in listMarkersBus) {
        for (y in listMarkersBus[x].polyline) {
            listMarkersBus[x].polyline[y].remove();
        }
        listMarkersBus[x].remove();
    }
    listMarkersBus = [];
}

getBusPositionFromServer();
setInterval(getBusPositionFromServer,1500);