
var licznik = 0;

function change() {

    document.getElementById("nameInput").value =
        document.getElementById("nameInput").value.toUpperCase();

    // przypisanie "demo" do nameInput

    document.getElementById("demo").innerHTML =
        document.getElementById("nameInput").value.toUpperCase();

// uruchomienie licznika

        if (licznik % 2 === 0) {

            document.getElementById("demo").style.color="red";

        } else {

            document.getElementById("demo").style.color="green";
        }

        licznik++;
    }



