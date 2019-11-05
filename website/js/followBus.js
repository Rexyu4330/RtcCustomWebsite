var follow = false;
function followBus(id) {
    let markerToFollow = findMarkerById(id)
    let latlng = markerToFollow.getLatLng();
    mymap.setView(latlng);
    
    if (follow) {
        setTimeout(() => {followBus(id)}, 500);
    }
}