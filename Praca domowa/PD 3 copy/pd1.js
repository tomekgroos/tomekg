
    var textArray = ["Audi", "BMW", "Mercedes", "Ford", "Chevrolet"];

    document.write("Tablica przed zmiana:</br>");

    for (var i = 0; i < textArray.length; i++){

        document.write(textArray[i] + " ");
    }

    function switchElement() {
        textArray[0] = prompt("Podaj pierwszy element tablicy do zmiany: ");

        document.write("Tablica po zmianie:</br>");

        for (var i = 0; i < textArray.length; i++){

            document.write(textArray[i] + " ");
        }
    }





