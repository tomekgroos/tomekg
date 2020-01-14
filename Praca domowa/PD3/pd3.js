
function testMaps() {

    var mapExample = new Map();
    
    var firstKey = "a string",
        secondKey = function(){},
        thirdKey = {};
    
        mapExample.set(firstKey, "string value");
        mapExample.set(secondKey, "function value");
        mapExample.set(thirdKey, "object value");
    
        document.write("Rozmiar mapy: " + mapExample.size + "</br>");
    
        document.write(mapExample.get(firstKey) + "</br>");
        document.write(mapExample.get(secondKey) + "</br>");
        document.write(mapExample.get(thirdKey) + "</br>");
    
    }
    
    
    
    