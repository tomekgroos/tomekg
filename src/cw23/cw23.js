function testJs() {

    class car {
        constructor(brand, model, productionYear, color) {
            this.brand = brand;
            this.model = model;
            this.productionYear = 0;
            this.color = color;

        }

        displayBrandAndModel(){
            console.log("Marka: " + this.brand + "Model: " + this.model);
        }

        drive() {
            console.log("Teraz prowadzę " + this.brand);
        }
    }

    let firstCar = new car("Volvo", "S60", 2010, "Red");

        console.log(firstCar);
}

