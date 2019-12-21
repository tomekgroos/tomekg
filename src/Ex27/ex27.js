function testLocation() {

 document.getElementById("href").innerHTML =
     "Page address is: <br>" + window.location.href;

 document.getElementById("protocol").innerHTML =
     "Page protocol is: <br> " + window.location.protocol;

 document.getElementById("port").innerHTML =
     "Page protocol is: <br> " + window.location.port;

}
