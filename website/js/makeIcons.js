//ICONS----------------------------
//Code type Service
var IconSize = [32, 32]; // size of the icon
var IconFolder = "../icons/"

var busGlobalIconSize = [32, 32]; // size of the icon
var busGlobalIconAnchor = [16, 16]; // point of the icon which will correspond to marker's location
var busGlobalPopupAnchor = [0, -16]; // point from which the popup should open relative to the iconAnchor

var arretGlobalIconSize = [12.12]; // size of the icon
var arretGlobalIconAnchor = [6, 6]; // point from which the popup should open relative to the iconAnchor
var arretGlobalPopupAnchor = [0, -6]; // point from which the popup should open relative to the iconAnchor

//"codeTypeService": 0, 3
var blue0 = L.icon({
    iconUrl: IconFolder + '0-1.png',

    iconSize:     busGlobalIconSize,
    iconAnchor:   busGlobalIconAnchor,
    popupAnchor:  busGlobalPopupAnchor
});
var blue1 = L.icon({
    iconUrl: IconFolder + '1-1.png',

    iconSize:     busGlobalIconSize,
    iconAnchor:   busGlobalIconAnchor,
    popupAnchor:  busGlobalPopupAnchor
});
var blue2 = L.icon({
    iconUrl: IconFolder + '2-1.png',

    iconSize:     busGlobalIconSize,
    iconAnchor:   busGlobalIconAnchor,
    popupAnchor:  busGlobalPopupAnchor
});
var blue3 = L.icon({
    iconUrl: IconFolder + '3-1.png',

    iconSize:     busGlobalIconSize,
    iconAnchor:   busGlobalIconAnchor,
    popupAnchor:  busGlobalPopupAnchor
});
var blue = [blue0,blue1,blue2,blue3];

//"codeTypeService": 1
var red0 = L.icon({
    iconUrl: IconFolder + '0-express.png',

    iconSize:     busGlobalIconSize,
    iconAnchor:   busGlobalIconAnchor,
    popupAnchor:  busGlobalPopupAnchor
});
var red1 = L.icon({
    iconUrl: IconFolder + '1-express.png',

    iconSize:     busGlobalIconSize,
    iconAnchor:   busGlobalIconAnchor,
    popupAnchor:  busGlobalPopupAnchor
});
var red2 = L.icon({
    iconUrl: IconFolder + '2-express.png',

    iconSize:     busGlobalIconSize,
    iconAnchor:   busGlobalIconAnchor,
    popupAnchor:  busGlobalPopupAnchor
});
var red3 = L.icon({
    iconUrl: IconFolder + '3-express.png',

    iconSize:     busGlobalIconSize,
    iconAnchor:   busGlobalIconAnchor,
    popupAnchor:  busGlobalPopupAnchor
});
var red = [red0,red1,red2,red3];

//"codeTypeService": 4
var green0 = L.icon({
    iconUrl: IconFolder + '0-800.png',

    iconSize:     busGlobalIconSize,
    iconAnchor:   busGlobalIconAnchor,
    popupAnchor:  busGlobalPopupAnchor
});
var green1 = L.icon({
    iconUrl: IconFolder + '1-800.png',

    iconSize:     busGlobalIconSize,
    iconAnchor:   busGlobalIconAnchor,
    popupAnchor:  busGlobalPopupAnchor
});
var green2 = L.icon({
    iconUrl: IconFolder + '2-800.png',

    iconSize:     busGlobalIconSize,
    iconAnchor:   busGlobalIconAnchor,
    popupAnchor:  busGlobalPopupAnchor
});
var green3 = L.icon({
    iconUrl: IconFolder + '3-800.png',

    iconSize:     busGlobalIconSize,
    iconAnchor:   busGlobalIconAnchor,
    popupAnchor:  busGlobalPopupAnchor
});
var green = [green0,green1,green2,green3];

//"codeTypeService": 6
var black0 = L.icon({
    iconUrl: IconFolder + '0-night.png',

    iconSize:     busGlobalIconSize,
    iconAnchor:   busGlobalIconAnchor,
    popupAnchor:  busGlobalPopupAnchor
});
var black1 = L.icon({
    iconUrl: IconFolder + '1-night.png',

    iconSize:     busGlobalIconSize,
    iconAnchor:   busGlobalIconAnchor,
    popupAnchor:  busGlobalPopupAnchor
});
var black2 = L.icon({
    iconUrl: IconFolder + '2-night.png',

    iconSize:     busGlobalIconSize,
    iconAnchor:   busGlobalIconAnchor,
    popupAnchor:  busGlobalPopupAnchor
});
var black3 = L.icon({
    iconUrl: IconFolder + '3-night.png',

    iconSize:     busGlobalIconSize,
    iconAnchor:   busGlobalIconAnchor,
    popupAnchor:  busGlobalPopupAnchor
});
var black = [black0,black1,black2,black3];

//Arrets---------------------------------
var iconArretBlue = L.icon({
    iconUrl: IconFolder + 'stop0.png',
    
    iconSize:     arretGlobalIconSize,
    iconAnchor:   arretGlobalIconAnchor,
    popupAnchor:  arretGlobalPopupAnchor
});

var iconArretRed = L.icon({
    iconUrl: IconFolder + 'stop1.png',
    
    iconSize:     arretGlobalIconSize,
    iconAnchor:   arretGlobalIconAnchor,
    popupAnchor:  arretGlobalPopupAnchor
});

var iconArretGreen = L.icon({
    iconUrl: IconFolder + 'stop4.png',
    
    iconSize:     arretGlobalIconSize,
    iconAnchor:   arretGlobalIconAnchor,
    popupAnchor:  arretGlobalPopupAnchor
});

var iconArretBlack = L.icon({
    iconUrl: IconFolder + 'stop6.png',
    
    iconSize:     arretGlobalIconSize,
    iconAnchor:   arretGlobalIconAnchor,
    popupAnchor:  arretGlobalPopupAnchor
});

var iconArret = {
    0: iconArretBlue,
    3: iconArretBlue,
    1: iconArretRed,
    4: iconArretGreen,
    6: iconArretBlack
}

var Icons = {
    0: blue,
    3: blue,
    1: red,
    4: green,
    6: black
}

var polylineColors = {
    0: "#1C306F",
    3: "#1C306F",
    1: "#D84526",
    4: "#568C00",
    6: "#515151"
}
//ICONS----------------------------