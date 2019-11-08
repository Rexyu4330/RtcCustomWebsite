mymap.addEventListener('popupopen', function(event) {
    ////console.log(event);
    if (event.popup._source.markerType === 'arret') {
        getWaitingTime(event.popup);
    }
});

document.getElementById("removeRoute").addEventListener("click", hideRoute);
document.getElementById("getBusPositionFromServer").addEventListener("click", getBusPositionFromServer);
document.getElementById("stopFollowing").addEventListener("click", stopFollowing);


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