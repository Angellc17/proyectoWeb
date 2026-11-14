// Calculadora básica con teclado e historial
const OPERADORES = ["+", "-", "*", "/"];
let resultadoMostrado = false; // es true justo después de pulsar "="
const historial = [];          // últimas operaciones resueltas

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

// Borra el último carácter (tecla ⌫ o Retroceso)
function borrarUltimo() {
    const pantalla = document.getElementById("pantalla");
    if (pantalla.value === "Error" || resultadoMostrado || pantalla.value.length <= 1) {
        borrar();
        return;
    }
    pantalla.value = pantalla.value.slice(0, -1);
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
        const redondeado = Number(resultado.toFixed(8));
        pantalla.value = redondeado;
        resultadoMostrado = true;
        if (OPERADORES.some((op) => expresion.includes(op))) registrar(expresion, redondeado);
    } catch (error) {
        pantalla.value = "Error";
    }
}

// ---------- Historial ----------
function simbolos(texto) {
    return texto.replace(/\*/g, "×").replace(/\//g, "÷").replace(/-/g, "−");
}

function registrar(expresion, resultado) {
    historial.unshift({ expresion, resultado });
    if (historial.length > 6) historial.pop();
    mostrarHistorial();
}

function mostrarHistorial() {
    const lista = document.getElementById("historial");
    lista.innerHTML = "";
    if (historial.length === 0) {
        const vacio = document.createElement("li");
        vacio.className = "vacio";
        vacio.textContent = "Aún no hay operaciones.";
        lista.appendChild(vacio);
        return;
    }
    historial.forEach((operacion) => {
        const item = document.createElement("li");
        const boton = document.createElement("button");
        boton.type = "button";
        boton.title = "Usar este resultado";
        boton.innerHTML = `<span></span><span class="resultado"></span>`;
        boton.children[0].textContent = simbolos(operacion.expresion);
        boton.children[1].textContent = `= ${operacion.resultado}`;
        boton.addEventListener("click", () => {
            document.getElementById("pantalla").value = operacion.resultado;
            resultadoMostrado = true;
        });
        item.appendChild(boton);
        lista.appendChild(item);
    });
}

function borrarHistorial() {
    historial.length = 0;
    mostrarHistorial();
}

// ---------- Teclado ----------
document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    let tecla = e.key;
    if (tecla === ",") tecla = ".";

    if (/^[0-9]$/.test(tecla) || OPERADORES.includes(tecla) || tecla === ".") {
        escribir(tecla);
    } else if (tecla === "Enter" || tecla === "=") {
        e.preventDefault(); // evita pulsar a la vez el botón que tenga el foco
        resolver();
        tecla = "=";
    } else if (tecla === "Backspace") {
        borrarUltimo();
        tecla = "atras";
    } else if (tecla === "Escape" || tecla === "Delete") {
        borrar();
        tecla = "C";
    } else {
        return;
    }

    // Resalta la tecla correspondiente de la pantalla
    const boton = document.querySelector(`[data-tecla="${tecla}"]`);
    if (boton) {
        boton.classList.add("pulsada");
        setTimeout(() => boton.classList.remove("pulsada"), 130);
    }
});
