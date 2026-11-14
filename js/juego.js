// Piedra, papel o tijera
const ICONOS = {
    piedra: "../img/piedra.svg",
    papel: "../img/papel.svg",
    tijera: "../img/tijera.svg"
};
const ICONOS_RESULTADO = {
    gana: "../img/ganar.svg",
    pierde: "../img/perder.svg",
    empate: "../img/empate.svg"
};

function obtenerEleccionAleatoria() {
    const opciones = ['piedra', 'papel', 'tijera'];
    return opciones[Math.floor(Math.random() * opciones.length)];
}

let partidas = 0;
let ganadas = 0;
let empatadas = 0;
let perdidas = 0;

// Repite una animación CSS aunque la clase ya estuviera puesta
function animar(elemento, clase) {
    elemento.classList.remove(clase);
    void elemento.offsetWidth; // fuerza el reinicio de la animación
    elemento.classList.add(clase);
}

function piedraPapelTijera(jugador) {
    const maquina = obtenerEleccionAleatoria();
    const pantalla = document.getElementById("pantalla");
    let estado;      // "gana", "pierde" o "empate": el CSS lo usa para el color y la animación
    let contador;    // marcador que sube en esta partida
    partidas++;

    if (jugador === maquina) {
        pantalla.value = "Empate";
        estado = "empate";
        contador = "empatadas";
        empatadas++;
    } else if (
        (jugador === 'piedra' && maquina === 'tijera') ||
        (jugador === 'tijera' && maquina === 'papel') ||
        (jugador === 'papel' && maquina === 'piedra')
    ) {
        pantalla.value = "Gana el jugador";
        estado = "gana";
        contador = "ganadas";
        ganadas++;
    } else {
        pantalla.value = "Gana la máquina";
        estado = "pierde";
        contador = "perdidas";
        perdidas++;
    }

    const resultado = pantalla.closest(".resultado");
    resultado.dataset.estado = estado;
    document.querySelector("#icono-resultado img").src = ICONOS_RESULTADO[estado];
    animar(resultado, "anima");

    actualizarJugada("jugada-jugador", "Tú", jugador);
    actualizarJugada("jugada-maquina", "Máquina", maquina);
    document.querySelector("#partidas .marcador-valor").textContent = partidas;
    document.querySelector("#ganadas .marcador-valor").textContent = ganadas;
    document.querySelector("#empatadas .marcador-valor").textContent = empatadas;
    document.querySelector("#perdidas .marcador-valor").textContent = perdidas;

    animar(document.getElementById(contador), "destello");
    animar(document.getElementById("partidas"), "destello");
}

function actualizarJugada(id, etiqueta, opcion) {
    const elemento = document.getElementById(id);
    elemento.querySelector(".icono-eleccion img").src = ICONOS[opcion];
    const texto = elemento.querySelector(".texto-eleccion");
    texto.firstChild.textContent = `${etiqueta} · `;
    texto.querySelector("strong").textContent = opcion;
}
