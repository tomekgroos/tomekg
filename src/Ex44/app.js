
let app = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/xml", "Access-Control-Allow-Origin": "*"});

function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            myFunction(this);
        }
    };
    xmlhttp.open("GET", "http://localhost:3000/");
    xmlhttp.send();

};

function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>Artist</th><th>Title</th></tr>";
    var x = xmlDoc.getElementsByTagName("CD");

    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("ARTIST"[0]).childNodes[0].nodeValue +
            x[i].getElementsByTagName("TITLE"[0]).childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;

}

    app.listen(3000, "127.0.0.1");

    console.log("Node server running on port 3000");

