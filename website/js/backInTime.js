var backInTimeLayout = false;
var currentMapLayer = L.layerGroup();

var listBackInTimeLayerGroup = [];
var displayedTimeFrame = L.layerGroup();

function makeBackInTime() {
    var backInTimeLayer = L.layerGroup();
    mymap.eachLayer((layer) => {
        if (layer.markerType == 'bus') {
            let a = L.marker(layer.getLatLng(), layer.options);
            /*a.bindPopup(`${data[x].bus} ${busInformations.description} vers ${descriptionDirection}<br>
                ID: ${bus.idAutobus}<br>
                <br>
                Direction Principale: ${busInformations.descriptionDirectionPrincipale}<br>
                Direction de Retour: ${busInformations.descriptionDirectionRetour}<br>
                <a onclick="showRoute(${data[x].bus},${data[x].dir},${busInformations.codeTypeService})" href="#">Montrer la route</a><br>
                <a onclick="followBus(${bus.idAutobus})" href="#">Suivre la bus</a>`);*/
            a.idAutobus = layer.idAutobus;
            a.busNbr = layer.busNbr;
            a.busDir = layer.busDir;
            a.codeType = layer.codeType;
            a.markerType = 'bus';
            
            backInTimeLayer.addLayer(a);
        } else if (layer.markerType == 'arret') {

        } else if (layer.markerType == 'polyline') {
            let b = L.polyline(layer.getLatLngs(), layer.options);
            b.markerType = 'polyline';
            
            backInTimeLayer.addLayer(b);
        }
    })
    listBackInTimeLayerGroup.push(backInTimeLayer);
    backInTimeLayer = L.layerGroup();
}

function displayTimeFrame(value) {
    displayedTimeFrame.remove();
    displayedTimeFrame = listBackInTimeLayerGroup[value];
    displayedTimeFrame.addTo(mymap);
}

function enterBackInTime() {
    //Display--------
    backInTimeLayout = true;
    document.getElementById('layers').style = 'display: none';
    document.getElementById('backInTime').style = 'display: block';
    document.getElementById('backInTime').innerHTML = `<input type="range" min="0" max="${listBackInTimeLayerGroup.length-1}" step="1" value="0" class="slider" id="backInTimeRange" oninput="displayTimeFrame(this.value)">`;
    mymap.eachLayer((layer) => {
        if (layer.markerType == 'bus' || layer.markerType == 'arret' || layer.markerType == 'polyline' ) {
            currentMapLayer.addLayer(layer);
            layer.remove();
        }
    })
    //Display--------
    displayTimeFrame(0);
}

function leaveBackInTime() {
    displayedTimeFrame.remove();
    //Display--------
    backInTimeLayout = false;
    document.getElementById('layers').style = 'display: block';
    document.getElementById('backInTime').style = 'display: none';
    currentMapLayer.addTo(mymap);
    currentMapLayer = L.layerGroup();
    //Display--------
}

