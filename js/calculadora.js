// Calculadora básica
const OPERADORES = ["+", "-", "*", "/"];
let resultadoMostrado = false; // es true justo después de pulsar "="

function escribir(valor) {
    const pantalla = document.getElementById("pantalla");
    const actual = pantalla.value;
    const esOperador = OPERADORES.includes(valor);

    // Tras un error o un resultado, escribir un número empieza una operación nueva
    if (actual === "Error" || (resultadoMostrado && !esOperador)) {
        pantalla.value = valor === "." ? "0." : valor;
        resultadoMostrado = false;
        return;
    }
    resultadoMostrado = false;

    // Un operador después de otro sustituye al anterior (evita "5++3")
    if (esOperador && OPERADORES.includes(actual.slice(-1))) {
        pantalla.value = actual.slice(0, -1) + valor;
        return;
    }

    const ultimoNumero = actual.split(/[+\-*/]/).pop();

    // Un cero inicial se sustituye por el dígito (evita "007")
    if (/\d/.test(valor) && ultimoNumero === "0") {
        pantalla.value = actual.slice(0, -1) + valor;
        return;
    }

    // Solo un punto decimal por número
    if (valor === ".") {
        if (ultimoNumero.includes(".")) return;
        if (ultimoNumero === "") {
            pantalla.value = actual + "0.";
            return;
        }
    }

    pantalla.value = actual + valor;
}

function borrar() {
    const pantalla = document.getElementById("pantalla");
    pantalla.value = "0";
    resultadoMostrado = false;
}

function resolver() {
    const pantalla = document.getElementById("pantalla");
    const expresion = pantalla.value.replace(/,/g, ".");

    // Solo se calculan números y operadores
    if (!/^[0-9+\-*/.]+$/.test(expresion)) {
        pantalla.value = "Error";
        return;
    }

    try {
        const resultado = Function(`"use strict"; return (${expresion})`)();
        if (!Number.isFinite(resultado)) {
            pantalla.value = "Error"; // por ejemplo, dividir entre 0
            return;
        }
        // toFixed evita resultados como 0.30000000000000004
        pantalla.value = Number(resultado.toFixed(8));
        resultadoMostrado = true;
    } catch (error) {
        pantalla.value = "Error";
    }
}
