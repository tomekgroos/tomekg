
function cuboidVolumeone(long, width, height) {
    if (long <=0 || width <=0 || height <=0){
        throw "Podano nieprawidlowy parametr"
    }
    let baseArea = long * width;
    let result =  cuboidVolumetwo(baseArea, height);

        return result;

}


function cuboidVolumetwo(baseArea, height) {

        let result = baseArea * height;
        return result;

}


function display() {

    console.log(cuboidVolumeone(5,6,7));
    console.log(cuboidVolumetwo(30,7));

}


