function obtenerEleccionAleatoria() {
    const opciones = ['piedra', 'papel', 'tijera'];
    return opciones[Math.floor(Math.random() * opciones.length)];
}

let partidas = 0;
let ganadas = 0;
let empatadas = 0;
let perdidas = 0;

function piedraPapelTijera(jugador) {
    const maquina = obtenerEleccionAleatoria();
    const estadoPartida = document.getElementById("estado-partida");
    const iconoResultado = document.getElementById("icono-resultado");
    partidas++;

    if (jugador === maquina) {
        estadoPartida.dataset.resultado = "empatada";
        iconoResultado.textContent = "=";
        document.getElementById("pantalla").textContent = "¡Empate!";
        empatadas++;
    } else if (
        (jugador === 'piedra' && maquina === 'tijera') ||
        (jugador === 'tijera' && maquina === 'papel') ||
        (jugador === 'papel' && maquina === 'piedra')
    ) {
        estadoPartida.dataset.resultado = "ganada";
        iconoResultado.textContent = "★";
        document.getElementById("pantalla").textContent = "¡Has ganado!";
        ganadas++;
    } else {
        estadoPartida.dataset.resultado = "perdida";
        iconoResultado.textContent = "×";
        document.getElementById("pantalla").textContent = "Gana la máquina";
        perdidas++;
    }

    document.getElementById("jugada-jugador").textContent = `Tu elección: ${jugador}`;
    document.getElementById("jugada-maquina").textContent = `Elección de la máquina: ${maquina}`;
    document.querySelector("#partidas .marcador-valor").textContent = partidas;
    document.querySelector("#ganadas .marcador-valor").textContent = ganadas;
    document.querySelector("#empatadas .marcador-valor").textContent = empatadas;
    document.querySelector("#perdidas .marcador-valor").textContent = perdidas;
}
