function testTriary() {

    var wartosc = 22;

    var wynik1 = wartosc > 20 ? "Wartosc jest wieksza od 20":
        "Wartosc mniejsza lub rowna 20";

    var wynik2 = wartosc > 20 ?
        wartosc < 30 ? "Wieksze od 20 lub 30"
            : "Wieksze od 30"
            : "Wartosc mniejsza lub rowna 20";

    console.log(wynik1);
    console.log(wynik2);

}