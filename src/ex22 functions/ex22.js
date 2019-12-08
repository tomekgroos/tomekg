function sum(number1, number2) {

    let result = number1 + number2;
    return result;

    // console.log(number1 + number2);

}

function getSum() {
    //1 opcja:
    let resultGetSum = sum(3, 4);
    console.log(resultGetSum);

    // 2 opcja:
    let finalSum;
    // do finalSum jest zapisywana wartosc zwaracana
    // z funkcji sum
    finalSum = sum(3, 4);
    console.log(finalSum);

    // 3 opcja:
    console.log(sum(3, 4))

}