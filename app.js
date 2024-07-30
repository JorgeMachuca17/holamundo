let a = "hola";
let b= "programador@s";
let saludo = a+ " " + b;
let hombre = "masculino";
let mujer = "femenino";
let numero = 0;
console.log(saludo);
alert(saludo);
var genero  = window.prompt("¿Que genero de sexo eres?")
let error = false;
    if (genero == hombre){
        alert("hola programador");
    }
    else if (genero == mujer) {
        alert("hola programadora");
    }
    else {
        error = true;
        alert("sexo desconocido");
    }

    if (error) {
        alert("su respuesta fue " + genero +" "+  " ");
    }

var num = window.prompt("Dime un numero del 1 al 10?")
if(num >=11||num<=0){
    alert("el numero esta fuera de rango del 1 al 10");
}

function buclewhile(num) {
    let i=1;

    while(i <= num){
        console.log(i);
        i++;
    }
}

buclewhile(num);