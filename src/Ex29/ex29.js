function testPrompt() {

   var txt;
   var person = prompt("Wprowadz imie: ", "Jan Kowalski");

   if (person == null || person == ""){
      txt = "Anulowano przez uzytkownika";
   } else {
      txt = "Witaj " + person + "!";
   }

   document.getElementById("demo").innerHTML = txt;
}
