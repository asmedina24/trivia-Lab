function displayOptions(){
var userName = document.getElementById("userBox").value;
document.getElementById("divUno").innerHTML = "";
document.getElementById("player").innerHTML = "¡Hola! " + userName + " ¿Qué quieres jugar?";
document.getElementById("divDos").style.display = "initial";
}

function funcionCultura(){
document.getElementById("seleccionesUno").innerHTML = "";
document.getElementById("seleccionesDos").style.display = "initial";
}


function funcionFarandula(){
document.getElementById("seleccionesUno").innerHTML = "";
document.getElementById("seleccionesDos").style.display = "initial";
}

function obtenerResultado(){
let contador = 0;
const respuestasCorrectas = ["2","6","9"];

const respuesta1 = document.querySelector ('input[name="valoracion1"]:checked').value;
console.log(respuesta1);
const respuesta2 = document.querySelector ('input[name="valoracion2"]:checked').value;
console.log(respuesta1);
const respuesta3 = document.querySelector ('input[name="valoracion3"]:checked').value;
console.log(respuesta1);

if (respuestasCorrectas[0] == respuesta1) {
  contador++;
}
if (respuestasCorrectas[1] == respuesta1) {
  contador++;
}
if (respuestasCorrectas[2] == respuesta1) {
  contador++;
  }
  return contador;
}




//* document.getElementById('puntaje').innerHTML += '';



//  if (respuesta1 === "2") {
//    correctas++;
//  }
//  if (respuesta2 === "5") {
//    correctas++;
//  }
//  if (respuesta3 === "9") {
//    correctas++
//  }
//  const errores = (3 - correctas);
//  document.getElementById('puntaje').innerHTML += '\n Aciertos: ' + correctas + '\n' + 'Errores:' + errores;

//botonresultados.addEventListener('click', resultado);



//*probando ale
//let correctas = 0;
//console.log(correctas);


//const opcionA = document.getElementById("value1").value;
//console.log(opcionA);
//const opcionB = document.getElementById("value2").value;
//console.log(opcionB);
//const opcionC = document.getElementById("value3").value;
//console.log(opcionC);

//const respuesta1 = ;
//console.log(respuesta1)


//const opcionD = document.getElementById("value4").value;
//console.log(opcionD);
//const opcionE = document.getElementById("value5").value;
//console.log(opcionE);
//const opcionF = document.getElementById("value6").value;
//console.log(opcionF);


//const opcionG = document.getElementById("value7").value;
//console.log(opcionG);
//const opcionH = document.getElementById("value8").value;
//console.log(opcionH);
//const opcionI = document.getElementById("value9").value;
//console.log(opcionI); //*

//  const respuesta2 = document.getElementById("opciones2").value;
  //const respuesta3 = document.getElementById("opciones3").value;
  //console.log("respuesta1").value;
  //console.log("respuesta2").value;
//  console.log("respuesta3").value;
