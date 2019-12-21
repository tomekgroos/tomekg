
function testJs() {

var mapExample = new Map();

var firstKey = "a string",
    secondKey = function(){},
    thirdKey = {};

    mapExample.set(firstKey, "string value");
    mapExample.set(secondKey, "function value");
    mapExample.set(thirdKey, "object value");

    console.log(mapExample.size);

    console.log(mapExample.get(firstKey));
    console.log(mapExample.get(secondKey));
    console.log(mapExample.get(thirdKey));

}



