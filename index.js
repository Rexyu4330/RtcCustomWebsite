const fs = require('fs');
const bodyParser = require('body-parser');
const axios = require('axios');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(express.static("website"));


var listChecked = ["800,2","800,3"];
//Get Bus List
function getBusList() {
    /*axios.get("https://wsmobile.rtcquebec.ca/api/v3/horaire/ListeParcours?source=sitemobile").then(response => {
        routes = response.data;
        sendBusListJson(routes);
        console.log("SET")
        findCheckedBus();
        setupBus();
    }).catch(error => {});*/
    routes = [
                {
                    "noParcours": "1",
                    "description": "Station Belvédère",
                    "codeDirectionPrincipale": "0",
                    "descriptionDirectionPrincipale": "Station Belvédère",
                    "codeDirectionRetour": "1",
                    "descriptionDirectionRetour": "Gare fluviale / Cap-Blanc",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "3",
                    "description": "Grand Théâtre",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Grand Théâtre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "41e Rue Est / Jean-Talon Ouest",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "4",
                    "description": "Place Jacques-Cartier",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Place Jacques-Cartier",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Maizerets",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "9",
                    "description": "Place Jacques-Cartier",
                    "codeDirectionPrincipale": "3",
                    "descriptionDirectionPrincipale": "Parc Colbert Est",
                    "codeDirectionRetour": "2",
                    "descriptionDirectionRetour": "Place Jacques-Cartier",
                    "codeTypeService": 3,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "11",
                    "description": "Gare fluviale",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Gare fluviale",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Pointe-de-Sainte-Foy",
                    "codeTypeService": 0,
                    "accessible": true,
                    "jours": "1111111"
                },
                {
                    "noParcours": "13",
                    "description": "Terminus Quatre-Bourgeois",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Saint-Louis/Sainte-Foy Centre/du Versant-Nord",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Du Versant-Nord/Sainte-Foy Centre/Saint-Louis",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "3A",
                    "description": "Saint-Jean-Eudes",
                    "codeDirectionPrincipale": "0",
                    "descriptionDirectionPrincipale": "Saint-Jean-Eudes",
                    "codeDirectionRetour": "1",
                    "descriptionDirectionRetour": "Des Lilas Ouest / Duval",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "14",
                    "description": "Pointe-de-Sainte-Foy",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Pointe-de-Sainte-Foy",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Cap-Rouge",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "15",
                    "description": "Pointe-de-Sainte-Foy",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Pointe-de-Sainte-Foy",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Cap-Rouge",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "16",
                    "description": "Sainte-Foy Centre",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Sillery / U. Laval / Sainte-Foy Centre",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "U. Laval / Sillery / Sainte-Foy Centre",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "18",
                    "description": "Gare du Palais",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Gare du Palais",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Université Laval",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "19",
                    "description": "Grand Théâtre",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Grand Théâtre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Limoilou",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "22",
                    "description": "Terminus Les Saules",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Sainte-Foy Centre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Terminus Les Saules",
                    "codeTypeService": 3,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "25",
                    "description": "Gare du Palais",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Place D'Youville / Gare du Palais",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Pointe-de-Sainte-Foy",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "28",
                    "description": "Colline Parlementaire",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Colline Parlementaire",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "51e Rue Est",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "29",
                    "description": "Place Jacques-Cartier",
                    "codeDirectionPrincipale": "3",
                    "descriptionDirectionPrincipale": "Parc Colbert Ouest",
                    "codeDirectionRetour": "2",
                    "descriptionDirectionRetour": "Place Jacques-Cartier",
                    "codeTypeService": 3,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "31",
                    "description": "Terminus du Zoo",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Terminus du Zoo",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Lac-Saint-Charles",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "32",
                    "description": "Terminus du Zoo",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Terminus du Zoo",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Lac Clément",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "33",
                    "description": "Terminus du Zoo",
                    "codeDirectionPrincipale": "0",
                    "descriptionDirectionPrincipale": "Parc industriel Charlesbourg",
                    "codeDirectionRetour": "1",
                    "descriptionDirectionRetour": "Terminus du Zoo",
                    "codeTypeService": 3,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "34",
                    "description": "Terminus du Zoo",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Terminus du Zoo",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Des Laurentides",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "36",
                    "description": "Place Jacques-Cartier",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Place Jacques-Cartier",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Station des Roses",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "39",
                    "description": "41e Rue Est",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "41e Rue Est",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Terminus du Zoo",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "44",
                    "description": "Terminus Beauport",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Terminus Beauport",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Sainte-Thérèse-de-Lisieux",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "50",
                    "description": "Terminus La Cimenterie",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "T. C.-Montmorency",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Terminus La Cimenterie",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "51",
                    "description": "Terminus Beauport",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Ste-Anne",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "T. Beauport",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "52",
                    "description": "Terminus Charlesbourg",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Du Bourg-Royal",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Terminus Charlesbourg",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "53",
                    "description": "Terminus Beauport",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "T. C.-Montmorency",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "T. Beauport",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "54",
                    "description": "Terminus Beauport",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Terminus Beauport / Vieux-Québec",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Sainte-Thérèse-de-Lisieux",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "55",
                    "description": "Terminus Beauport",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Terminus Beauport",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Sainte-Thérèse-de-Lisieux",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "57",
                    "description": "Terminus Beauport",
                    "codeDirectionPrincipale": "0",
                    "descriptionDirectionPrincipale": "Sainte-Thérèse-de-Lisieux",
                    "codeDirectionRetour": "1",
                    "descriptionDirectionRetour": "Terminus Beauport",
                    "codeTypeService": 3,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "58",
                    "description": "Terminus Beauport",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Terminus Beauport",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Sainte-Thérèse-de-Lisieux",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "59",
                    "description": "Terminus Charlesbourg",
                    "codeDirectionPrincipale": "3",
                    "descriptionDirectionPrincipale": "Terminus Charlesbourg",
                    "codeDirectionRetour": "2",
                    "descriptionDirectionRetour": "Sainte-Thérèse-de-Lisieux",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "61",
                    "description": "41e Rue Est",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "41e Rue Est",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Lebourgneuf",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "64",
                    "description": "Place Jacques-Cartier",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Place Jacques-Cartier",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Lebourgneuf",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "65",
                    "description": "Place Jacques-Cartier",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Place  J.-Cartier / colline Parlementaire",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Lebourgneuf",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "70",
                    "description": "Sainte-Foy Centre",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Sainte-Foy Centre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Val-Bélair",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "72",
                    "description": "Terminus Charlesbourg",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Terminus Charlesbourg",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Loretteville",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "74",
                    "description": "Place Jacques-Cartier",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Place Jacques-Cartier",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Val-Bélair",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "75",
                    "description": "Sainte-Foy Centre",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Sainte-Foy Centre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Val-Bélair",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "76",
                    "description": "Aéroport Jean-Lesage",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Gare de train de Sainte-Foy",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Aéroport international Jean-Lesage",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "77",
                    "description": "Terminus Les Saules",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Terminus Les Saules",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Val-Bélair",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "79",
                    "description": "Belvédère",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Terminus Les Saules / Belvédère",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "L'Ancienne-Lorette",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "80",
                    "description": "Place Jacques-Cartier",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Place Jacques-Cartier",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Aéroport international Jean-Lesage",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "81",
                    "description": "Terminus Les Saules",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Terminus Les Saules",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Terminus du Zoo",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "82",
                    "description": "Place Jacques-Cartier",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Place Jacques-Cartier",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Lac-Saint-Charles",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "84",
                    "description": "Place Jacques-Cartier",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Place Jacques-Cartier",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Val-Bélair",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "85",
                    "description": "Place Jacques-Cartier",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Place Jacques-Cartier",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Lebourgneuf",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "86",
                    "description": "Place Jacques-Cartier",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Place J.-Cartier / colline Parlementaire",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Terminus Les Saules",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "88",
                    "description": "Terminus Les Saules",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Sainte-Foy Centre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Terminus Les Saules",
                    "codeTypeService": 3,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "92",
                    "description": "Sainte-Foy Centre",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Cégep Garneau",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Saint-Augustin",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "93",
                    "description": "Sainte-Foy Centre",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Sainte-Foy Centre/Univ.Laval/Cégep Garneau",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Champigny",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "94",
                    "description": "Cégep Garneau",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Cégep Garneau / Place Jacques-Cartier",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Saint-Augustin",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "107",
                    "description": "Gare du Palais",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Gare du Palais",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Pointe-de-Sainte-Foy",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "13A",
                    "description": "École secondaire De Rochebelle",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "École secondaire De Rochebelle",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "De Terrebonne / de la Suète",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "14A",
                    "description": "Collège des Compagnons",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Collège des Compagnons",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "De la Rivière / du Domaine",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "15A",
                    "description": "Collège des Compagnons",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Collège des Compagnons",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "De la Prom.-des-Soeurs / J.-C.-Cantin",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "133",
                    "description": "Vieux-Québec",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Vieux-Québec",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Terminus du Zoo",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "136",
                    "description": "Colline Parlementaire",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Colline Parlementaire",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Montagne-des-Roches",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "1111111"
                },
                {
                    "noParcours": "54A",
                    "description": "Académie Sainte-Marie, école sec. François Bourrin",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Académie Sainte-Marie",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Saint-Honoré / Sainte-Thérèse",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "55A",
                    "description": "Académie Sainte-Marie, école sec. François Bourrin",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Académie Sainte-Marie",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "G.-Viger / des Sablonnières",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "79A",
                    "description": "École sec. Polyvalente L'Ancienne-Lorette",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "École sec. Polyvalente L'Ancienne-Lorette",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Chauveau Ouest / Borduas",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "80A",
                    "description": "École sec. Polyvalente L'Ancienne-Lorette",
                    "codeDirectionPrincipale": "0",
                    "descriptionDirectionPrincipale": "École sec. Polyvalente L'Ancienne-Lorette",
                    "codeDirectionRetour": "1",
                    "descriptionDirectionRetour": "Terminus Les Saules",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "82A",
                    "description": "Saint-Jean-Eudes",
                    "codeDirectionPrincipale": "0",
                    "descriptionDirectionPrincipale": "Saint-Jean-Eudes",
                    "codeDirectionRetour": "1",
                    "descriptionDirectionRetour": "Samson / Baker",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "185",
                    "description": "Station Belvédère",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Station Belvédère / Sainte-Foy Centre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Neufchâtel",
                    "codeTypeService": 0,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "92A",
                    "description": "Campus Notre-Dame-de-Foy",
                    "codeDirectionPrincipale": "3",
                    "descriptionDirectionPrincipale": "Campus Notre-Dame-de-Foy",
                    "codeDirectionRetour": "2",
                    "descriptionDirectionRetour": "Terminus Charlesbourg",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "13B",
                    "description": "École secondaire De Rochebelle",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "École secondaire De Rochebelle",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Des Sapins / du Versant-Nord",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "214",
                    "description": "Gare du Palais",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Gare du Palais",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Cap-Rouge",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "215",
                    "description": "Gare du Palais",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Gare du Palais",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Cap-Rouge",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "15B",
                    "description": "Collège des Compagnons",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Collège des Compagnons",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "E.-Blondin / de la Prom-des-Soeurs",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "230",
                    "description": "Colline Parlementaire",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Colline Parlementaire",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Terminus du Zoo",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "236",
                    "description": "Colline Parlementaire",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Colline Parlementaire",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Station des Roses",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "238",
                    "description": "Colline Parlementaire",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Colline Parlementaire",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Guillaume-Mathieu",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "239",
                    "description": "Colline Parlementaire",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Colline Parlementaire",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Terminus du Zoo",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "250",
                    "description": "Colline Parlementaire",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Colline Parlementaire",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "T. C.-Montmorency",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "251",
                    "description": "Colline Parlementaire",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Grand Théâtre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Courville",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "253",
                    "description": "Colline Parlementaire",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Grand Théâtre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "T. La Cimenterie",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "254",
                    "description": "Colline Parlementaire",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Colline Parlementaire",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Sainte-Thérèse-de-Lisieux",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "255",
                    "description": "Colline Parlementaire",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Colline Parlementaire",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Sainte-Thérèse-de-Lisieux",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "272",
                    "description": "Colline Parlementaire",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Colline Parlementaire",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Loretteville",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "273",
                    "description": "Colline Parlementaire",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Colline Parlementaire",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Loretteville Sud",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "274",
                    "description": "Colline Parlementaire",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Colline Parlementaire",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Neufchâtel",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "277",
                    "description": "Colline Parlementaire",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Colline Parlementaire",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Val-Bélair",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "279",
                    "description": "Colline Parlementaire",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Colline Parlementaire",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "L'Ancienne-Lorette",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "79B",
                    "description": "École sec. Polyvalente L'Ancienne-Lorette",
                    "codeDirectionPrincipale": "0",
                    "descriptionDirectionPrincipale": "École sec. Polyvalente L'Ancienne-Lorette",
                    "codeDirectionRetour": "1",
                    "descriptionDirectionRetour": "Terminus Les Saules",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "280",
                    "description": "Colline Parlementaire",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Place Jacques-Cartier / colline Parlementaire",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Terminus Les Saules /  L'Ancienne-Lorette",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "281",
                    "description": "Colline Parlementaire",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Colline Parlementaire",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Neufchâtel",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "282",
                    "description": "Colline Parlementaire",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Colline Parlementaire",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Lac-Saint-Charles",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "283",
                    "description": "Gare du Palais",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Gare du Palais",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Champigny",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "284",
                    "description": "Colline Parlementaire",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Colline Parlementaire",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Loretteville",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "289",
                    "description": "Colline Parlementaire",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Colline Parlementaire",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Saint-Émile",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "290",
                    "description": "Vieux-Québec",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Vieux-Québec",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Loretteville",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "292",
                    "description": "Place Jacques-Cartier",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Place Jacques-Cartier",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Saint-Augustin",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "315",
                    "description": "Univ.Laval/Cégep Garneau",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Univ.Laval/Cégep Garneau",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Cap-Rouge",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "330",
                    "description": "Univ.Laval/Cégep Garneau",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Univ.Laval/Cégep Garneau",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Terminus Charlesbourg",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "331",
                    "description": "Pointe-de-Sainte-Foy",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Pointe-de-Sainte-Foy",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Terminus du Zoo",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "332",
                    "description": "Sainte-Foy Centre",
                    "codeDirectionPrincipale": "0",
                    "descriptionDirectionPrincipale": "Saint-Rodrigue",
                    "codeDirectionRetour": "1",
                    "descriptionDirectionRetour": "Sainte-Foy Centre",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "336",
                    "description": "Univ.Laval/Cégep Garneau",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Univ.Laval/Cégep Garneau",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Station des Roses",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "337",
                    "description": "Univ.Laval/Cégep Garneau",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Univ.Laval/Cégep Garneau",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Terminus du Zoo",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "338",
                    "description": "Univ.Laval/Cégep Garneau",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Univ.Laval/Cégep Garneau",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Montagne-des-Roches",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "350",
                    "description": "Univ.Laval/Cégep Garneau",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Univ.Laval/Cégep Garneau",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "T. C.-Montmorency",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "354",
                    "description": "Pointe-de-Sainte-Foy",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Pointe-de-Sainte-Foy",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Sainte-Thérèse-de-Lisieux",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "355",
                    "description": "Univ.Laval/Cégep Garneau",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Univ.Laval/Cégep Garneau",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Sainte-Thérèse-de-Lisieux",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "358",
                    "description": "Univ.Laval/Cégep Garneau",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Univ.Laval/Cégep Garneau",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Sainte-Thérèse-de-Lisieux",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "372",
                    "description": "Univ.Laval/Cégep Garneau",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Univ.Laval/Cégep Garneau",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Lac-Saint-Charles",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "374",
                    "description": "Univ.Laval/Cégep Garneau",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Univ.Laval/Cégep Garneau",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Neufchâtel",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "377",
                    "description": "Univ.Laval/Cégep Garneau",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Univ.Laval/Cégep Garneau",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Val-Bélair",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "380",
                    "description": "Univ.Laval/Cégep Garneau",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Univ.Laval/Cégep Garneau",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "L'Ancienne-Lorette",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "381",
                    "description": "Univ.Laval/Cégep Garneau",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Univ.Laval/Cégep Garneau",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Neufchâtel",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "382",
                    "description": "Univ.Laval/Cégep Garneau",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Univ.Laval/Cégep Garneau",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Saint-Émile",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "384",
                    "description": "Univ.Laval/Cégep Garneau",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Univ.Laval/Cégep Garneau",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Loretteville",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "391",
                    "description": "Pointe-de-Sainte-Foy",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Pointe-de-Sainte-Foy",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Terminus Les Saules",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "11G",
                    "description": "Jésus-Marie, St-Jean-Berchmans, Pères-Maristes",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": null,
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "C.-Laforte / McCartney",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "14G",
                    "description": "Jésus-Marie, St-Jean-Berchmans, Pères-Maristes",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Collège Jésus-Marie de Sillery",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Des Carougeois / J.-C.-Cantin",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "25G",
                    "description": "Jésus-Marie, St-Jean-Berchmans, Pères-Maristes",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": null,
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Terminus de Marly",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "54G",
                    "description": "École secondaire de la Seigneurie",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "École secondaire de la Seigneurie",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Saint-Honoré / Sainte-Thérèse",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "55G",
                    "description": "École secondaire de la Seigneurie",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "École secondaire de la Seigneurie",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "G.-Viger / des Sablonnières",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "79G",
                    "description": "École secondaire La Camaradière",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "École secondaire La Camaradière",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Saint-Jean-Baptiste / Michelet",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "80G",
                    "description": "École secondaire La Camaradière",
                    "codeDirectionPrincipale": "0",
                    "descriptionDirectionPrincipale": "École secondaire La Camaradière",
                    "codeDirectionRetour": "1",
                    "descriptionDirectionRetour": "O'Neil / W.-Hamel",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "84G",
                    "description": "École secondaire La Camaradière",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "École secondaire La Camaradière",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Du Costebelle / de Pertuis",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "86G",
                    "description": "École secondaire La Camaradière",
                    "codeDirectionPrincipale": "0",
                    "descriptionDirectionPrincipale": "École secondaire La Camaradière",
                    "codeDirectionRetour": "1",
                    "descriptionDirectionRetour": "Père-Lelièvre / Godin",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "530",
                    "description": "Sainte-Foy Centre",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Sainte-Foy Centre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Station des Roses",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "536",
                    "description": "Sainte-Foy Centre",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Sainte-Foy Centre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Sainte-Thérèse-de-Lisieux",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "537",
                    "description": "Sainte-Foy Centre",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Sainte-Foy Centre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Terminus du Zoo",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "538",
                    "description": "Sainte-Foy Centre",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Sainte-Foy Centre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Du Bourg-Royal",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "550",
                    "description": "Sainte-Foy Centre",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Sainte-Foy Centre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "T. C.-Montmorency",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "555",
                    "description": "Sainte-Foy Centre",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Sainte-Foy Centre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Sainte-Thérèse-de-Lisieux",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "55H",
                    "description": "École secondaire de la Seigneurie",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "École secondaire de la Seigneurie",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Saint-Michel / Bessette",
                    "codeTypeService": 2,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "558",
                    "description": "Sainte-Foy Centre",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Sainte-Foy Centre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Sainte-Thérèse-de-Lisieux",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "572",
                    "description": "Sainte-Foy Centre",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Sainte-Foy Centre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Lac-Saint-Charles",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "574",
                    "description": "Sainte-Foy Centre",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Sainte-Foy Centre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Neufchâtel",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "577",
                    "description": "Sainte-Foy Centre",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Sainte-Foy Centre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Val-Bélair",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "580",
                    "description": "Sainte-Foy Centre",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Sainte-Foy Centre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "L'Ancienne-Lorette",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "581",
                    "description": "Sainte-Foy Centre",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Lebourgneuf / Sainte-Foy Centre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Lebourgneuf / Neufchâtel",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "582",
                    "description": "Sainte-Foy Centre",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Lebourgneuf / Sainte-Foy Centre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Lebourgneuf / Saint-Émile",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "584",
                    "description": "Sainte-Foy Centre",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Sainte-Foy Centre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Loretteville",
                    "codeTypeService": 1,
                    "accessible": false,
                    "jours": "0111110"
                },
                {
                    "noParcours": "800",
                    "description": "Pointe-de-Sainte-Foy",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Beauport",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Pointe-de-Sainte-Foy",
                    "codeTypeService": 4,
                    "accessible": true,
                    "jours": "1111111"
                },
                {
                    "noParcours": "801",
                    "description": "Pointe-de-Sainte-Foy",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Charlesbourg",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Pointe-de-Sainte-Foy",
                    "codeTypeService": 4,
                    "accessible": true,
                    "jours": "1111111"
                },
                {
                    "noParcours": "802",
                    "description": "Station Belvédère",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Terminus Beauport",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Station Belvédère",
                    "codeTypeService": 4,
                    "accessible": true,
                    "jours": "1111111"
                },
                {
                    "noParcours": "803",
                    "description": "Terminus Les Saules",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Terminus Beauport",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Terminus Les Saules",
                    "codeTypeService": 4,
                    "accessible": true,
                    "jours": "1111111"
                },
                {
                    "noParcours": "804",
                    "description": "Sainte-Foy Centre",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Sainte-Foy Centre",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Loretteville",
                    "codeTypeService": 4,
                    "accessible": true,
                    "jours": "1111111"
                },
                {
                    "noParcours": "807",
                    "description": "Place D'Youville",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Place D'Youville",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Pointe-de-Sainte-Foy",
                    "codeTypeService": 4,
                    "accessible": true,
                    "jours": "1111111"
                },
                {
                    "noParcours": "904",
                    "description": "Loretteville",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": null,
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Loretteville",
                    "codeTypeService": 6,
                    "accessible": false,
                    "jours": "0000011"
                },
                {
                    "noParcours": "907",
                    "description": "Pointe-de-Sainte-Foy",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "Place D'Youville",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Pointe-de-Sainte-Foy",
                    "codeTypeService": 6,
                    "accessible": false,
                    "jours": "0000011"
                },
                {
                    "noParcours": "915",
                    "description": "Cap-Rouge",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": null,
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Cap-Rouge",
                    "codeTypeService": 6,
                    "accessible": false,
                    "jours": "0000011"
                },
                {
                    "noParcours": "925",
                    "description": "Pointe-de-Sainte-Foy",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": null,
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Pointe-de-Sainte-Foy",
                    "codeTypeService": 6,
                    "accessible": false,
                    "jours": "0000011"
                },
                {
                    "noParcours": "931",
                    "description": "Lac-Saint-Charles",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": "Place D'Youville",
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Lac-Saint-Charles",
                    "codeTypeService": 6,
                    "accessible": false,
                    "jours": "0000011"
                },
                {
                    "noParcours": "936",
                    "description": "Station des Roses",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": null,
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Station des Roses",
                    "codeTypeService": 6,
                    "accessible": false,
                    "jours": "0000011"
                },
                {
                    "noParcours": "950",
                    "description": "T. C.-Montmorency",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": "T. C.-Montmorency",
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": null,
                    "codeTypeService": 6,
                    "accessible": false,
                    "jours": "0000011"
                },
                {
                    "noParcours": "954",
                    "description": "Sainte-Thérèse-de-Lisieux",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": null,
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Sainte-Thérèse-de-Lisieux",
                    "codeTypeService": 6,
                    "accessible": false,
                    "jours": "0000011"
                },
                {
                    "noParcours": "972",
                    "description": "Loretteville",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": null,
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Loretteville",
                    "codeTypeService": 6,
                    "accessible": false,
                    "jours": "0000011"
                },
                {
                    "noParcours": "980",
                    "description": "L'Ancienne-Lorette",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": null,
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "L'Ancienne-Lorette",
                    "codeTypeService": 6,
                    "accessible": false,
                    "jours": "0000011"
                },
                {
                    "noParcours": "982",
                    "description": "Lac-Saint-Charles",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": null,
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Lac-Saint-Charles",
                    "codeTypeService": 6,
                    "accessible": false,
                    "jours": "0000011"
                },
                {
                    "noParcours": "984",
                    "description": "Neufchâtel",
                    "codeDirectionPrincipale": "1",
                    "descriptionDirectionPrincipale": null,
                    "codeDirectionRetour": "0",
                    "descriptionDirectionRetour": "Neufchâtel",
                    "codeTypeService": 6,
                    "accessible": false,
                    "jours": "0000011"
                },
                {
                    "noParcours": "992",
                    "description": "Saint-Augustin",
                    "codeDirectionPrincipale": "2",
                    "descriptionDirectionPrincipale": null,
                    "codeDirectionRetour": "3",
                    "descriptionDirectionRetour": "Saint-Augustin",
                    "codeTypeService": 6,
                    "accessible": false,
                    "jours": "0000011"
                }
                ]
    console.log("SET")
    sendBusListJson(); //Send bus information
    sendBusListHtml(); //Send bus list for checkbox 
    setupBus();
}
function sendBusListJson() {
    //console.log(busList);
    app.post("/busListJson/",  (req, res)=>{
        res.send(routes);
        console.log("Sent: busListJson");
    })
}
function sendBusListHtml() {
    let dataToSend = {
        type0: '',
        type1: '',
        type4: '',
        type6: '',
        type2: ''
    };
    for (x in routes) {
        for (var i = 0; i <= 1; i++) { //Create two checkbox because there is two line with the same name
            if (i == 0) { //Direction Principale
                var text = `<input type="checkbox" onclick="reload()" class="busCheck" name="${routes[x].description}" value="${routes[x].noParcours},${routes[x].codeDirectionPrincipale}"><label for="${routes[x].description}"><em>${routes[x].noParcours}</em> vers <em>${routes[x].descriptionDirectionPrincipale}</em><br></label>`
            } else if (i == 1) { //Direction de Retour
                var text = `<input type="checkbox" onclick="reload()" class="busCheck" name="${routes[x].description}" value="${routes[x].noParcours},${routes[x].codeDirectionRetour}"><label for="${routes[x].description}"><em>${routes[x].noParcours}</em> vers <em>${routes[x].descriptionDirectionRetour}</em><br></label>`
            }
            switch (routes[x].codeTypeService) {
                case 0:
                case 3:
                    //blue
                    dataToSend.type0 += text;
                    break;
                case 1:
                    //red
                    dataToSend.type1 += text;
                    break;
                case 4:
                    //green
                    dataToSend.type4 += text;
                    break;
                case 6:
                    //black
                    dataToSend.type6 += text;
                    break;
                case 2:
                    //autre blue
                    dataToSend.type2 += text;
                    break;
            }
        }
    }
    app.post("/busListHtml/", (req, res)=>{
        res.send(dataToSend);
        console.log("Sent: busListHtml");
    })
}
getBusList()
setInterval(getBusList, 1 * 24 * 3600 * 1000);

app.post("/newChecked/",  (req, res)=>{
    console.log("listChecked", req.body);
    listChecked = req.body;
    res.send(listChecked)
    setupBus();
})

app.post("/oldChecked/",  (req, res)=>{
    res.send(listChecked)
})

var oldPositions = [];
var positions = [];
//Get bus position
function setupBus() {
    oldPositions = positions;
    positions = [];
    for (z in routes) {
        for (y in listChecked) { //Get bus from the checked box on website
            let c = listChecked[y].split(","); //ex: ["800, 2"]
            let checkedParcour = c[0]; //ex: "800"
            let checkedDir = parseInt(c[1]); //ex: "2"
            if (routes[z].noParcours == checkedParcour && routes[z].codeDirectionPrincipale == checkedDir) {
                getBusPos(routes[z].noParcours, routes[z].codeDirectionPrincipale)
            } else if (routes[z].noParcours == checkedParcour && routes[z].codeDirectionRetour == checkedDir) {
                getBusPos(routes[z].noParcours, routes[z].codeDirectionRetour)
            }
        }
    }
}


var compteur = 0;
function getBusPos(bus, dir){
    axios.get(`https://wsmobile.rtcquebec.ca/api/v3//horaire/ListeAutobus_Parcours?source=sitemobile&noParcours=${bus}&codeDirection=${dir}`).then(response => {
        compteur++;
        callback(bus, dir, response.data);
    }).catch(error => {});
}
function callback(bus, dir, data) {
    var line = JSON.parse(`{ "bus":${bus}, "dir":${dir}, "listBus":${JSON.stringify(data)} }`);
    positions.push(line);
    sendData();
}

function sendData() {
    if (compteur == listChecked.length) {
        compteur = 0;
        console.log("Reloaded")
        //SEND-------
        app.post("/position/",  (req, res)=>{
            if (positions == []) {
                res.send(oldPositions);
                console.log("Sent Old")
            }else {
                res.send(positions);
                console.log("Sent")
            }
        })
    }
}


setInterval(setupBus,12100);

app.listen(3000, function () {console.log("Listening on port 3000")});