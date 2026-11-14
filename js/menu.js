// Navegación: indicador deslizante, submenús y menú móvil.
const barra = document.querySelector(".barra");
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const indicador = document.querySelector(".indicador");

// Si la página se muestra dentro de un <iframe> (ejercicio 8), el CSS oculta la barra
if (window.self !== window.top) document.documentElement.classList.add("en-marco");
const desplegables = document.querySelectorAll(".desplegable");
const opciones = menu.querySelectorAll(":scope > a, :scope > .desplegable");
const activa = [...opciones].find(
    (o) => o.matches('[aria-current="page"]') || o.querySelector(".menu-boton.activo")
);

// --- Indicador: se coloca bajo la opción señalada y vuelve a la página actual
function moverIndicador(opcion, animar = true) {
    if (!opcion || getComputedStyle(indicador).display === "none") {
        indicador.classList.remove("visible");
        return;
    }
    if (!animar) indicador.style.transition = "none";
    indicador.style.setProperty("--x", opcion.offsetLeft + "px");
    indicador.style.setProperty("--w", opcion.offsetWidth + "px");
    indicador.classList.add("visible");
    if (!animar) {
        indicador.offsetWidth; // fuerza el cálculo antes de reactivar la animación
        indicador.style.transition = "";
    }
}

opciones.forEach((opcion) => {
    opcion.addEventListener("mouseenter", () => moverIndicador(opcion));
    opcion.addEventListener("focusin", () => moverIndicador(opcion));
});
menu.addEventListener("mouseleave", () => moverIndicador(activa));
menu.addEventListener("focusout", (e) => {
    if (!menu.contains(e.relatedTarget)) moverIndicador(activa);
});
window.addEventListener("resize", () => {
    moverIndicador(activa, false);
    if (window.innerWidth > 1024) cerrarTodo();
});
moverIndicador(activa, false);

// --- Submenús: se abren con clic o teclado (el ratón los abre desde el CSS)
function cerrarSubmenus(excepto) {
    desplegables.forEach((d) => {
        if (d !== excepto) {
            d.classList.remove("abierto");
            d.querySelector(".menu-boton").setAttribute("aria-expanded", "false");
        }
    });
}

desplegables.forEach((d) => {
    const boton = d.querySelector(".menu-boton");
    boton.addEventListener("click", () => {
        const abierto = d.classList.toggle("abierto");
        boton.setAttribute("aria-expanded", String(abierto));
        cerrarSubmenus(d);
    });
});

// --- Menú móvil (hamburguesa)
function cerrarTodo() {
    barra.classList.remove("abierta");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
    cerrarSubmenus();
}

toggle.addEventListener("click", () => {
    const abierta = barra.classList.toggle("abierta");
    toggle.setAttribute("aria-expanded", String(abierta));
    toggle.setAttribute("aria-label", abierta ? "Cerrar menú" : "Abrir menú");
    if (!abierta) cerrarSubmenus();
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".barra")) cerrarTodo();
    else if (!e.target.closest(".desplegable")) cerrarSubmenus();
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrarTodo();
});

// --- Sombra de la barra al bajar
window.addEventListener("scroll", () => {
    barra.classList.toggle("con-sombra", window.scrollY > 4);
}, { passive: true });

// --- Modo claro / oscuro (se recuerda la elección)
const botonTema = document.querySelector(".tema-toggle");

function aplicarTema(tema, guardar) {
    document.documentElement.dataset.tema = tema;
    const oscuro = tema === "oscuro";
    botonTema.setAttribute("aria-pressed", String(oscuro));
    botonTema.setAttribute("aria-label", oscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
    if (guardar) {
        try { localStorage.setItem("tema", tema); } catch (error) { /* sin almacenamiento */ }
    }
}

aplicarTema(document.documentElement.dataset.tema === "oscuro" ? "oscuro" : "claro", false);
botonTema.addEventListener("click", () => {
    aplicarTema(document.documentElement.dataset.tema === "oscuro" ? "claro" : "oscuro", true);
});

window.addEventListener("storage", (evento) => {
    if (evento.key === "tema") {
        aplicarTema(evento.newValue === "oscuro" ? "oscuro" : "claro", false);
    }
});
