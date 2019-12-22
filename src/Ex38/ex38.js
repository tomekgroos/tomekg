
var x = document.getElementById("myBtn");

x.addEventListener("mouseover", myFunction);
x.addEventListener("mouseout", myThirdFunction);
x.addEventListener("click", mySecondFunction);

x.removeEventListener()


     function myFunction() {
         document.getElementById("demo").innerHTML += "Mouse Over!<br>";

     }

     function mySecondFunction() {
         document.getElementById("demo").innerHTML += "Mouse Clicked!<br>";
         x.removeEventListener("click", mySecondFunction);
     }

     function myThirdFunction() {
         document.getElementById("demo").innerHTML += "Mouse Out!<br>";

     }




