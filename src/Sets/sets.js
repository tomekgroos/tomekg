
function testJs() {

// wartość set może występować tylko JEDEN raz

    var setExample = new Set();

    setExample.add(1);
    setExample.add(2);
    setExample.add(3);
    setExample.add("napis");
    setExample.add("drugi napis");


    console.log(setExample);

    console.log(setExample.has(2)); // sprawdzanie czy istnieje wartosc

    var tablicaSet = Array.from(setExample); // tworzenie tablicy z Setu

    console.log(tablicaSet);




}



