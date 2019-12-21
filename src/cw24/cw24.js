function testScreenObject() {

    document.getElementById("avail").innerHTML =
        "Screen height is: " + screen.availHeight + " Screen width is: " + screen.availWidth;

       document.getElementById("height").innerHTML = "Wysokosc: " + screen.height;

       document.getElementById("width").innerHTML =  "Szerokosc: " + screen.width;

       document.getElementById("cdepth").innerHTML =  "Glebia koloru: " + screen.colorDepth;



}
