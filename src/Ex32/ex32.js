
var x = document.querySelectorAll("p.intro");

document.getElementById("demo1").innerHTML =
    "Drugi paragraf: " + x[1].innerHTML.bold();

document.getElementById("demo2").innerHTML =
    "Pierwszy paragraf: " + x[0].innerHTML.bold();