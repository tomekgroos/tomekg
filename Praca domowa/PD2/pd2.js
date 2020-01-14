
function setJs() {

    // wartość set może występować tylko JEDEN raz
    
        var setExample = new Set();
    
        setExample.add(1);
        setExample.add(2);
        setExample.add(3);
        setExample.add("napis");
        setExample.add("drugi napis");
    
    
        document.write();
    
        document.write(setExample.has(2) + "</br>"); // sprawdzanie czy istnieje wartosc
    
        var tablicaSet = Array.from(setExample); // tworzenie tablicy z Setu
    
        document.write(tablicaSet);
    
    
    
    
    }
    
    
    
    