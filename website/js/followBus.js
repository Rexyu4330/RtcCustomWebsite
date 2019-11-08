var follow = false;
var markerToFollow = undefined;

function followBus(id) {
    follow = true;
    markerToFollow = findMarkerById(id)
    mymap.dragging.disable();
    mymap.scrollWheelZoom.disable();
    document.getElementById('stopFollowing').style = 'display: block';
}

function stopFollowing() {
    follow = false;
    mymap.dragging.enable();
    mymap.scrollWheelZoom.enable();
    document.getElementById('stopFollowing').style = 'display: none';
}