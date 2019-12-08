function testTypes() {

    /*
    // deklaracja zmiennej
    let age;
    // inicjalizacja zmiennej
    age = 40;

    // deklaracja i inicjalizacja w jednej linii
    let name = "Jan";

    isOlderThanFourty = true;

    console.log(age);
    console.log(name);

    const NAME = "Jan";

    console.log(NAME);
    console.log(isOlderThanFourty);



    isOlderThanFourty = "yes";

    console.log(isOlderThanFourty);

    console.log("age is type of: " + typeof age
        + " with value of: " + age);

    console.log("name is type of: " + typeof name);

    console.log(4%2);
    console.log(5%2);

    let i = 2;
    let y = 2;

    // postinkrementacja
    console.log(i++);
    console.log(i)

    // preinkrementacja
    console.log(++y)
    console.log(y)

    // postdekrementacja
    console.log(i--);
    console.log(i)

    // predekrementacja
    console.log(--y)
    console.log(y)

    console.log("operacje arytmetyczne:------->");

    var a, b, c;

    a = 6;
    b = 12;
    c = 1;

    console.log(a * b);
    console.log(a / b);
    console.log(a + b - c);
    console.log(a + b * c);
    console.log(a - b / c);
    console.log(a-=b);

    let val1 = "3";
    let val2 = 3;

    // operator przypisania
    console.log("operatory przypisania");

    console.log(val1 == val2);
    console.log(val1 === val2);

    console.log(val1 != val2);
    console.log(val1 !== val2);



    var a, b;

    a = 5;
    b = 7;

    console.log(a > b);
    console.log(a < b);
    console.log(a <= b);
    console.log(a >= b);
    console.log(b === b);
    console.log(b === a);
    console.log(a != a);
    console.log(a != b);
    console.log(a == a);

    let val1 = true;
    let val2 = false;
    let val3 = true;

    let age = 16;

    console.log(age > 15)
    console.log(age > 18)
    console.log(age > 15 || age > 18)

    */

    var a, b, c;

    a = 4;
    b = 90;
    c = 65

    console.log(c > b || b >= c);
    console.log(a < c && b > c);
    console.log(c != b && c == 65);
    console.log(a > b || c > b);

    console.log(c > b || b >= c && b < c);

    let zmienna1 = "tekst";
    let zmienna2 = 6;
    let zmienna3 = false;

    console.log(typeof zmienna1)
    console.log(typeof zmienna2)
    console.log(typeof zmienna3)

    var age = 15;

    if (age > 18){
        console.log("Wiecej niz 18");
    } else if ( age === 18){
        console.log("Rowne 18 lat");
    } else {
        console.log("Mniej niz 18 lat");
    }

    switch (expr){
        case "Orange":
            console.log("Oranges were picked");
            console.log("Oranges are $0.59 a pound.");
            break;
        case "Mangoes":
        case "Papayas":
            console.log("Mangoes and papayas are $2.79 a pound.");
            break;
        default:
            console.log("Sorry, we are out of " + expr + ".");
    }

    switch (true){
        case (x < 5):
            console.log("Less than five");
            break;
            case (x < 9

    }
}