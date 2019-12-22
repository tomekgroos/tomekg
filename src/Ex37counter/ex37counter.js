var x = document.getElementById("myBtn");
var counter = 0;

x.addEventListener("mouseover", myFunction);
x.addEventListener("mouseout", myThirdFunction);
x.addEventListener("click", mySecondFunction);


function myFunction() {
    document.getElementById("demo").innerHTML += "Mouse Over!<br>";
}

function mySecondFunction() {
    document.getElementById("demo").innerHTML += "Mouse Clicked!<br>";
    counter++;
    if (counter === 3) {
        x.removeEventListener("click", mySecondFunction);
    }
}

function myThirdFunction() {
    document.getElementById("demo").innerHTML += "Mouse Out!<br>";

}




