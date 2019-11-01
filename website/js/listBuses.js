function checkBox() {
    axios.post("/oldChecked").then(function(response) {
        let data = response.data;
        for (x in data) {
            for (y in document.getElementsByClassName("busCheck")) {
                if (data[x] == document.getElementsByClassName("busCheck")[y].value) {
                    document.getElementsByClassName("busCheck")[y].checked = true;
                }
            }
        }
    }).catch(function (error) {console.log(error)});
}

function getBusListHtml() {
    axios.post("/busListHtml").then(function(response) {
        busListHtml = response.data;
        //console.log("Bus pos html", busListHtml);
        makeBusListJson(busListHtml);
    }).catch(function (error) {console.log(error)});
}

function makeBusListJson(list) {
    document.getElementById("Type0").innerHTML += busListHtml.type0;
    document.getElementById("Type1").innerHTML += busListHtml.type1;
    document.getElementById("Type4").innerHTML += busListHtml.type4;
    document.getElementById("Type6").innerHTML += busListHtml.type6;
    document.getElementById("Type2").innerHTML += busListHtml.type2;
    checkBox();
}
var listChecked = [];
function reload() {
    listChecked = [];
    for (x in document.getElementsByClassName("busCheck")) {
        if (document.getElementsByClassName("busCheck")[x].checked) {
            listChecked.push(document.getElementsByClassName("busCheck")[x].value)
        }
    }
    axios.post("/newChecked", listChecked).then(function(response) {
        console.log("Sent", listChecked);
    }).catch(function (error) {console.log(error)});
}

getBusListHtml();