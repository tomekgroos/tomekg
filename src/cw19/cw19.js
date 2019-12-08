
// jedna funkcja wyswietlanie od razu, RETURN zwraca tylko 1 wartosc

function squareAndCube(number) {

        let square = number * number;
        let cube = number * number * number;

        console.log(square);
        console.log(cube);

// dwie osobne funkcje

}

function getSquare(number) {

    return number ** 2;

}

function getCube(number) {

    return number ** 3;

}

// metoda najbardziej optymalna

function countPower(number, power){

    return number ** power;

}

function displayResults() {

    console.log(getSquare(3))
    console.log(getCube(3))
    console.log(countPower(4,2))

}

