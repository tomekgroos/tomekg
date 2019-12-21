

      var tmr = setInterval(myTimer, 1000); // przypisanie setInterval do zmiennej
      var d;

   function myTimer(){

      document.getElementById("demo").innerHTML = d.toLocaleTimeString();
      d = new Date(d.getTime()+ 1000);

   }

   function initRealTime(){
       d = new Date();
   }

