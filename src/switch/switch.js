function switches() {
    var expr = 15;

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

        var x = 6;

    switch (true){
        case (x < 5):
            console.log("Less than five");
            break;
        case (x < 9):
            console.log("between 5 and 8");
            break;
        case (x > 12):
            console.log("between 9 and 11");
            break;
        default:
            console.log("none");

    }
}