// Panel lateral "Ver código": pestañas, copiar y cierre con Escape.
(() => {
    const abrir = document.querySelector(".codigo-abrir");
    const panel = document.querySelector(".codigo-panel");
    if (!abrir || !panel) return;

    const fondo = document.querySelector(".codigo-fondo");
    const cerrar = panel.querySelector(".codigo-cerrar");
    const copiar = panel.querySelector(".codigo-copiar");
    const tabs = [...panel.querySelectorAll('[role="tab"]')];
    const bloques = [...panel.querySelectorAll(".codigo-bloque")];

    panel.inert = true; // cerrado: no se puede enfocar nada dentro

    function mostrar(abierto) {
        panel.classList.toggle("abierto", abierto);
        fondo.classList.toggle("abierto", abierto);
        abrir.setAttribute("aria-expanded", String(abierto));
        panel.inert = !abierto;
        (abierto ? cerrar : abrir).focus();
    }

    function elegir(i) {
        tabs.forEach((tab, k) => {
            tab.setAttribute("aria-selected", String(k === i));
            tab.tabIndex = k === i ? 0 : -1;
            bloques[k].hidden = k !== i;
        });
        panel.querySelector(".codigo-cuerpo").scrollTop = 0;
    }

    tabs.forEach((tab, i) => {
        tab.addEventListener("click", () => elegir(i));
        tab.addEventListener("keydown", (e) => {
            if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
            const siguiente = (i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
            elegir(siguiente);
            tabs[siguiente].focus();
        });
    });

    copiar.addEventListener("click", async () => {
        const texto = bloques.find((b) => !b.hidden).textContent;
        try {
            await navigator.clipboard.writeText(texto);
        } catch (error) {
            // Alternativa para páginas abiertas desde un archivo local
            const area = document.createElement("textarea");
            area.value = texto;
            document.body.appendChild(area);
            area.select();
            document.execCommand("copy");
            area.remove();
        }
        copiar.textContent = "¡Copiado!";
        setTimeout(() => (copiar.textContent = "Copiar"), 1500);
    });

    abrir.addEventListener("click", () => mostrar(true));
    cerrar.addEventListener("click", () => mostrar(false));
    fondo.addEventListener("click", () => mostrar(false));
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && panel.classList.contains("abierto")) mostrar(false);
    });
})();
