function czyZimno() {

    var temperatura = 22;

    var granicaZimna = 12;

    var superhot = 31;

    var supercold = -10;




    if (temperatura > granicaZimna && temperatura < superhot) {
        console.log("Za oknem jest cieplo");
        } else if (temperatura >= superhot){
            console.log("Za oknem jest goraco");

            }else if (temperatura <= supercold){
                console.log("Za oknem jest bardzo zimno");
                } else {
                        console.log("za oknem jest zimno");
    }


}


