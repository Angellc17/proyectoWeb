const scriptBase = new URL("../", document.currentScript.src);
const homeUrl = new URL("index.html", scriptBase).href;

if (!document.body.classList.contains("portafolio")) {
    const header = document.createElement("header");
    header.className = "site-topbar";
    header.innerHTML = `
        <a class="site-brand" href="${homeUrl}">
            <span class="site-brand-mark" aria-hidden="true">A</span>
            <span>Mi portafolio<span class="site-brand-dot">.</span></span>
        </a>
        <nav class="site-nav" aria-label="Navegación principal">
            <a href="${homeUrl}">Inicio</a>
            <a href="${new URL("html/horario.html", scriptBase).href}">Horario</a>
            <a href="${new URL("html/formulario.html", scriptBase).href}">Formulario</a>
            <a href="${new URL("html/inicio_js.html", scriptBase).href}">JavaScript</a>
            <a href="${homeUrl}#ejercicios">Ejercicios</a>
        </nav>
        <button class="theme-toggle" type="button" aria-pressed="true">
            <span class="theme-icon" aria-hidden="true">☼</span>
            <span class="theme-label">Modo claro</span>
        </button>`;
    const existingHeader = document.querySelector(".cabecera");
    if (existingHeader) {
        existingHeader.replaceWith(header);
    } else {
        document.body.prepend(header);
    }
}

const themeButton = document.querySelector(".theme-toggle");
const themeLabel = themeButton.querySelector(".theme-label");

function updateTheme(theme) {
    const isDark = theme === "dark";
    document.body.dataset.theme = theme;
    themeButton.setAttribute("aria-pressed", String(isDark));
    themeButton.setAttribute("aria-label", `Cambiar a modo ${isDark ? "claro" : "oscuro"}`);
    themeLabel.textContent = `Modo ${isDark ? "claro" : "oscuro"}`;
}

try {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") updateTheme(savedTheme);
} catch (error) {
    console.warn("No se pudo recuperar el tema guardado.", error);
}

themeButton.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    updateTheme(nextTheme);

    try {
        localStorage.setItem("portfolio-theme", nextTheme);
    } catch (error) {
        console.warn("No se pudo guardar la preferencia de tema.", error);
    }
});
