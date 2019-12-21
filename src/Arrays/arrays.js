
function testJs() {

let fruits = ["Apple", "Kiwi", "Strawberry", "Banana", "Mango"]

    console.log(fruits);

    let deleteLast = fruits.pop()

    console.log(deleteLast);
    console.log(fruits);

    let addItem = fruits.push("Pear");

    console.log(addItem);
    console.log(fruits);

    var lessThan5 = fruits.filter(myFunction);

    function myFunction(value){
        return value.length < 5;
    }

    console.log(lessThan5);

}



