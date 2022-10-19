/*function suma (){
    var a = 25
    var b = 50
    var c = 15
    var resultado = a + b + c;
    return resultado;
}
console.log(suma());

function Coche(puertas){
this.puertas = puertas;
console.log("Mi coche tiene " + puertas + " puertas.");

}

let objetoCoche = new Coche(2);*/

var A = prompt("Ingrese un valor: ");
//Actividad if//
/*if (A>=0){
    console.log("El numero " +  A  + "es positivo");
} else { console.log("El numero " +  A  + " en negativo"); }

var b = prompt("Ingrese un numero: ");

//Actividad while//
while (b<3){
    resultado = b++;
    console.log(resultado);
}
//Actividad do while//
/*
do {
    resultado = b++;
    console.log(resultado);}

while (b<3){
    resultado = b++;
    console.log(resultado);
}*/

var estacion = prompt ("Ingrese una estacion: ");

switch (estacion) {
    case "Verano":
    console.log("Hace mucho calor");
    break;
    case "invierno":
        console.log("Hace mucho frio");
        break;
    case "primavera":
        console.log("Es la estacion mas linda");
    break;
    case "Otoño":
        console.log("Las hojas de los arboles se caen");
        default:
            console.log("Esa estación no existe");
}
