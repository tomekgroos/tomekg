const http = require("http");

let app = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/xml", "Access-Control-Allow-Origin": "*"});

    var xmlString = "<ROOT><CD><ARTIST>Jan</ARTIST><TITLE>Nowak</TITLE></CD>" +
        "<CD><ARTIST>Krzysztof</ARTIST><TITLE>Krawczyk</TITLE></CD></ROOT>";

    res.end(xmlString);

});

app.listen(3000, "127.0.0.1");

console.log("Node server running on port 3000");

