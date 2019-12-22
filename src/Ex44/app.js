
function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();

    if(this.readyState == 4 && this.status == 200){
        myFunction(this);
    }
};

function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>Artist</th><th>Title</th></tr>";
    var x = xmlDoc.getElementsByTagName("CD");

    for (i = 0; i < x.length; i++){
        table += "<tr><td>" +
            x[i].getElementsByTagName("ARTIST"[0]).childNodes[0].nodeValue +
            x[i].getElementsByTagName("TITLE"[0]).childNodes[0].nodeValue +
            "</td></tr>";
    }
        document.getElementById("demo").innerHTML = table;

}
