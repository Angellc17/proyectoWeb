var numero1 = 10;
var numero2 = 5;

const pi = 3.1416;

// Lee el número de la pantalla (si no es un número, por ejemplo "Error", cuenta como 0)
function leerPantalla() {
    const numero = Number(document.getElementById("mostrar").value);
    return Number.isNaN(numero) ? 0 : numero;
}

function sumar() {
    const pantalla = document.getElementById("mostrar");
    const valor = leerPantalla();
    pantalla.value = valor + numero1 + numero2;
}

function restar() {
    const pantalla = document.getElementById("mostrar");
    const valor = leerPantalla();
    pantalla.value = valor - numero1;
}

function dividir() {
    const pantalla = document.getElementById("mostrar");
    const valor = leerPantalla();
    pantalla.value = valor === 0 ? "Error" : valor / numero2;
}

function multiplicar() {
    const pantalla = document.getElementById("mostrar");
    const valor = leerPantalla();
    pantalla.value = valor * numero1;
}

function escribir(valor) {
    const pantalla = document.getElementById("mostrar");
    if (pantalla.value === "0" || pantalla.value === "Error") {
        pantalla.value = "";
    }
    pantalla.value += valor;
}

function borrar() {
    const pantalla = document.getElementById("mostrar");
    pantalla.value = "0";
}

function resolver() {
    const pantalla = document.getElementById("mostrar");
    try {
        const resultado = Function(`"use strict"; return (${pantalla.value.replace(/,/g, ".")})`)();
        pantalla.value = Number.isInteger(resultado) ? resultado : Number(resultado.toFixed(6));
    } catch (error) {
        pantalla.value = "Error";
    }
}