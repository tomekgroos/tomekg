const http = require("http"); // pobranie obiektu http

let app = http.createServer((req, res) => {   // tworzenie serwera

    res.writeHead(200, {"Content-Type": "text/plain", "Access-Control-Allow-Origin": "*"});

    res.end("Hello World!\n"); // zwracanie wartosci

});

app.listen(3000, "127.0.0.1");  // zlecenie dzialanie na porcie i IP

console.log("Node server running on port 3000");  // wyswietlanie w koncoli

