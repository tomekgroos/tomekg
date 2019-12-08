function exceptions() {

    //let a = 2;

    try {
        console.log("Poczatek try");
        console.log(a); // tutaj zostanie rzucony wyjatek
        // linie po wyjatku w bloku try nie sa wykonywane
        console.log("Dalsza czesc try");
    } catch (e) { // catch (zmienna) --> zmienna w ktorej przechowujemy info o bledzie
        console.log(e);
        console.log("Koniec catch");
    } finally {
        // blok kodu wykonywany zawsze
        console.log("Sekcja finally");
    }

}

function throwException() {

    try {
        console.log("Poczatek try");
        throw new Error("Wyjatek w linii 7"); // wlasny wyjatek
        console.log("Dalsza czesc try");
    } catch (e) {
        console.log(e);
        console.log("Koniec catch");
    } finally {
        console.log("Sekcja finally");
    }

}

