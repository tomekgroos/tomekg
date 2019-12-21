class car {
    constructor(brand, model, productionYear, color) {
        this.brand = brand;
        this.model = model;
        this.productionYear = productionYear;
        this.color = color;

    }

    displayBrandAndModel() {
        console.log("Marka: " + this.brand + "Model: " + this.model);
    }

    drive() {
        console.log("Driving");
    }
}

function createCar() {
    let fiat500 = new car("Fiat", "500", 2010, "White");
    fiat500.displayBrandAndModel();
    console.log("Rok produkcji: " + fiat500.productionYear);
    console.log("Kolor: " + fiat500.color);
}






