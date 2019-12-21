

      var tmr = setInterval(myTimer, 1000); // przypisanie setInterval do zmiennej


   function myTimer(){
      var d = new Date();
      document.getElementById("demo").innerHTML = d.toLocaleTimeString();
   }


