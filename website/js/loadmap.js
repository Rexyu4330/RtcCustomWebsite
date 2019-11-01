var mymap = L.map('mapid').setView([46.83, -71.31], 12);

//TILE LAYER----------------------------
var OpenMapSurfer_Roads = L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> | Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
});
var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
var OpenStreetMap_DE = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
});
var Esri_WorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
var Esri_NatGeoWorldMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
});
var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
});
var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
});
var CartoDB_Voyager = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
});


function getCookieTiles() {
    let cookieTiles = Cookies.get('tiles');
    if (cookieTiles == undefined) {
        OpenMapSurfer_Roads.addTo(mymap);
        active = OpenMapSurfer_Roads;
        Cookies.set('tiles', 'Roads', { expires: 7 });
    } else {
        switch (cookieTiles) {
            case "Roads":
                console.log("Roads");
                document.getElementById("mySelect").value = "Roads";
                OpenMapSurfer_Roads.addTo(mymap);
                active = OpenMapSurfer_Roads;
                break;
            case "HOT":
                console.log("HOT");
                document.getElementById("mySelect").value = "HOT";
                OpenStreetMap_HOT.addTo(mymap);
                active = OpenStreetMap_HOT;
                break;
            case "Mapnik":
                console.log("Mapnik");
                document.getElementById("mySelect").value = "Mapnik";
                OpenStreetMap_Mapnik.addTo(mymap);
                active = OpenStreetMap_Mapnik;
                break;
            case "DE":
                console.log("DE");
                document.getElementById("mySelect").value = "DE";
                OpenStreetMap_DE.addTo(mymap);
                active = OpenStreetMap_DE;
                break;
            case "TonerLite":
                console.log("TonerLite");
                document.getElementById("mySelect").value = "TonerLite";
                Stamen_TonerLite.addTo(mymap);
                active = Stamen_TonerLite;
                break;
            case "WorldStreetMap":
                console.log("WorldStreetMap");
                document.getElementById("mySelect").value = "WorldStreetMap";
                Esri_WorldStreetMap.addTo(mymap);
                active = Esri_WorldStreetMap;
                break;
            case "WorldImagery":
                console.log("WorldImagery");
                document.getElementById("mySelect").value = "WorldImagery";
                Esri_WorldImagery.addTo(mymap);
                active = Esri_WorldImagery;
                break;
            case "NatGeoWorldMap":
                console.log("NatGeoWorldMap");
                document.getElementById("mySelect").value = "NatGeoWorldMap";
                Esri_NatGeoWorldMap.addTo(mymap);
                active = Esri_NatGeoWorldMap;
                break;
            case "Positron":
                console.log("Positron");
                document.getElementById("mySelect").value = "Positron";
                CartoDB_Positron.addTo(mymap);
                active = CartoDB_Positron;
                break;
            case "DarkMatter":
                console.log("DarkMatter");
                document.getElementById("mySelect").value = "DarkMatter";
                CartoDB_DarkMatter.addTo(mymap);
                active = CartoDB_DarkMatter;
                break;
            case "Voyager":
                console.log("Voyager");
                document.getElementById("mySelect").value = "Voyager";
                CartoDB_Voyager.addTo(mymap);
                active = CartoDB_Voyager;
                break;
        }
    }
}

getCookieTiles()

function changeMapTiles() {
    switch (document.getElementById("mySelect").value) {
        case "Roads":
            console.log("Roads");
            active.remove();
            OpenMapSurfer_Roads.addTo(mymap);
            active = OpenMapSurfer_Roads;
            Cookies.set('tiles', 'Roads', { expires: 7 });
            break;
        case "HOT":
            console.log("HOT");
            active.remove();
            OpenStreetMap_HOT.addTo(mymap);
            active = OpenStreetMap_HOT;
            Cookies.set('tiles', 'HOT', { expires: 7 });
            break;
        case "Mapnik":
            console.log("Mapnik");
            active.remove();
            OpenStreetMap_Mapnik.addTo(mymap);
            active = OpenStreetMap_Mapnik;
            Cookies.set('tiles', 'Mapnik', { expires: 7 });
            break;
        case "DE":
            console.log("DE");
            active.remove();
            OpenStreetMap_DE.addTo(mymap);
            active = OpenStreetMap_DE;
            Cookies.set('tiles', 'DE', { expires: 7 });
            break;
        case "TonerLite":
            console.log("TonerLite");
            active.remove();
            Stamen_TonerLite.addTo(mymap);
            active = Stamen_TonerLite;
            Cookies.set('tiles', 'TonerLite', { expires: 7 });
            break;
        case "WorldStreetMap":
            console.log("WorldStreetMap");
            active.remove();
            Esri_WorldStreetMap.addTo(mymap);
            active = Esri_WorldStreetMap;
            Cookies.set('tiles', 'WorldStreetMap', { expires: 7 });
            break;
        case "WorldImagery":
            console.log("WorldImagery");
            active.remove();
            Esri_WorldImagery.addTo(mymap);
            active = Esri_WorldImagery;
            Cookies.set('tiles', 'WorldImagery', { expires: 7 });
            break;
        case "NatGeoWorldMap":
            console.log("NatGeoWorldMap");
            active.remove();
            Esri_NatGeoWorldMap.addTo(mymap);
            active = Esri_NatGeoWorldMap;
            Cookies.set('tiles', 'NatGeoWorldMap', { expires: 7 });
            break;
        case "Positron":
            console.log("Positron");
            active.remove();
            CartoDB_Positron.addTo(mymap);
            active = CartoDB_Positron;
            Cookies.set('tiles', 'Positron', { expires: 7 });
            break;
        case "DarkMatter":
            console.log("DarkMatter");
            active.remove();
            CartoDB_DarkMatter.addTo(mymap);
            active = CartoDB_DarkMatter;
            Cookies.set('tiles', 'DarkMatter', { expires: 7 });
            break;
        case "Voyager":
            console.log("Voyager");
            active.remove();
            CartoDB_Voyager.addTo(mymap);
            active = CartoDB_Voyager;
            Cookies.set('tiles', 'Voyager', { expires: 7 });
            break;
    }
}
//TILE LAYER----------------------------