//varibales constantes //

// 1 funciones de  validacion //

function validarMinusculas(texto){
    if (texto === texto.toLowerCase()) {
        return true; 
    } else {
        alert('Solo deben haber letras !minusculas!');
        return false;
    }

}
function validarCaracteres(texto) {
    var formato = /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g; 
    if (formato.test(texto)) {
        alert("El texto contiene caracteres especiales. No están permitidos.");
        return false;
    }
    return true;
}
function validarCampo(texto) {
    if (texto.length === 0) {
        alert('El campo está vacío. Por favor, ingresa un valor.');
        return false;
    }
    return true;
}

//funciones de interaccion con html //

function asignarTextoElemento(elemento,texto){ //creo la funcion que unira la etiqueta html con el el texo para describirla //
    // la funcion asignartTextoElemento reibe dos valirables llamadas (elemento,texto);
   let elementoHtml=document.querySelector(elemento);
   elementoHtml.innerHTML=texto;
   return;
}


//funciones de procesamiento de texto //

function convertirTexto(texto) {
    // Reemplazar las letras según las reglas descritas usamndo metodo remplace //
    texto = texto.replace(/e/g, 'enter'); // g para siga buscando todas las conincidencias en el texto y no solo la primera//
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    
    return texto;
}
function revertirTexto(texto) {
    // Reemplazar las palabras modificadas por las originales
    texto = texto.replace(/enter/g, 'e'); //
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    
    return texto;
}

//funcion de ejecucion click //

function encriptar() {
    const textoEntrada = document.getElementById("idTextIn").value;

    if (!validarCampo(textoEntrada) || !validarCaracteres(textoEntrada) || !validarMinusculas(textoEntrada)) { // or || if si no se cumple una funcion
        return; // Detén la ejecución de la función si alguna validación falla
    }else {
        const textoEncriptado = convertirTexto(textoEntrada);
        document.getElementById("idTextOut").value = textoEncriptado;
    }
}
function desencriptar(){
    const textoEntrada = document.getElementById("idTextIn").value;

    if (!validarCampo(textoEntrada) || !validarCaracteres(textoEntrada) || !validarMinusculas(textoEntrada)) { // or || if si no se cumple una funcion
        return; // Detén la ejecución de la función si alguna validación falla
    }else {
        document.getElementById("idTextOut").value= revertirTexto(textoEntrada);
       
    }
}
function capturarTexto() {
    // Obtener el valor del textarea de entrada
    const textoEncriptado = document.getElementById("idTextOut").value;
     alert("texto copiado");
    // Mostrar el valor en el textarea de salida
    document.getElementById("idTextIn").value = textoEncriptado;
}