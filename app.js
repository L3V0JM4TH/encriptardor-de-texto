
//Variables

// variable donde se guarda el texto sin encriptar ingresado por el usuario.
const textArea_sin_encriptar = document.querySelector(".contenido__principal__textArea1");

// variable donde se guarda el texto encriptado.
const textArea_encriptado = document.querySelector(".contenido__principal__textArea2");

// variable constante que representa las llaves para encriptar y desencriptar
const matrizLlaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];




/***
 * Funcion para encriptar el texto
 * 
 * Llaves:
    * La letra "e" es convertida para "enter"
    * La letra "i" es convertida para "imes"
    * La letra "a" es convertida para "ai"
    * La letra "o" es convertida para "ober"
    * La letra "u" es convertida para "ufat"
 */

function btnEncriptar() {
    let texto_a_encriptar = encriptar(textArea_sin_encriptar.value);
    console.log(texto_a_encriptar);


    textArea_encriptado.value = texto_a_encriptar;


    textArea_sin_encriptar.value = "";
    textArea_encriptado.style.backgroundImage = "none";
    document.querySelector(".contenido__principal__btnCopiar").style.display ="block";
}

// Funcion que realica o ejecuta el evento de encriptar el mensaje y lo asigna al area de texto correspondiente

function encriptar(mensaje_a_encriptar) {
    mensaje_a_encriptar = mensaje_a_encriptar.toLowerCase();
    for (let i = 0; i < matrizLlaves.length; i++) {
        if (mensaje_a_encriptar.includes(matrizLlaves[i][0])) {
            mensaje_a_encriptar = mensaje_a_encriptar.replaceAll(matrizLlaves[i][0], matrizLlaves[i][1]);
        }
    }
    return mensaje_a_encriptar;
}

/**
 * Funcion que permeti des encriptar el mensaje posteriormente encriptado
 * @param mensaje 
 * @returns el mensaje sin encriptar
*/

function desEncriptar(mensaje_a_desEncriptar) {
    mensaje_a_desEncriptar = mensaje_a_desEncriptar.toLowerCase();
    for (let i = 0; i < matrizLlaves.length; i++) {
        if (mensaje_a_desEncriptar.includes(matrizLlaves[i][1])) {
            mensaje_a_desEncriptar = mensaje_a_desEncriptar.replaceAll(matrizLlaves[i][1], matrizLlaves[i][0]);
        }
    }
    return mensaje_a_desEncriptar;
}

/**
 * Funcion que realica o ejecuta el evento de descriptar el mensaje y lo asigna al area de texto correspondiente
*/
function btnDesEncriptar() {
    let texto_a_desEncriptar = desEncriptar(textArea_sin_encriptar.value);
    console.log(texto_a_desEncriptar);
    
    textArea_encriptado.value = texto_a_desEncriptar;
    textArea_sin_encriptar.value = "";
    textArea_encriptado.style.backgroundImage = "none";
    document.querySelector(".contenido__principal__btnCopiar").style.display ="block";
}

/**
 * Funcion que realica o ejecuta el evento de copiar el mensaje y lo asigna al area de texto correspondiente
 */
function btnCopiar() {
    let texto_a_copiar = textArea_encriptado.value;
    console.log(texto_a_copiar);

    textArea_sin_encriptar.value = texto_a_copiar;
}