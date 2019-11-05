mymap.addEventListener('popupopen', function(event) {
    ////console.log(event);
    if (event.popup._source.markerType === 'arret') {
        getWaitingTime(event.popup, event.popup.getContent());
    } else if (event.popup._source.markerType === 'bus') { //Allow bus following (to change)
        follow = true;
    }
});

mymap.addEventListener('popupclose', function(event) {
    ////console.log(event);
    if (event.popup._source.markerType === 'bus') {  //Don't allow bus following (to change)
        follow = false;
    }
});

document.getElementById("removeRoute").addEventListener("click", hideRoute);
document.getElementById("moveMarkers").addEventListener("click", getBusPositionFromServer);
document.getElementById("deleteLines").addEventListener("click", removePolyline);
document.getElementById("deleteMarkers").addEventListener("click", removeMarkers);
document.getElementById("test").addEventListener("click", test);


document.getElementById("checkboxBus").addEventListener("click", checkboxBus);
document.getElementById("checkboxExpress").addEventListener("click", checkboxExpress);
document.getElementById("checkboxMetroBus").addEventListener("click", checkboxMetroBus);
document.getElementById("checkboxNightBus").addEventListener("click", checkboxNightBus);
document.getElementById("checkboxAutre").addEventListener("click", checkboxAutre);

function checkboxBus() {
    if (document.getElementById("checkboxBus").checked) {
        for (x in document.querySelectorAll("#Type0>input")) {
            document.querySelectorAll("#Type0>input")[x].checked = true;
        }
    } else {
        for (x in document.querySelectorAll("#Type0>input")) {
            document.querySelectorAll("#Type0>input")[x].checked = false;
        }
    }
    reload();
}
function checkboxExpress() {
    if (document.getElementById("checkboxExpress").checked) {
        for (x in document.querySelectorAll("#Type1>input")) {
            document.querySelectorAll("#Type1>input")[x].checked = true;
        }
    } else {
        for (x in document.querySelectorAll("#Type1>input")) {
            document.querySelectorAll("#Type1>input")[x].checked = false;
        }
    }
    reload();
}
function checkboxMetroBus() {
    if (document.getElementById("checkboxMetroBus").checked) {
        for (x in document.querySelectorAll("#Type4>input")) {
            document.querySelectorAll("#Type4>input")[x].checked = true;
        }
    } else {
        for (x in document.querySelectorAll("#Type4>input")) {
            document.querySelectorAll("#Type4>input")[x].checked = false;
        }
    }
    reload();
}
function checkboxNightBus() {
    if (document.getElementById("checkboxNightBus").checked) {
        for (x in document.querySelectorAll("#Type6>input")) {
            document.querySelectorAll("#Type6>input")[x].checked = true;
        }
    } else {
        for (x in document.querySelectorAll("#Type6>input")) {
            document.querySelectorAll("#Type6>input")[x].checked = false;
        }
    }
    reload();
}
function checkboxAutre() {
    if (document.getElementById("checkboxAutre").checked) {
        for (x in document.querySelectorAll("#Type2>input")) {
            document.querySelectorAll("#Type2>input")[x].checked = true;
        }
    } else {
        for (x in document.querySelectorAll("#Type2>input")) {
            document.querySelectorAll("#Type2>input")[x].checked = false;
        }
    }
    reload();
}