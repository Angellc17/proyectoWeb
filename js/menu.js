// Menú desplegable: se abre y se cierra con clic o teclado
// (además de al pasar el ratón, que lo gestiona el CSS).
const menus = document.querySelectorAll(".desplegable");

function cerrarMenus(excepto) {
    menus.forEach((menu) => {
        if (menu !== excepto) {
            menu.classList.remove("abierto");
            menu.querySelector(".menu-boton").setAttribute("aria-expanded", "false");
        }
    });
}

menus.forEach((menu) => {
    const boton = menu.querySelector(".menu-boton");
    boton.addEventListener("click", () => {
        const abierto = menu.classList.toggle("abierto");
        boton.setAttribute("aria-expanded", String(abierto));
        cerrarMenus(menu);
    });
});

// Clic fuera del menú o tecla Escape: se cierran todos
document.addEventListener("click", (evento) => {
    if (!evento.target.closest(".desplegable")) cerrarMenus();
});
document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") cerrarMenus();
});
