
class Person {


    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    displayNameAndSurname() {
        console.log("Imie " + this.name + " nazwisko " + this.surname);
    }

    getNameAndSurname(){
        return "Imie " + this.name + " nazwisko " + this.surname;
    }
}

function createPerson() {
    let person1 = new Person("Jan", "Kowalski", 40);

    person1.displayNameAndSurname();
    console.log("Wiek: " + person1.age);
}