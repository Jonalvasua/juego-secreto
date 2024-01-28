// Aqui las funciones no importa en donde estén, va a tomar los datos necesarios
// pueden estar al inicio o al final

let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

// esta forma fue suplantada por la funcion asignarTextoElemento
// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica el número del 1 al 10'

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    

    // el === te compara peras con peras y manzanas con manzanas
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no acertó

        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor')
        } else {
            asignarTextoElemento('p','El número secreto es mayor')
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value ='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumeroSorteado);
    console.log(numeroGenerado);
    // si ya sorteamos todos los numeros
    if (listaNumeroSorteado.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {// si el numero generado está incluido en la lista, hacemoos una operación, si no, hacemos otra.
        if (listaNumeroSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }

    }

    
}

function condicionesIniciales() {
    asignarTextoElemento ('h1', 'Juego del número secreto');
    asignarTextoElemento ('p', `Indica el número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar la caja
    limpiarCaja();
    
    // mensaje de intervalo de numeros
    // generar el numero aleatorio
    // Inicializar el número intentos
    condicionesIniciales();
    
    // Deshabilitar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();